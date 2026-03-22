import { NextRequest, NextResponse } from "next/server";
import { createDb } from "@/db";
import { quarterlyGrades, classSubjects, subjects, gradingPeriods } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

/**
 * GET /api/grades?studentId=xxx
 * Returns quarterly grades for a student across all subjects
 */
export async function GET(req: NextRequest) {
  try {
    const db = createDb(process.env.DB as unknown as D1Database);
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");

    if (!studentId) {
      return NextResponse.json({ error: "studentId required" }, { status: 400 });
    }

    const grades = await db
      .select({
        id: quarterlyGrades.id,
        quarterlyGrade: quarterlyGrades.quarterlyGrade,
        finalGrade: quarterlyGrades.finalGrade,
        isRemedial: quarterlyGrades.isRemedial,
        quarter: gradingPeriods.quarter,
        subjectName: subjects.name,
        subjectCode: subjects.code,
        classSubjectId: quarterlyGrades.classSubjectId,
      })
      .from(quarterlyGrades)
      .innerJoin(
        gradingPeriods,
        eq(quarterlyGrades.gradingPeriodId, gradingPeriods.id)
      )
      .innerJoin(
        classSubjects,
        eq(quarterlyGrades.classSubjectId, classSubjects.id)
      )
      .innerJoin(subjects, eq(classSubjects.subjectId, subjects.id))
      .where(eq(quarterlyGrades.studentId, studentId))
      .orderBy(desc(gradingPeriods.quarter));

    return NextResponse.json(grades);
  } catch (err) {
    console.error("GET /api/grades error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
