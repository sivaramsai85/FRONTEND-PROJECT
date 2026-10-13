import React from "react";

import {
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Award,
  CalendarDays
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  getStudentById
} from "../data/students";


export default function Profile() {

  // =====================================================
  // GET LOGGED-IN USER
  // =====================================================

  let currentUser = null;

  try {
    currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );
  } catch (error) {
    currentUser = null;
  }


  // =====================================================
  // IF USER IS NOT LOGGED IN
  // =====================================================

  if (!currentUser) {
    return null;
  }


  // =====================================================
  // GET STUDENT DATA
  // =====================================================

  const student = getStudentById(
    currentUser.studentId || currentUser.id
  );


  // =====================================================
  // STUDENT NOT FOUND
  // =====================================================

  if (!student) {

    return (
      <div className="app-layout">

        <Sidebar />

        <main className="main-content">

          <Navbar />

          <section className="page-content">

            <div className="page-title">

              <div>

                <div className="welcome-label">
                  STUDENT ACCOUNT
                </div>

                <h1>
                  My Profile
                </h1>

                <p>
                  Student profile could not be found.
                </p>

              </div>

            </div>

          </section>

        </main>

      </div>
    );
  }


  // =====================================================
  // PROFILE PAGE
  // =====================================================

  return (

    <div className="app-layout">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <Sidebar />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="main-content">

        <Navbar />


        <section className="page-content">


          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="page-title">

            <div>

              <div className="welcome-label">
                STUDENT ACCOUNT
              </div>

              <h1>
                My Profile
              </h1>

              <p>
                View your personal and academic information.
              </p>

            </div>

          </div>


          {/* =================================================
              PROFILE CONTENT
          ================================================= */}

          <div className="profile-page-grid">


            {/* =================================================
                PERSONAL INFORMATION
            ================================================= */}

            <div className="profile-main-card">


              {/* PROFILE HEADER */}

              <div className="profile-main-header">

                <div className="profile-large-avatar">
                  {student.name
                    ?.charAt(0)
                    .toUpperCase()}
                </div>


                <div>

                  <h2>
                    {student.name}
                  </h2>

                  <p>
                    {student.rollNo}
                  </p>

                  <span className="profile-status">
                    Active Student
                  </span>

                </div>

              </div>


              {/* =================================================
                  INFORMATION GRID
              ================================================= */}

              <div className="profile-info-grid">


                {/* EMAIL */}

                <div className="profile-info-item">

                  <div className="profile-info-icon">
                    <Mail size={18} />
                  </div>

                  <div>

                    <span>
                      Email
                    </span>

                    <strong>
                      {student.email}
                    </strong>

                  </div>

                </div>


                {/* PHONE */}

                <div className="profile-info-item">

                  <div className="profile-info-icon">
                    <Phone size={18} />
                  </div>

                  <div>

                    <span>
                      Phone
                    </span>

                    <strong>
                      {student.phone ||
                        "Not provided"}
                    </strong>

                  </div>

                </div>


                {/* DEPARTMENT */}

                <div className="profile-info-item">

                  <div className="profile-info-icon">
                    <GraduationCap size={18} />
                  </div>

                  <div>

                    <span>
                      Department
                    </span>

                    <strong>
                      {student.department}
                    </strong>

                  </div>

                </div>


                {/* SECTION */}

                <div className="profile-info-item">

                  <div className="profile-info-icon">
                    <BookOpen size={18} />
                  </div>

                  <div>

                    <span>
                      Section
                    </span>

                    <strong>
                      {student.section}
                    </strong>

                  </div>

                </div>


                {/* YEAR */}

                <div className="profile-info-item">

                  <div className="profile-info-icon">
                    <CalendarDays size={18} />
                  </div>

                  <div>

                    <span>
                      Academic Year
                    </span>

                    <strong>
                      {student.year}
                    </strong>

                  </div>

                </div>


                {/* SEMESTER */}

                <div className="profile-info-item">

                  <div className="profile-info-icon">
                    <BookOpen size={18} />
                  </div>

                  <div>

                    <span>
                      Semester
                    </span>

                    <strong>
                      {student.semester}
                    </strong>

                  </div>

                </div>


              </div>

            </div>


            {/* =================================================
                ACADEMIC SUMMARY
            ================================================= */}

            <div className="profile-academic-card">

              <h2>
                Academic Summary
              </h2>


              {/* AVERAGE */}

              <div className="profile-stat">

                <div className="profile-stat-icon">
                  <Award size={20} />
                </div>

                <div>

                  <span>
                    Average
                  </span>

                  <strong>
                    {student.average}%
                  </strong>

                </div>

              </div>


              {/* ATTENDANCE */}

              <div className="profile-stat">

                <div className="profile-stat-icon">
                  <CalendarDays size={20} />
                </div>

                <div>

                  <span>
                    Attendance
                  </span>

                  <strong>
                    {student.attendance}%
                  </strong>

                </div>

              </div>


              {/* GRADE */}

              <div className="profile-stat">

                <div className="profile-stat-icon">
                  <Award size={20} />
                </div>

                <div>

                  <span>
                    Grade
                  </span>

                  <strong>
                    {student.grade}
                  </strong>

                </div>

              </div>


              {/* STATUS */}

              <div className="profile-stat">

                <div className="profile-stat-icon">
                  <GraduationCap size={20} />
                </div>

                <div>

                  <span>
                    Status
                  </span>

                  <strong>
                    {student.status}
                  </strong>

                </div>

              </div>


            </div>


          </div>

        </section>

      </main>

    </div>
  );
}