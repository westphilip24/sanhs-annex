import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { createDb } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

type UserRole = "ADMIN" | "TEACHER" | "PARENT" | "STUDENT";

// Extend the built-in types with our custom fields
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: UserRole;
      id?: string;
    };
  }
}

/**
 * Auth configuration for server-side (API routes, Server Components)
 * Uses DrizzleAdapter + bcryptjs — Node.js runtime only
 */
const serverConfig = {
  adapter: DrizzleAdapter(createDb(process.env.DB as unknown as D1Database)),
  session: { strategy: "jwt" as const },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const db = createDb(process.env.DB as unknown as D1Database);
        const user = await db.query.users.findFirst({
          where: eq(users.email, credentials.email as string),
        });

        if (!user || !user.passwordHash) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        );

        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
};

/**
 * Auth configuration for Edge runtime (middleware)
 * Uses JWT strategy only — NO bcrypt, NO adapter
 */
const edgeConfig = {
  session: { strategy: "jwt" as const },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [],
  trustHost: true,
};

// Server-side: full NextAuth with credentials + Drizzle
export const { handlers, auth, signIn, signOut } = NextAuth(serverConfig);

// Edge middleware: JWT-only (no bcrypt, no adapter)
export const { handlers: edgeHandlers, auth: edgeAuth } = NextAuth(edgeConfig);
