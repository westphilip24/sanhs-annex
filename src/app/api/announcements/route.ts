import { NextRequest, NextResponse } from "next/server";
import { createDb } from "@/db";
import { announcements } from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";

/**
 * GET /api/announcements
 * Public: list published announcements
 */
export async function GET(req: NextRequest) {
  try {
    const db = createDb(process.env.DB as unknown as D1Database);
    const { searchParams } = new URL(req.url);
    const target = searchParams.get("target") || "PUBLIC";
    const limit = parseInt(searchParams.get("limit") || "10");

    const results = await db
      .select()
      .from(announcements)
      .where(
        and(
          eq(announcements.isPublished, true),
          eq(announcements.target, target as any)
        )
      )
      .orderBy(desc(announcements.isPinned), desc(announcements.publishedAt))
      .limit(limit);

    return NextResponse.json(results);
  } catch (err) {
    console.error("GET /api/announcements error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST /api/announcements
 * Admin only: create announcement
 */
export async function POST(req: NextRequest) {
  try {
    const db = createDb(process.env.DB as unknown as D1Database);
    const body = await req.json() as {
      title?: string;
      content?: string;
      excerpt?: string;
      target?: string;
      isPinned?: boolean;
      isPublished?: boolean;
      scheduledAt?: string;
      expiresAt?: string;
      bannerImageUrl?: string;
      createdById?: string;
    };
    const { title, content, excerpt, target, isPinned, isPublished, scheduledAt, expiresAt, bannerImageUrl, createdById } = body;

    if (!title || !content || !createdById) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    await db.insert(announcements).values({
      id,
      title,
      content,
      excerpt: excerpt || content.substring(0, 160),
      target: (target || "ALL") as "PUBLIC" | "STUDENTS" | "PARENTS" | "TEACHERS" | "ALL",
      isPinned: isPinned || false,
      isPublished: isPublished || false,
      publishedAt: isPublished ? now : null,
      scheduledAt: scheduledAt || null,
      expiresAt: expiresAt || null,
      bannerImageUrl: bannerImageUrl || null,
      createdById,
      createdAt: now,
      updatedAt: now,
    } as any);

    const created = await db.query.announcements.findFirst({
      where: eq(announcements.id, id),
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("POST /api/announcements error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
