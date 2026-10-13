import {
  Users,
  UserCheck,
  Award,
  TrendingUp,
  AlertTriangle,
  UserPlus,
  ClipboardList
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import GradeChart from "../components/GradeChart";

import {
  getStudents,
  assignments,
  getStudentById
} from "../data/students";

export default function Dashboard() {
  let user = null;

  try {
    user = JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );
  } catch {
    user = null;
  }

  const isFaculty =
    user?.role === "admin";

  const students =
    getStudents();

  if (isFaculty) {
    const average =
      students.length
        ? Math.round(
            students.reduce(
              (sum, student) =>
                sum +
                Number(
                  student.average
                ),
              0
            ) /
              students.length
          )
        : 0;

    const attendance =
      students.length
        ? Math.round(
            students.reduce(
              (sum, student) =>
                sum +
                Number(
                  student.attendance
                ),
              0
            ) /
              students.length
          )
        : 0;

    const excellent =
      students.filter(
        (student) =>
          student.status ===
          "Excellent"
      ).length;

    const attention =
      students.filter(
        (student) =>
          student.status ===
          "Attention"
      );

    return (
      <div className="app-layout">

        <Sidebar />

        <main className="main-content">

          <Navbar />

          <section className="page-content">

            <div className="page-title">

              <div>

                <div className="welcome-label">
                  FACULTY PORTAL
                </div>

                <h1>
                  Faculty Dashboard
                </h1>

                <p>
                  Complete overview of
                  student academic activity.
                </p>

              </div>

              <Link
                to="/students/add"
                className="primary-button"
              >
                <UserPlus size={17} />
                Add Student
              </Link>

            </div>

            <div className="stats-grid">

              <StatCard
                title="Total Students"
                value={
                  students.length
                }
                icon={
                  <Users size={21} />
                }
                description="Registered accounts"
              />

              <StatCard
                title="Average Performance"
                value={`${average}%`}
                icon={
                  <TrendingUp size={21} />
                }
                description="Overall student average"
              />

              <StatCard
                title="Average Attendance"
                value={`${attendance}%`}
                icon={
                  <UserCheck size={21} />
                }
                description="Overall attendance"
              />

              <StatCard
                title="Excellent"
                value={excellent}
                icon={
                  <Award size={21} />
                }
                description="High-performing students"
              />

            </div>

            <div className="dashboard-grid">

              <div className="section-card">

                <div className="card-header">

                  <div>

                    <h3>
                      Student Performance
                    </h3>

                    <p>
                      Average score by student
                    </p>

                  </div>

                </div>

                <GradeChart
                  students={students}
                />

              </div>

              <div className="section-card">

                <h3>
                  Quick Actions
                </h3>

                <div className="quick-actions">

                  <Link
                    to="/students/add"
                    className="quick-action"
                  >
                    <UserPlus size={20} />

                    <span>
                      Add Student
                    </span>
                  </Link>

                  <Link
                    to="/students"
                    className="quick-action"
                  >
                    <Users size={20} />

                    <span>
                      Manage Students
                    </span>
                  </Link>

                  <Link
                    to="/reports"
                    className="quick-action"
                  >
                    <ClipboardList
                      size={20}
                    />

                    <span>
                      Reports
                    </span>
                  </Link>

                  <Link
                    to="/analytics"
                    className="quick-action"
                  >
                    <TrendingUp
                      size={20}
                    />

                    <span>
                      Analytics
                    </span>
                  </Link>

                </div>

              </div>

            </div>

            <div className="section-card dashboard-section">

              <div className="section-heading-row">

                <div>

                  <h3>
                    Students Requiring Attention
                  </h3>

                  <p>
                    Students with low attendance
                    or academic performance.
                  </p>

                </div>

                <span className="attention-count">
                  {attention.length}
                </span>

              </div>

              <div className="attention-list">

                {attention.map(
                  (student) => (
                    <Link
                      key={student.id}
                      to={`/students/${student.id}`}
                      className="attention-row"
                    >

                      <div>

                        <strong>
                          {student.name}
                        </strong>

                        <small>
                          {student.rollNo}
                        </small>

                      </div>

                      <span>
                        {student.average}%
                      </span>

                      <span>
                        {student.attendance}%
                        attendance
                      </span>

                    </Link>
                  )
                )}

              </div>

            </div>

          </section>

        </main>

      </div>
    );
  }

  const student =
    getStudentById(
      user?.studentId
    );

  if (!student) {
    return null;
  }

  const pending =
    assignments.filter(
      (item) =>
        item.status ===
        "Pending"
    ).length;

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="page-content">

          <div className="page-title">

            <div>

              <div className="welcome-label">
                STUDENT PORTAL
              </div>

              <h1>
                Welcome,{" "}
                {student.name.split(
                  " "
                )[0]}
              </h1>

              <p>
                Here is your current
                academic overview.
              </p>

            </div>

          </div>

          <div className="stats-grid">

            <StatCard
              title="My Average"
              value={`${student.average}%`}
              icon={
                <TrendingUp
                  size={21}
                />
              }
              description="Academic average"
            />

            <StatCard
              title="My Grade"
              value={student.grade}
              icon={
                <Award size={21} />
              }
              description="Overall grade"
            />

            <StatCard
              title="Attendance"
              value={`${student.attendance}%`}
              icon={
                <UserCheck
                  size={21}
                />
              }
              description={
                student.attendance <
                75
                  ? "Attendance is low"
                  : "Attendance is healthy"
              }
            />

            <StatCard
              title="Pending Assignments"
              value={pending}
              icon={
                <ClipboardList
                  size={21}
                />
              }
              description="Tasks to complete"
            />

          </div>

          {student.attendance < 75 && (
            <div className="warning-card">

              <AlertTriangle
                size={22}
              />

              <div>

                <strong>
                  Attendance Warning
                </strong>

                <p>
                  Your attendance is below
                  75%. Please attend classes
                  regularly.
                </p>

              </div>

            </div>
          )}

          <div className="student-dashboard-grid">

            <div className="section-card">

              <h3>
                Subject Performance
              </h3>

              <div className="subject-dashboard-list">

                {Object.entries(
                  student.subjects
                ).map(
                  ([subject, score]) => (
                    <div
                      className="subject-dashboard-row"
                      key={subject}
                    >

                      <div>

                        <strong>
                          {subject
                            .charAt(0)
                            .toUpperCase() +
                            subject.slice(
                              1
                            )}
                        </strong>

                        <div className="progress">

                          <div
                            style={{
                              width:
                                `${score}%`
                            }}
                          />

                        </div>

                      </div>

                      <span>
                        {score}%
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>

            <div className="section-card">

              <h3>
                Quick Access
              </h3>

              <div className="quick-actions">

                <Link
                  to="/assignments"
                  className="quick-action"
                >
                  <ClipboardList
                    size={20}
                  />

                  <span>
                    Assignments
                  </span>
                </Link>

                <Link
                  to="/attendance"
                  className="quick-action"
                >
                  <UserCheck
                    size={20}
                  />

                  <span>
                    Attendance
                  </span>
                </Link>

                <Link
                  to="/profile"
                  className="quick-action"
                >
                  <Users size={20} />

                  <span>
                    My Profile
                  </span>
                </Link>

                <Link
                  to="/timetable"
                  className="quick-action"
                >
                  <TrendingUp
                    size={20}
                  />

                  <span>
                    Timetable
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}