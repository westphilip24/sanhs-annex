import { NextRequest, NextResponse } from "next/server";
import { createDb } from "@/db";
import { enrollmentInquiries } from "@/db/schema";
import { desc } from "drizzle-orm";

interface InquiryBody {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  lrn?: string;
  previousSchool?: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail?: string;
  relationship: string;
  address: string;
  gradeLevel: string;
  academicTrack?: string;
  preferredSchoolYear: string;
}

/**
 * POST /api/inquiries
 * Submit enrollment inquiry form
 */
export async function POST(req: NextRequest) {
  try {
    const db = createDb(process.env.DB as unknown as D1Database);
    const body = (await req.json()) as InquiryBody;

    if (!body.firstName || !body.lastName || !body.dateOfBirth || !body.gender ||
        !body.guardianName || !body.guardianPhone || !body.address || !body.gradeLevel || !body.preferredSchoolYear) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    await db.insert(enrollmentInquiries).values({
      id,
      firstName: body.firstName,
      lastName: body.lastName,
      dateOfBirth: body.dateOfBirth,
      gender: body.gender,
      lrn: body.lrn ?? null,
      previousSchool: body.previousSchool ?? null,
      guardianName: body.guardianName,
      guardianPhone: body.guardianPhone,
      guardianEmail: body.guardianEmail ?? null,
      relationship: body.relationship,
      address: body.address,
      gradeLevel: body.gradeLevel,
      academicTrack: body.academicTrack ?? null,
      preferredSchoolYear: body.preferredSchoolYear,
      status: "PENDING",
      submittedAt: now,
    } as any);

    return NextResponse.json({ id, message: "Inquiry submitted successfully" }, { status: 201 });
  } catch (err) {
    console.error("POST /api/inquiries error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * GET /api/inquiries
 * Admin: list all inquiries
 */
export async function GET(_req: NextRequest) {
  try {
    const db = createDb(process.env.DB as unknown as D1Database);
    const results = await db
      .select()
      .from(enrollmentInquiries)
      .orderBy(desc(enrollmentInquiries.submittedAt));

    return NextResponse.json(results);
  } catch (err) {
    console.error("GET /api/inquiries error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
