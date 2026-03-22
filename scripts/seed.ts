/**
 * Seed script for SANHS Annex database
 * Run: npx tsx scripts/seed.ts
 *
 * Test accounts:
 * - Admin:    admin@sanhs.edu.ph / Admin@2026!
 * - Teacher:  m.santos@sanhs.edu.ph / Teacher@2026!
 * - Parent:   j.delacruz@email.com / Parent@2026!
 * - Student:  a.belmonte@sanhs.edu.ph / Student@2026!
 */

import { drizzle } from "drizzle-orm/d1";
import * as schema from "../src/db/schema";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const now = new Date().toISOString();

async function seed(db: any) {
  console.log("🌱 Seeding SANHS Annex database...");

  // =========================================
  // USERS
  // =========================================
  const adminId = uuidv4();
  const teacherId = uuidv4();
  const parentId = uuidv4();
  const studentId = uuidv4();

  const adminHash = await bcrypt.hash("Admin@2026!", 12);
  const teacherHash = await bcrypt.hash("Teacher@2026!", 12);
  const parentHash = await bcrypt.hash("Parent@2026!", 12);
  const studentHash = await bcrypt.hash("Student@2026!", 12);

  await db.insert(schema.users).values([
    {
      id: adminId,
      email: "admin@sanhs.edu.ph",
      passwordHash: adminHash,
      role: "ADMIN",
      firstName: "Miguel",
      lastName: "Santos",
      phone: "+63 917 123 4567",
      isActive: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: teacherId,
      email: "m.santos@sanhs.edu.ph",
      passwordHash: teacherHash,
      role: "TEACHER",
      firstName: "Maria",
      lastName: "Santos",
      phone: "+63 917 234 5678",
      isActive: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: parentId,
      email: "j.delacruz@email.com",
      passwordHash: parentHash,
      role: "PARENT",
      firstName: "Jose",
      lastName: "Dela Cruz",
      phone: "+63 912 345 6789",
      isActive: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: studentId,
      email: "a.belmonte@sanhs.edu.ph",
      passwordHash: studentHash,
      role: "STUDENT",
      firstName: "Ana",
      lastName: "Belmonte",
      phone: "+63 915 456 7890",
      isActive: true,
      createdAt: now,
      updatedAt: now,
    },
  ]);

  console.log("✅ Users created");

  // =========================================
  // TEACHERS
  // =========================================
  const teacherRecId = uuidv4();
  await db.insert(schema.teachers).values({
    id: teacherRecId,
    userId: teacherId,
    employeeId: "T-2024-001",
    gender: "FEMALE",
    dateOfBirth: "1985-03-15",
    department: "Mathematics",
    position: "Teacher I",
    isActive: true,
    createdAt: now,
    updatedAt: now,
  });

  console.log("✅ Teachers created");

  // =========================================
  // STUDENTS
  // =========================================
  const studentRecId = uuidv4();
  await db.insert(schema.students).values({
    id: studentRecId,
    userId: studentId,
    lrn: "314926123456",
    gradeLevel: "GRADE_10",
    section: "Balik-Hand 10-A",
    academicTrack: null,
    gender: "FEMALE",
    dateOfBirth: "2010-06-20",
    address: "Cabadiangan, Kadingilan, Bukidnon",
    motherName: "Luzviminda Belmonte",
    fatherName: "Roberto Belmonte",
    guardianName: "Luzviminda Belmonte",
    guardianRelation: "Mother",
    guardianPhone: "+63 912 345 6789",
    guardianEmail: "l.belmonte@email.com",
    enrollmentStatus: "ENROLLED",
    schoolYear: "2025-2026",
    createdAt: now,
    updatedAt: now,
  });

  console.log("✅ Students created");

  // =========================================
  // GRADE 7-10 SHS SUBJECTS
  // =========================================
  const subjectIds: Record<string, string> = {};
  const subjects = [
    { name: "Mathematics", code: "MATH7", gradeLevel: "GRADE_7" },
    { name: "Science", code: "SCI7", gradeLevel: "GRADE_7" },
    { name: "English", code: "ENG7", gradeLevel: "GRADE_7" },
    { name: "Filipino", code: "FIL7", gradeLevel: "GRADE_7" },
    { name: "Araling Panlipunan", code: "AP7", gradeLevel: "GRADE_7" },
    { name: "Mathematics", code: "MATH10", gradeLevel: "GRADE_10" },
    { name: "Science", code: "SCI10", gradeLevel: "GRADE_10" },
    { name: "English", code: "ENG10", gradeLevel: "GRADE_10" },
    { name: "Filipino", code: "FIL10", gradeLevel: "GRADE_10" },
    { name: "Araling Panlipunan", code: "AP10", gradeLevel: "GRADE_10" },
    { name: "TLE", code: "TLE10", gradeLevel: "GRADE_10" },
    { name: "MAPEH", code: "MAPEH10", gradeLevel: "GRADE_10" },
    // SHS Subjects
    { name: "General Mathematics", code: "GENMATH11", gradeLevel: "GRADE_11", track: "ABM" },
    { name: "Accounting", code: "ACCNT11", gradeLevel: "GRADE_11", track: "ABM" },
    { name: "Humanities", code: "HUM11", gradeLevel: "GRADE_11", track: "HUMSS" },
    { name: "Social Science", code: "SOCSCI11", gradeLevel: "GRADE_11", track: "HUMSS" },
    { name: "Home Economics", code: "HE11", gradeLevel: "GRADE_11", track: "HE" },
    { name: "Food and Beverage", code: "FB11", gradeLevel: "GRADE_11", track: "HE" },
    { name: "Special Program in the Arts", code: "SPA11", gradeLevel: "GRADE_11", track: "SPA" },
    { name: "Research", code: "RES11", gradeLevel: "GRADE_11", track: "STEM" },
  ];

  for (const subj of subjects) {
    const id = uuidv4();
    subjectIds[subj.code] = id;
    await db.insert(schema.subjects).values({
      id,
      name: subj.name,
      code: subj.code,
      gradeLevel: subj.gradeLevel as any,
      track: (subj as any).track || null,
      isActive: true,
    });
  }

  console.log("✅ Subjects created");

  // =========================================
  // CLASS SECTIONS
  // =========================================
  const sectionIds: string[] = [];
  const sections = [
    { name: "Balik-Hand 7-A", gradeLevel: "GRADE_7", year: "2025-2026" },
    { name: "Balik-Hand 8-A", gradeLevel: "GRADE_8", year: "2025-2026" },
    { name: "Balik-Hand 9-A", gradeLevel: "GRADE_9", year: "2025-2026" },
    { name: "Balik-Hand 10-A", gradeLevel: "GRADE_10", year: "2025-2026" },
    { name: "ABM 11-A", gradeLevel: "GRADE_11", year: "2025-2026" },
    { name: "HUMSS 11-A", gradeLevel: "GRADE_11", year: "2025-2026" },
    { name: "HE 11-A", gradeLevel: "GRADE_11", year: "2025-2026" },
    { name: "SPA 11-A", gradeLevel: "GRADE_11", year: "2025-2026" },
  ];

  for (const sec of sections) {
    const id = uuidv4();
    sectionIds.push(id);
    await db.insert(schema.classSections).values({
      id,
      name: sec.name,
      gradeLevel: sec.gradeLevel as any,
      academicYear: sec.year,
      adviserId: teacherRecId,
      maxStudents: 45,
    });
  }

  console.log("✅ Class sections created");

  // =========================================
  // CLASS SUBJECTS
  // =========================================
  const grade10SectionId = sectionIds[3]; // Balik-Hand 10-A
  const classSubjectIds: string[] = [];

  const grade10Subjects = ["MATH10", "SCI10", "ENG10", "FIL10", "AP10", "TLE10", "MAPEH10"];
  for (const code of grade10Subjects) {
    const id = uuidv4();
    classSubjectIds.push(id);
    await db.insert(schema.classSubjects).values({
      id,
      classSectionId: grade10SectionId,
      subjectId: subjectIds[code],
      teacherId: teacherRecId,
      scheduleDays: "MWF",
      scheduleStart: "08:00",
      scheduleEnd: "09:00",
    });
  }

  console.log("✅ Class subjects created");

  // =========================================
  // ENROLLMENT
  // =========================================
  await db.insert(schema.studentClassEnrollments).values({
    id: uuidv4(),
    studentId: studentRecId,
    classSectionId: grade10SectionId,
    schoolYear: "2025-2026",
    enrolledAt: now,
  });

  console.log("✅ Enrollments created");

  // =========================================
  // GRADING PERIODS (SY 2025-2026)
  // =========================================
  const q1Id = uuidv4();
  const q2Id = uuidv4();
  const q3Id = uuidv4();
  const q4Id = uuidv4();

  await db.insert(schema.gradingPeriods).values([
    { id: q1Id, schoolYear: "2025-2026", quarter: "Q1", startDate: "2025-06-02", endDate: "2025-09-30", isActive: false },
    { id: q2Id, schoolYear: "2025-2026", quarter: "Q2", startDate: "2025-10-01", endDate: "2025-12-15", isActive: false },
    { id: q3Id, schoolYear: "2025-2026", quarter: "Q3", startDate: "2026-01-05", endDate: "2026-03-31", isActive: true },
    { id: q4Id, schoolYear: "2025-2026", quarter: "Q4", startDate: "2026-04-01", endDate: "2026-05-15", isActive: false },
  ]);

  console.log("✅ Grading periods created");

  // =========================================
  // ANNOUNCEMENTS
  // =========================================
  await db.insert(schema.announcements).values([
    {
      id: uuidv4(),
      title: "Mid-Year Enrollment Now Open for SY 2025-2026",
      content: `<p>We are now accepting enrollees for the second semester of School Year 2025-2026. New students and transferees are welcome.</p><p>Requirements: Form 137, PSA Birth Certificate, 2x2 ID Photo, and vaccination record.</p>`,
      excerpt: "Enroll now for second semester SY 2025-2026",
      target: "ALL",
      isPinned: true,
      isPublished: true,
      publishedAt: now,
      createdById: adminId,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: uuidv4(),
      title: "Intramurals 2025 — July 30",
      content: `<p>Annual school intramurals will be held on July 30, 2025 at the school grounds. All students are encouraged to participate.</p>`,
      excerpt: "Annual sports event on July 30, 2025",
      target: "ALL",
      isPinned: false,
      isPublished: true,
      publishedAt: now,
      createdById: adminId,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: uuidv4(),
      title: "Grand Alumni Homecoming — December 5, 2025",
      content: `<p>Calling all alumni! Join us on December 5, 2025 for the Grand Alumni Homecoming. Registration starts at 8AM.</p>`,
      excerpt: "Alumni homecoming on December 5, 2025",
      target: "ALL",
      isPinned: true,
      isPublished: true,
      publishedAt: now,
      createdById: adminId,
      createdAt: now,
      updatedAt: now,
    },
  ]);

  console.log("✅ Announcements created");

  // =========================================
  // EVENTS
  // =========================================
  await db.insert(schema.events).values([
    {
      id: uuidv4(),
      title: "Intramurals 2025",
      description: "Annual school sports festival",
      location: "SANHS Annex Grounds",
      startDate: "2025-07-30T07:00:00Z",
      endDate: "2025-07-30T17:00:00Z",
      isAllDay: false,
      eventType: "SPORTS",
      isPublished: true,
      createdById: adminId,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: uuidv4(),
      title: "Grand Alumni Homecoming",
      description: "Alumni homecoming celebration",
      location: "SANHS Annex",
      startDate: "2025-12-05T08:00:00Z",
      endDate: "2025-12-05T22:00:00Z",
      isAllDay: false,
      eventType: "CULTURAL",
      isPublished: true,
      createdById: adminId,
      createdAt: now,
      updatedAt: now,
    },
  ]);

  console.log("✅ Events created");

  // =========================================
  // NEWS POSTS
  // =========================================
  await db.insert(schema.newsPosts).values([
    {
      id: uuidv4(),
      title: "JERU Team Wins 1st Place — Municipal Olympics 2025",
      content: `<p>Congratulations to our JERU Team for winning 1st Place in the recently concluded Municipal Olympics 2025!</p><p>Our student-athletes showcased exceptional talent and sportsmanship representing SANHS Annex with pride.</p>`,
      excerpt: "Our JERU Team brings home the gold from Municipal Olympics 2025",
      slug: "jeru-team-municipal-olympics-2025",
      isPublished: true,
      publishedAt: now,
      authorId: adminId,
      tags: "sports,olympics,achievement",
      createdAt: now,
      updatedAt: now,
    },
  ]);

  console.log("✅ News posts created");

  console.log("\n🎉 Seed complete!");
  console.log("\n📋 Test Accounts:");
  console.log("  Admin:    admin@sanhs.edu.ph / Admin@2026!");
  console.log("  Teacher:  m.santos@sanhs.edu.ph / Teacher@2026!");
  console.log("  Parent:   j.delacruz@email.com / Parent@2026!");
  console.log("  Student:  a.belmonte@sanhs.edu.ph / Student@2026!");
}

// Run with: npx tsx scripts/seed.ts
// The DB binding is injected at runtime by Next.js / CF Pages
declare const globalThis: { __D1_Binding__?: D1Database };
const db = drizzle((globalThis as any).__D1_Binding__ || process.env.DB as any, { schema });
seed(db).catch(console.error);
