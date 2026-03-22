import { NextRequest, NextResponse } from "next/server";
import { createDb } from "@/db";
import { attendance } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

/**
 * GET /api/attendance?studentId=xxx
 * Returns attendance records for a student
 */
export async function GET(req: NextRequest) {
  try {
    const db = createDb(process.env.DB as unknown as D1Database);
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");
    const limit = parseInt(searchParams.get("limit") || "30");

    if (!studentId) {
      return NextResponse.json({ error: "studentId required" }, { status: 400 });
    }

    const records = await db
      .select({
        id: attendance.id,
        date: attendance.date,
        status: attendance.status,
        remarks: attendance.remarks,
      })
      .from(attendance)
      .where(eq(attendance.studentId, studentId))
      .orderBy(desc(attendance.date))
      .limit(limit);

    // Compute summary
    const present = records.filter(r => r.status === "PRESENT").length;
    const absent = records.filter(r => r.status === "ABSENT").length;
    const late = records.filter(r => r.status === "LATE").length;
    const total = records.length || 1;

    return NextResponse.json({
      records,
      summary: {
        present,
        absent,
        late,
        total,
        attendanceRate: `${Math.round((present / total) * 100)}%`,
      },
    });
  } catch (err) {
    console.error("GET /api/attendance error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
