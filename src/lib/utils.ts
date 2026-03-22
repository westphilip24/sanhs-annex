import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * DepEd Grade Transmutation
 * Converts 0-100 raw score to 0-100 transmuted score
 * Based on DepEd Order No. 8 s. 2015
 */
export function transmuteGrade(rawScore: number): number {
  if (rawScore >= 97) return 100;
  if (rawScore >= 94) return 99;
  if (rawScore >= 91) return 98;
  if (rawScore >= 88) return 97;
  if (rawScore >= 85) return 96;
  if (rawScore >= 82) return 95;
  if (rawScore >= 79) return 94;
  if (rawScore >= 76) return 93;
  if (rawScore >= 73) return 92;
  if (rawScore >= 70) return 91;
  if (rawScore >= 67) return 90;
  if (rawScore >= 64) return 89;
  if (rawScore >= 61) return 88;
  if (rawScore >= 58) return 87;
  if (rawScore >= 55) return 86;
  if (rawScore >= 52) return 85;
  if (rawScore >= 49) return 84;
  if (rawScore >= 46) return 83;
  if (rawScore >= 43) return 82;
  if (rawScore >= 40) return 81;
  if (rawScore >= 37) return 80;
  if (rawScore >= 34) return 79;
  if (rawScore >= 31) return 78;
  if (rawScore >= 28) return 77;
  if (rawScore >= 25) return 76;
  if (rawScore >= 22) return 75;
  return Math.max(75, rawScore);
}

/**
 * Convert transmuted score to DepEd grade (1.0 - 5.0)
 */
export function transmutedToGrade(transmuted: number): number {
  if (transmuted >= 95) return 1.0;
  if (transmuted >= 90) return 1.25;
  if (transmuted >= 85) return 1.5;
  if (transmuted >= 80) return 1.75;
  if (transmuted >= 75) return 2.0;
  if (transmuted >= 70) return 2.25;
  if (transmuted >= 65) return 2.5;
  if (transmuted >= 60) return 2.75;
  if (transmuted >= 55) return 3.0;
  return 5.0;
}

/**
 * Get grade descriptor
 */
export function getGradeDescriptor(grade: number): string {
  if (grade <= 1.0) return "Outstanding";
  if (grade <= 1.5) return "Very Satisfactory";
  if (grade <= 2.0) return "Satisfactory";
  if (grade <= 2.5) return "Fairly Satisfactory";
  if (grade <= 3.0) return "Did Not Meet Expectations";
  return "Poor";
}

/**
 * Get grade color class
 */
export function getGradeColor(grade: number): string {
  if (grade <= 1.0) return "text-grade-outstanding";
  if (grade <= 1.5) return "text-grade-very-satisfactory";
  if (grade <= 2.0) return "text-grade-satisfactory";
  if (grade <= 2.5) return "text-grade-fairly-satisfactory";
  return "text-grade-failing";
}

/**
 * Philippine school year format
 */
export function formatSchoolYear(year: number): string {
  return `${year}-${year + 1}`;
}

/**
 * Format date for Philippine context
 */
export function formatDatePH(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * LRN validation (12 digits)
 */
export function isValidLRN(lrn: string): boolean {
  return /^\d{12}$/.test(lrn);
}
