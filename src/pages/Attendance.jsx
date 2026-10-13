import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  getStudents
} from "../data/students";

export default function Attendance() {
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

  const students =
    getStudents();

  const visibleStudents =
    user?.role === "admin"
      ? students
      : students.filter(
          (student) =>
            Number(student.id) ===
            Number(user.studentId)
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
                {user?.role === "admin"
                  ? "FACULTY MANAGEMENT"
                  : "STUDENT PORTAL"}
              </div>

              <h1>
                {user?.role === "admin"
                  ? "Attendance Management"
                  : "My Attendance"}
              </h1>

              <p>
                Monitor attendance records
                and attendance status.
              </p>

            </div>

          </div>

          <div className="section-card">

            <div className="attendance-list">

              {visibleStudents.map(
                (student) => (
                  <div
                    className="attendance-item"
                    key={student.id}
                  >

                    <div className="attendance-info">

                      <strong>
                        {student.name}
                      </strong>

                      <small>
                        {student.rollNo} •{" "}
                        {student.department}
                      </small>

                    </div>

                    <div className="attendance-value">
                      {student.attendance}%
                    </div>

                    <div className="attendance-progress">

                      <div
                        className={
                          student.attendance >=
                          75
                            ? "good-attendance"
                            : "low-attendance"
                        }
                        style={{
                          width:
                            `${student.attendance}%`
                        }}
                      />

                    </div>

                    <span
                      className={`status-badge ${
                        student.attendance >=
                        75
                          ? "excellent"
                          : "attention"
                      }`}
                    >
                      {student.attendance >=
                      75
                        ? "Eligible"
                        : "Low"}
                    </span>

                  </div>
                )
              )}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}