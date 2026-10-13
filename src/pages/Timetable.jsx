import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


const timetable = [
  {
    day: "Monday",
    classes: [
      ["09:30 - 10:30", "Data Structures", "Room 301"],
      ["10:30 - 11:30", "Java Programming", "Room 302"],
      ["11:45 - 12:45", "Database Management", "Room 205"],
      ["02:00 - 03:00", "Web Development", "Lab 2"]
    ]
  },
  {
    day: "Tuesday",
    classes: [
      ["09:30 - 10:30", "Operating Systems", "Room 301"],
      ["10:30 - 11:30", "Data Structures", "Room 301"],
      ["11:45 - 12:45", "Web Development", "Lab 2"],
      ["02:00 - 03:00", "Java Programming", "Lab 1"]
    ]
  },
  {
    day: "Wednesday",
    classes: [
      ["09:30 - 10:30", "Database Management", "Room 205"],
      ["10:30 - 11:30", "Operating Systems", "Room 301"],
      ["11:45 - 12:45", "Java Programming", "Room 302"],
      ["02:00 - 03:00", "Data Structures", "Room 301"]
    ]
  },
  {
    day: "Thursday",
    classes: [
      ["09:30 - 10:30", "Web Development", "Lab 2"],
      ["10:30 - 11:30", "Data Structures", "Room 301"],
      ["11:45 - 12:45", "Operating Systems", "Room 301"],
      ["02:00 - 03:00", "Database Management", "Room 205"]
    ]
  },
  {
    day: "Friday",
    classes: [
      ["09:30 - 10:30", "Java Programming", "Room 302"],
      ["10:30 - 11:30", "Database Management", "Room 205"],
      ["11:45 - 12:45", "Web Development", "Lab 2"],
      ["02:00 - 03:00", "Operating Systems", "Room 301"]
    ]
  }
];


export default function Timetable() {

  return (

    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="page-content">

          <div className="page-title">

            <div>

              <div className="welcome-label">
                ACADEMIC SCHEDULE
              </div>

              <h1>
                Timetable
              </h1>

              <p>
                Your weekly academic timetable.
              </p>

            </div>

          </div>


          <div className="timetable-container">

            {timetable.map(
              (day) => (

                <div
                  className="day-card"
                  key={day.day}
                >

                  <div className="day-header">
                    {day.day}
                  </div>


                  <div className="class-list">

                    {day.classes.map(
                      (item, index) => (

                        <div
                          className="class-row"
                          key={index}
                        >

                          <div className="class-time">
                            {item[0]}
                          </div>


                          <div className="class-info">

                            <strong>
                              {item[1]}
                            </strong>

                            <span>
                              {item[2]}
                            </span>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )
            )}

          </div>

        </section>

      </main>

    </div>
  );
}