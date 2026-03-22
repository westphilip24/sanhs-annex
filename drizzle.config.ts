import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    // For local development with Wrangler
    url: "./dev.db",
  },
} satisfies Config;
