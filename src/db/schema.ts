import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// =========================================
// ENUMS
// =========================================
export const UserRole = {
  ADMIN: "ADMIN",
  TEACHER: "TEACHER",
  PARENT: "PARENT",
  STUDENT: "STUDENT",
} as const;

export const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
} as const;

export const GradeLevel = {
  GRADE_7: "GRADE_7",
  GRADE_8: "GRADE_8",
  GRADE_9: "GRADE_9",
  GRADE_10: "GRADE_10",
  GRADE_11: "GRADE_11",
  GRADE_12: "GRADE_12",
} as const;

export const AcademicTrack = {
  ABM: "ABM",
  GAS: "GAS",
  HUMSS: "HUMSS",
  HE: "HE",
  SPA: "SPA",
  STEM: "STEM",
} as const;

export const AssessmentType = {
  WRITTEN_WORK: "WRITTEN_WORK",
  PERFORMANCE_TASK: "PERFORMANCE_TASK",
  QUARTERLY_ASSESSMENT: "QUARTERLY_ASSESSMENT",
} as const;

export const Quarter = {
  Q1: "Q1",
  Q2: "Q2",
  Q3: "Q3",
  Q4: "Q4",
} as const;

export const AnnouncementTarget = {
  PUBLIC: "PUBLIC",
  STUDENTS: "STUDENTS",
  PARENTS: "PARENTS",
  TEACHERS: "TEACHERS",
  ALL: "ALL",
} as const;

export const AttendanceStatus = {
  PRESENT: "PRESENT",
  ABSENT: "ABSENT",
  LATE: "LATE",
  EXCUSED: "EXCUSED",
} as const;

// =========================================
// USERS & AUTH
// =========================================
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role", { enum: Object.values(UserRole) }).notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone"),
  avatarUrl: text("avatar_url"),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  lastLoginAt: text("last_login_at"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: text("expires_at").notNull(),
});

