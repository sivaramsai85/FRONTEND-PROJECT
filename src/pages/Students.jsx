import {
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  UserPlus,
  Search,
  Users
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  getStudents
} from "../data/students";

export default function Students() {
  const [
    search,
    setSearch
  ] = useState("");

  const [
    department,
    setDepartment
  ] = useState("All");

  const students =
    getStudents();

  const filtered =
    students.filter(
      (student) => {

        const text =
          `${student.name} ${student.rollNo} ${student.email} ${student.department}`
            .toLowerCase();

        const matchesSearch =
          text.includes(
            search.toLowerCase()
          );

        const matchesDepartment =
          department === "All" ||
          student.department ===
            department;

        return (
          matchesSearch &&
          matchesDepartment
        );
      }
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
                FACULTY MANAGEMENT
              </div>

              <h1>
                Students
              </h1>

              <p>
                Manage all registered
                student accounts.
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

            <div className="stat-card">

              <div className="stat-icon">
                <Users size={21} />
              </div>

              <div className="stat-content">

                <p>
                  Total Students
                </p>

                <h2>
                  {students.length}
                </h2>

              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon">
                <Users size={21} />
              </div>

              <div className="stat-content">

                <p>
                  CSE
                </p>

                <h2>
                  {
                    students.filter(
                      (student) =>
                        student.department ===
                        "CSE"
                    ).length
                  }
                </h2>

              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon">
                <Users size={21} />
              </div>

              <div className="stat-content">

                <p>
                  ECE
                </p>

                <h2>
                  {
                    students.filter(
                      (student) =>
                        student.department ===
                        "ECE"
                    ).length
                  }
                </h2>

              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon">
                <Users size={21} />
              </div>

              <div className="stat-content">

                <p>
                  EEE
                </p>

                <h2>
                  {
                    students.filter(
                      (student) =>
                        student.department ===
                        "EEE"
                    ).length
                  }
                </h2>

              </div>

            </div>

          </div>

          <div className="section-card">

            <div className="filter-bar">

              <div className="search-large">

                <Search size={17} />

                <input
                  placeholder="Search name, roll number, email..."
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                />

              </div>

              <select
                className="select-input"
                value={department}
                onChange={(event) =>
                  setDepartment(
                    event.target.value
                  )
                }
              >
                <option>
                  All
                </option>

                <option>
                  CSE
                </option>

                <option>
                  ECE
                </option>

                <option>
                  EEE
                </option>

                <option>
                  MECH
                </option>

                <option>
                  CIVIL
                </option>

                <option>
                  AIML
                </option>

              </select>

            </div>

            <div className="student-count-text">

              Showing{" "}
              <strong>
                {filtered.length}
              </strong>{" "}
              of{" "}
              <strong>
                {students.length}
              </strong>{" "}
              students

            </div>

            <div className="student-table-container">

              <table className="student-table">

                <thead>
                  <tr>
                    <th>
                      Student
                    </th>

                    <th>
                      Roll Number
                    </th>

                    <th>
                      Department
                    </th>

                    <th>
                      Attendance
                    </th>

                    <th>
                      Average
                    </th>

                    <th>
                      Grade
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {filtered.map(
                    (student) => (
                      <tr
                        key={student.id}
                      >

                        <td>

                          <div className="student-name-cell">

                            <div className="table-avatar">
                              {student.name
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div>
                              <strong>
                                {student.name}
                              </strong>

                              <small>
                                {student.email}
                              </small>
                            </div>

                          </div>

                        </td>

                        <td>
                          {student.rollNo}
                        </td>

                        <td>
                          {student.department}
                        </td>

                        <td>
                          {student.attendance}%
                        </td>

                        <td>
                          {student.average}%
                        </td>

                        <td>
                          <span className="grade-badge">
                            {student.grade}
                          </span>
                        </td>

                        <td>

                          <span
                            className={`status-badge ${
                              student.status ===
                              "Excellent"
                                ? "excellent"
                                : student.status ===
                                  "Good"
                                ? "good"
                                : "attention"
                            }`}
                          >
                            {student.status}
                          </span>

                        </td>

                        <td>

                          <Link
                            to={`/students/${student.id}`}
                            className="view-button"
                          >
                            View
                          </Link>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

              {!filtered.length && (
                <div className="empty-table">
                  No students match your search.
                </div>
              )}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}