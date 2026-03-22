"use client";

import { useState } from "react";
import { getGradeColor, getGradeDescriptor } from "@/lib/utils";

const mockGrades = [
  { quarter: "Q1", subject: "Mathematics", code: "MATH10", grade: 1.5, status: "PASSED" },
  { quarter: "Q1", subject: "Science", code: "SCI10", grade: 1.25, status: "PASSED" },
  { quarter: "Q1", subject: "English", code: "ENG10", grade: 2.0, status: "PASSED" },
  { quarter: "Q1", subject: "Filipino", code: "FIL10", grade: 1.75, status: "PASSED" },
  { quarter: "Q1", subject: "Araling Panlipunan", code: "AP10", grade: 1.5, status: "PASSED" },
  { quarter: "Q1", subject: "MAPEH", code: "MAPEH10", grade: 1.25, status: "PASSED" },
  { quarter: "Q1", subject: "TLE", code: "TLE10", grade: 1.75, status: "PASSED" },
  { quarter: "Q2", subject: "Mathematics", code: "MATH10", grade: 1.25, status: "PASSED" },
  { quarter: "Q2", subject: "Science", code: "SCI10", grade: 1.5, status: "PASSED" },
  { quarter: "Q2", subject: "English", code: "ENG10", grade: 1.75, status: "PASSED" },
  { quarter: "Q2", subject: "Filipino", code: "FIL10", grade: 2.0, status: "PASSED" },
  { quarter: "Q2", subject: "Araling Panlipunan", code: "AP10", grade: 1.5, status: "PASSED" },
  { quarter: "Q2", subject: "MAPEH", code: "MAPEH10", grade: 1.0, status: "PASSED" },
  { quarter: "Q2", subject: "TLE", code: "TLE10", grade: 1.5, status: "PASSED" },
];

const quarters = ["Q1", "Q2", "Q3", "Q4"];

export default function GradesPage() {
  const [selectedQuarter, setSelectedQuarter] = useState("Q3");
  const grades = mockGrades.filter(g => g.quarter === selectedQuarter);

  const avgGrade = grades.length
    ? (grades.reduce((sum, g) => sum + g.grade, 0) / grades.length).toFixed(2)
    : "—";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">My Grades</h1>
        <p className="text-gray-500 text-sm mt-1">
          School Year 2025-2026 · Grade 10 — Balik-Hand 10-A
        </p>
      </div>

      {/* Quarter selector */}
      <div className="flex gap-2 mb-6">
        {quarters.map((q) => (
          <button
            key={q}
            onClick={() => setSelectedQuarter(q)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedQuarter === q
                ? "bg-[var(--sanhs-green)] text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-[var(--sanhs-green)]"
            }`}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Summary card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Current Quarter Average</p>
            <p className={`text-3xl font-bold ${getGradeColor(parseFloat(avgGrade))}`}>
              {avgGrade}
            </p>
            <p className="text-sm text-gray-500">{getGradeDescriptor(parseFloat(avgGrade))}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Status</p>
            <p className="text-lg font-bold text-[var(--sanhs-green)]">PASSED</p>
            <p className="text-sm text-gray-500">All subjects passing</p>
          </div>
        </div>
      </div>

      {/* Grades table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Subject</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Code</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Grade</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Descriptor</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((g, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-gray-900">{g.subject}</td>
                <td className="px-4 py-3 text-center text-gray-500 font-mono text-xs">{g.code}</td>
                <td className={`px-4 py-3 text-center font-bold ${getGradeColor(g.grade)}`}>
                  {g.grade.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-center text-gray-600 text-xs">
                  {getGradeDescriptor(g.grade)}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    g.status === "PASSED"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {g.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Grading scale legend */}
      <div className="mt-6 bg-white rounded-xl border border-gray-100 p-5">
        <h3 className="text-sm font-bold text-gray-700 mb-3">DepEd Grading Scale</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
          {[
            { grade: "1.0", desc: "Outstanding", color: "text-[var(--grade-outstanding)]" },
            { grade: "1.5", desc: "Very Satisfactory", color: "text-[var(--grade-very-satisfactory)]" },
            { grade: "2.0", desc: "Satisfactory", color: "text-[var(--grade-satisfactory)]" },
            { grade: "2.5", desc: "Fairly Satisfactory", color: "text-[var(--grade-fairly-satisfactory)]" },
            { grade: "3.0", desc: "Did Not Meet", color: "text-[var(--grade-failing)]" },
          ].map((item) => (
            <div key={item.grade} className="flex flex-col gap-0.5">
              <span className={`font-bold ${item.color}`}>{item.grade}</span>
              <span className="text-gray-500">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