// =========================================
// STUDENTS
// =========================================
export const students = sqliteTable("students", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  lrn: text("lrn").notNull().unique(), // DepEd 12-digit LRN
  gradeLevel: text("grade_level", { enum: Object.values(GradeLevel) }).notNull(),
  section: text("section").notNull(),
  academicTrack: text("academic_track", { enum: Object.values(AcademicTrack) }),
  gender: text("gender", { enum: Object.values(Gender) }).notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  address: text("address"),
  motherName: text("mother_name"),
  fatherName: text("father_name"),
  guardianName: text("guardian_name").notNull(),
  guardianRelation: text("guardian_relation"),
  guardianPhone: text("guardian_phone"),
  guardianEmail: text("guardian_email"),
  enrollmentStatus: text("enrollment_status").default("ENROLLED"),
  schoolYear: text("school_year").notNull(), // e.g. "2025-2026"
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

// =========================================
// TEACHERS
// =========================================
export const teachers = sqliteTable("teachers", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  employeeId: text("employee_id").notNull().unique(),
  gender: text("gender", { enum: Object.values(Gender) }).notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  department: text("department"),
  position: text("position").default("Teacher"),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

// =========================================
// CLASSES & SUBJECTS
// =========================================
export const subjects = sqliteTable("subjects", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull().unique(),
  description: text("description"),
  gradeLevel: text("grade_level", { enum: Object.values(GradeLevel) }),
  track: text("academic_track", { enum: Object.values(AcademicTrack) }), // null = all tracks
  isActive: integer("is_active", { mode: "boolean" }).default(true),
});

export const classSections = sqliteTable("class_sections", {
  id: text("id").primaryKey(),
  name: text("name").notNull(), // "Balik-Hand 7-A"
  gradeLevel: text("grade_level", { enum: Object.values(GradeLevel) }).notNull(),
  academicYear: text("academic_year").notNull(),
  adviserId: text("adviser_id").references(() => teachers.id),
  maxStudents: integer("max_students").default(45),
});

export const classSubjects = sqliteTable("class_subjects", {
  id: text("id").primaryKey(),
  classSectionId: text("class_section_id")
    .notNull()
    .references(() => classSections.id, { onDelete: "cascade" }),
  subjectId: text("subject_id")
    .notNull()
    .references(() => subjects.id),
  teacherId: text("teacher_id")
    .notNull()
    .references(() => teachers.id),
  scheduleDays: text("schedule_days").notNull(), // "MWF" or "TTh"
  scheduleStart: text("schedule_start").notNull(), // "08:00"
  scheduleEnd: text("schedule_end").notNull(), // "09:00"
});

export const studentClassEnrollments = sqliteTable("student_class_enrollments", {
  id: text("id").primaryKey(),
  studentId: text("student_id")
    .notNull()
    .references(() => students.id, { onDelete: "cascade" }),
  classSectionId: text("class_section_id")
    .notNull()
    .references(() => classSections.id, { onDelete: "cascade" }),
  schoolYear: text("school_year").notNull(),
  enrolledAt: text("enrolled_at").notNull(),
});

// =========================================
// GRADING — DepEd WW/PT/QA System
// =========================================
export const gradingPeriods = sqliteTable("grading_periods", {
  id: text("id").primaryKey(),
  schoolYear: text("school_year").notNull(),
  quarter: text("quarter", { enum: Object.values(Quarter) }).notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  isActive: integer("is_active", { mode: "boolean" }).default(false),
});

export const subjectWeights = sqliteTable("subject_weights", {
  id: text("id").primaryKey(),
  subjectId: text("subject_id")
    .notNull()
    .references(() => subjects.id),
  gradingPeriodId: text("grading_period_id")
    .notNull()
    .references(() => gradingPeriods.id),
  writtenWorkPercent: real("written_work_percent").notNull().default(30),
  performanceTaskPercent: real("performance_task_percent").notNull().default(50),
  quarterlyAssessmentPercent: real("quarterly_assessment_percent").notNull().default(20),
});

export const assessments = sqliteTable("assessments", {
  id: text("id").primaryKey(),
  classSubjectId: text("class_subject_id")
    .notNull()
    .references(() => classSubjects.id, { onDelete: "cascade" }),
  teacherId: text("teacher_id")
    .notNull()
    .references(() => teachers.id),
  title: text("title").notNull(),
  type: text("type", { enum: Object.values(AssessmentType) }).notNull(),
  maxScore: real("max_score").notNull(),
  dueDate: text("due_date"),
  quarter: text("quarter", { enum: Object.values(Quarter) }).notNull(),
  schoolYear: text("school_year").notNull(),
  createdAt: text("created_at").notNull(),
});

export const assessmentScores = sqliteTable("assessment_scores", {
  id: text("id").primaryKey(),
  assessmentId: text("assessment_id")
    .notNull()
    .references(() => assessments.id, { onDelete: "cascade" }),
  studentId: text("student_id")
    .notNull()
    .references(() => students.id, { onDelete: "cascade" }),
  score: real("score").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const quarterlyGrades = sqliteTable("quarterly_grades", {
  id: text("id").primaryKey(),
  studentId: text("student_id")
    .notNull()
    .references(() => students.id, { onDelete: "cascade" }),
  classSubjectId: text("class_subject_id")
    .notNull()
    .references(() => classSubjects.id, { onDelete: "cascade" }),
  gradingPeriodId: text("grading_period_id")
    .notNull()
    .references(() => gradingPeriods.id),
  // Component grades (raw percentage)
  writtenWorkGrade: real("written_work_grade"),
  performanceTaskGrade: real("performance_task_grade"),
  quarterlyAssessmentGrade: real("quarterly_assessment_grade"),
  // Computed quarterly grade
  quarterlyGrade: real("quarterly_grade"), // transmuted 0-100
  finalGrade: real("final_grade"), // 1.0-5.0 scale
  isRemedial: integer("is_remedial", { mode: "boolean" }).default(false),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const semesterGrades = sqliteTable("semester_grades", {
  id: text("id").primaryKey(),
  studentId: text("student_id")
    .notNull()
    .references(() => students.id, { onDelete: "cascade" }),
  classSubjectId: text("class_subject_id")
    .notNull()
    .references(() => classSubjects.id, { onDelete: "cascade" }),
  schoolYear: text("school_year").notNull(),
  semester: integer("semester").notNull(), // 1 or 2
  q1Grade: real("q1_grade"),
  q2Grade: real("q2_grade"),
  semesterGrade: real("semester_grade"), // 1.0-5.0
  remarks: text("remarks"), // "PASSED" or "FAILED"
  createdAt: text("created_at").notNull(),
});

// =========================================
// ATTENDANCE
// =========================================
export const attendance = sqliteTable("attendance", {
  id: text("id").primaryKey(),
  studentId: text("student_id")
    .notNull()
    .references(() => students.id, { onDelete: "cascade" }),
  classSectionId: text("class_section_id")
    .notNull()
    .references(() => classSections.id),
  date: text("date").notNull(), // YYYY-MM-DD
  status: text("status", { enum: Object.values(AttendanceStatus) }).notNull(),
  remarks: text("remarks"),
  recordedById: text("recorded_by_id")
    .notNull()
    .references(() => teachers.id),
  createdAt: text("created_at").notNull(),
});

// =========================================
// ANNOUNCEMENTS
// =========================================
export const announcements = sqliteTable("announcements", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(), // Rich text (HTML)
  excerpt: text("excerpt"),
  target: text("target", { enum: Object.values(AnnouncementTarget) }).default("ALL"),
  isPinned: integer("is_pinned", { mode: "boolean" }).default(false),
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  publishedAt: text("published_at"),
  scheduledAt: text("scheduled_at"),
  expiresAt: text("expires_at"),
  bannerImageUrl: text("banner_image_url"),
  createdById: text("created_by_id")
    .notNull()
    .references(() => users.id),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

// =========================================
// EVENTS
// =========================================
export const events = sqliteTable("events", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  location: text("location"),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  isAllDay: integer("is_all_day", { mode: "boolean" }).default(true),
  eventType: text("event_type"), // "ACADEMIC", "SPORTS", "CULTURAL", "ADMIN"
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  createdById: text("created_by_id")
    .notNull()
    .references(() => users.id),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

// =========================================
// NEWS
// =========================================
export const newsPosts = sqliteTable("news_posts", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  slug: text("slug").notNull().unique(),
  coverImageUrl: text("cover_image_url"),
  authorId: text("author_id")
    .notNull()
    .references(() => users.id),
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  publishedAt: text("published_at"),
  tags: text("tags"), // comma-separated
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

// =========================================
// ENROLLMENT INQUIRIES
// =========================================
export const enrollmentInquiries = sqliteTable("enrollment_inquiries", {
  id: text("id").primaryKey(),
  // Learner info
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  gender: text("gender", { enum: Object.values(Gender) }).notNull(),
  lrn: text("lrn"), // null if new student
  previousSchool: text("previous_school"),
  // Parent/Guardian
  guardianName: text("guardian_name").notNull(),
  guardianPhone: text("guardian_phone").notNull(),
  guardianEmail: text("guardian_email"),
  relationship: text("relationship").notNull(),
  // Address
  address: text("address").notNull(),
  // Enrollment preference
  gradeLevel: text("grade_level", { enum: Object.values(GradeLevel) }).notNull(),
  academicTrack: text("academic_track", { enum: Object.values(AcademicTrack) }),
  preferredSchoolYear: text("preferred_school_year").notNull(),
  // Status
  status: text("status").default("PENDING"), // PENDING, CONTACTED, ENROLLED, REJECTED
  notes: text("notes"),
  submittedAt: text("submitted_at").notNull(),
});

// =========================================
// RELATIONS
// =========================================
export const usersRelations = relations(users, ({ many, one }) => ({
  sessions: many(sessions),
  student: one(students, { fields: [users.id], references: [students.userId] }),
  teacher: one(teachers, { fields: [users.id], references: [teachers.userId] }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const studentsRelations = relations(students, ({ one, many }) => ({
  user: one(users, { fields: [students.userId], references: [users.id] }),
  enrollments: many(studentClassEnrollments),
  quarterlyGrades: many(quarterlyGrades),
  assessmentScores: many(assessmentScores),
  attendance: many(attendance),
}));

export const teachersRelations = relations(teachers, ({ one, many }) => ({
  user: one(users, { fields: [teachers.userId], references: [users.id] }),
  classSubjects: many(classSubjects),
  assessments: many(assessments),
  attendanceRecords: many(attendance),
}));

export const subjectsRelations = relations(subjects, ({ many }) => ({
  classSubjects: many(classSubjects),
  weights: many(subjectWeights),
}));

export const classSectionsRelations = relations(classSections, ({ one, many }) => ({
  adviser: one(teachers, { fields: [classSections.adviserId], references: [teachers.id] }),
  classSubjects: many(classSubjects),
  enrollments: many(studentClassEnrollments),
  attendance: many(attendance),
}));

export const classSubjectsRelations = relations(classSubjects, ({ one, many }) => ({
  classSection: one(classSections, {
    fields: [classSubjects.classSectionId],
    references: [classSections.id],
  }),
  subject: one(subjects, { fields: [classSubjects.subjectId], references: [subjects.id] }),
  teacher: one(teachers, { fields: [classSubjects.teacherId], references: [teachers.id] }),
  assessments: many(assessments),
  quarterlyGrades: many(quarterlyGrades),
  semesterGrades: many(semesterGrades),
}));

export const assessmentsRelations = relations(assessments, ({ one, many }) => ({
  classSubject: one(classSubjects, {
    fields: [assessments.classSubjectId],
    references: [classSubjects.id],
  }),
  teacher: one(teachers, { fields: [assessments.teacherId], references: [teachers.id] }),
  scores: many(assessmentScores),
}));

export const announcementsRelations = relations(announcements, ({ one }) => ({
  creator: one(users, { fields: [announcements.createdById], references: [users.id] }),
}));

export const eventsRelations = relations(events, ({ one }) => ({
  creator: one(users, { fields: [events.createdById], references: [users.id] }),
}));

export const newsPostsRelations = relations(newsPosts, ({ one }) => ({
  author: one(users, { fields: [newsPosts.authorId], references: [users.id] }),
}));
