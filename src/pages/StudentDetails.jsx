import {
  Link,
  useParams,
  Navigate
} from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  getStudentById
} from "../data/students";

export default function StudentDetails() {
  const { id } =
    useParams();

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

  const student =
    getStudentById(id);

  if (!student) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

 if (
  user?.role === "student" &&
  Number(student.id) !==
    Number(user.studentId ?? user.id)
) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  const subjectNames = {
    mathematics: "Mathematics",
    physics: "Physics",
    programming: "Programming",
    database: "Database"
  };

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="page-content">

          <Link
            to={
              user?.role === "admin"
                ? "/students"
                : "/dashboard"
            }
            className="back-link"
          >
            ← Back
          </Link>

          <div className="student-header">

            <div className="profile-large">
              {student.name
                .charAt(0)
                .toUpperCase()}
            </div>

            <div className="student-header-info">

              <h1>
                {student.name}
              </h1>

              <p>
                {student.rollNo} •{" "}
                {student.department} •{" "}
                {student.year} •{" "}
                Section {student.section}
              </p>

            </div>

            <span className="grade-large">
              {student.grade}
            </span>

          </div>

          <div className="details-grid">

            <div className="section-card">

              <h3>
                Student Information
              </h3>

              <div className="detail-row">
                <span>
                  Email
                </span>

                <strong>
                  {student.email}
                </strong>
              </div>

              <div className="detail-row">
                <span>
                  Roll Number
                </span>

                <strong>
                  {student.rollNo}
                </strong>
              </div>

              <div className="detail-row">
                <span>
                  Department
                </span>

                <strong>
                  {student.department}
                </strong>
              </div>

              <div className="detail-row">
                <span>
                  Year
                </span>

                <strong>
                  {student.year}
                </strong>
              </div>

              <div className="detail-row">
                <span>
                  Semester
                </span>

                <strong>
                  {student.semester}
                </strong>
              </div>

              <div className="detail-row">
                <span>
                  Attendance
                </span>

                <strong>
                  {student.attendance}%
                </strong>
              </div>

              <div className="detail-row">
                <span>
                  Average
                </span>

                <strong>
                  {student.average}%
                </strong>
              </div>

              <div className="detail-row">
                <span>
                  Status
                </span>

                <strong>
                  {student.status}
                </strong>
              </div>

            </div>

            <div className="section-card">

              <h3>
                Academic Performance
              </h3>

              {Object.entries(
                student.subjects
              ).map(
                ([subject, score]) => (
                  <div
                    className="subject-block"
                    key={subject}
                  >

                    <div className="subject">

                      <span>
                        {subjectNames[
                          subject
                        ] || subject}
                      </span>

                      <strong>
                        {score}%
                      </strong>

                    </div>

                    <div className="progress">

                      <div
                        style={{
                          width:
                            `${score}%`
                        }}
                      />

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          <div className="section-card remarks-card">

            <h3>
              Faculty Remarks
            </h3>

            <p>
              {student.remarks}
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}