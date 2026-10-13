import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getStudents } from "../data/students";

const COLORS = ["#22c55e", "#6366f1", "#ef4444"];

export default function Analytics() {
  const students = getStudents();

  const total = students.length;

  const average =
    total === 0
      ? 0
      : students.reduce(
          (sum, student) => sum + Number(student.average || 0),
          0
        ) / total;

  const attendance =
    total === 0
      ? 0
      : students.reduce(
          (sum, student) => sum + Number(student.attendance || 0),
          0
        ) / total;

  const excellent = students.filter(
    (student) => Number(student.average || 0) >= 85
  ).length;

  const good = students.filter((student) => {
    const mark = Number(student.average || 0);
    return mark >= 60 && mark < 85;
  }).length;

  const attention = students.filter(
    (student) => Number(student.average || 0) < 60
  ).length;

  const performanceData = students.map((student) => ({
    name: student.name?.split(" ")[0] || "Student",
    average: Number(student.average || 0),
    attendance: Number(student.attendance || 0),
  }));

  const gradeData = [
    { name: "Excellent", value: excellent },
    { name: "Good", value: good },
    { name: "Needs Attention", value: attention },
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="page-content">
          <div className="page-title">
            <div>
              <div className="welcome-label">
                FACULTY ANALYTICS
              </div>

              <h1>Academic Analytics</h1>
              <p>
                Student performance, grades, and attendance
                overview.
              </p>
            </div>
          </div>

          <div className="analytics-stats">
            <div className="analytics-stat-card">
              <span>Total Students</span>
              <strong>{total}</strong>
            </div>

            <div className="analytics-stat-card">
              <span>Average Performance</span>
              <strong>{average.toFixed(1)}%</strong>
            </div>

            <div className="analytics-stat-card">
              <span>Average Attendance</span>
              <strong>{attendance.toFixed(1)}%</strong>
            </div>

            <div className="analytics-stat-card">
              <span>Excellent Students</span>
              <strong>{excellent}</strong>
            </div>
          </div>

          <div className="analytics-chart-grid">
            <div className="analytics-card">
              <h2>Student Performance</h2>

              <div style={{ height: 360, width: "100%" }}>
                <ResponsiveContainer>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />

                    <Bar
                      dataKey="average"
                      name="Average Marks"
                      fill="#6366f1"
                    />

                    <Bar
                      dataKey="attendance"
                      name="Attendance"
                      fill="#22c55e"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="analytics-card">
              <h2>Performance Distribution</h2>

              <div style={{ height: 360, width: "100%" }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={gradeData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="45%"
                      outerRadius={100}
                      label
                    >
                      {gradeData.map((item, index) => (
                        <Cell
                          key={item.name}
                          fill={COLORS[index]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="analytics-card" style={{ marginTop: 20 }}>
            <h2>Performance Summary</h2>

            <div className="analytics-summary">
              <div>
                <span>Excellent</span>
                <strong>{excellent}</strong>
              </div>

              <div>
                <span>Good</span>
                <strong>{good}</strong>
              </div>

              <div>
                <span>Needs Attention</span>
                <strong>{attention}</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 