import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


const assignments = [
  {
    id: 1,
    subject: "Data Structures",
    title: "Linked List Implementation",
    deadline: "08 Oct 2026",
    status: "Pending"
  },
  {
    id: 2,
    subject: "Java Programming",
    title: "Exception Handling",
    deadline: "10 Oct 2026",
    status: "Pending"
  },
  {
    id: 3,
    subject: "Web Development",
    title: "React Components",
    deadline: "12 Oct 2026",
    status: "Submitted"
  },
  {
    id: 4,
    subject: "Database Management",
    title: "SQL Queries",
    deadline: "15 Oct 2026",
    status: "Pending"
  }
];


export default function Assignments() {

  return (

    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="page-content">

          <div className="page-title">

            <div>

              <div className="welcome-label">
                ACADEMIC WORK
              </div>

              <h1>
                Assignments
              </h1>

              <p>
                View and track your academic
                assignments.
              </p>

            </div>

          </div>


          <div className="assignment-grid">

            {assignments.map(
              (assignment) => (

                <div
                  className="assignment-card"
                  key={assignment.id}
                >

                  <div className="assignment-top">

                    <span className="assignment-subject">
                      {assignment.subject}
                    </span>

                    <span
                      className={`assignment-status ${
                        assignment.status ===
                        "Submitted"
                          ? "submitted"
                          : "pending"
                      }`}
                    >
                      {assignment.status}
                    </span>

                  </div>


                  <h3>
                    {assignment.title}
                  </h3>


                  <p className="assignment-deadline">
                    Deadline:{" "}
                    {assignment.deadline}
                  </p>


                  <button
                    className="assignment-btn"
                    type="button"
                  >
                    {assignment.status ===
                    "Submitted"
                      ? "View Submission"
                      : "View Assignment"}
                  </button>

                </div>

              )
            )}

          </div>

        </section>

      </main>

    </div>
  );
}