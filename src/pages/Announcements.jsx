import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const announcements = [
  {
    id: 1,
    title: "Mid Examination Schedule",
    message:
      "The mid examination schedule has been published. Students are requested to check their examination timetable.",
    date: "04 Oct 2026",
    type: "Academic",
    icon: "📢",
  },
  {
    id: 2,
    title: "Assignment Submission",
    message:
      "Students must submit pending assignments before the respective deadlines.",
    date: "03 Oct 2026",
    type: "Important",
    icon: "📢",
  },
  {
    id: 3,
    title: "Attendance Update",
    message:
      "Students are advised to maintain the minimum required attendance percentage.",
    date: "01 Oct 2026",
    type: "Notice",
    icon: "📢",
  },
];

export default function Announcements() {
  return (
    <div className="app-layout">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <main className="main-content">
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE */}
        <section className="page-content announcements-page">

          {/* HEADER */}
          <div className="announcements-header">
            <div>
              <div className="page-eyebrow">
                UNIVERSITY NOTICES
              </div>

              <h1>Announcements</h1>

              <p>
                Stay updated with the latest academic
                announcements and important notices.
              </p>
            </div>

            <div className="announcement-count">
              <strong>{announcements.length}</strong>
              <span>Active Notices</span>
            </div>
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="announcements-list">
            {announcements.map((announcement) => (
              <article
                className="announcement-item"
                key={announcement.id}
              >
                {/* ICON */}
                <div className="announcement-icon">
                  {announcement.icon}
                </div>

                {/* CONTENT */}
                <div className="announcement-main">

                  <div className="announcement-top">
                    <span
                      className={`announcement-type ${announcement.type
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {announcement.type}
                    </span>

                    <span className="announcement-date">
                      {announcement.date}
                    </span>
                  </div>

                  <h2>{announcement.title}</h2>

                  <p>{announcement.message}</p>

                  <button
                    className="announcement-read-btn"
                    type="button"
                  >
                    View Notice
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* EMPTY / FOOTER INFORMATION */}
          <div className="announcement-footer">
            <span>✓</span>
            <p>
              You are viewing the latest university
              announcements.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}