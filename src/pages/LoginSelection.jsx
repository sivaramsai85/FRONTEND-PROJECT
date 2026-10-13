import {
  GraduationCap,
  Users,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  BarChart3
} from "lucide-react";

import {
  Link
} from "react-router-dom";


export default function LoginSelection() {

  return (

    <main className="login-selection">

      <div className="selection-container">


        {/* BRAND */}

        <div className="selection-brand">

          <div className="selection-logo">
            <GraduationCap size={28} />
          </div>

          <div>

            <h2>
              EduReport
            </h2>

            <span>
              Student Reporting System
            </span>

          </div>

        </div>


        {/* HEADING */}

        <div className="selection-heading">

          <span>
            WELCOME TO EDUREPORT
          </span>

          <h1>
            Choose your portal
          </h1>

          <p>
            Select the appropriate portal
            to continue.
          </p>

        </div>


        {/* PORTALS */}

        <div className="login-choice-grid">


          {/* STUDENT */}

          <Link
            to="/student-login"
            className="login-choice student-choice"
          >

            <div className="choice-icon">
              <Users size={29} />
            </div>

            <div className="choice-content">

              <span className="choice-label">
                STUDENT
              </span>

              <h2>
                Student Login
              </h2>

              <p>
                Access your grades,
                attendance, assignments,
                timetable and academic
                profile.
              </p>

              <div className="choice-features">

                <span>
                  <BookOpen size={14} />
                  Academic Progress
                </span>

                <span>
                  <BarChart3 size={14} />
                  Performance
                </span>

              </div>

            </div>

            <ArrowRight
              className="choice-arrow"
              size={20}
            />

          </Link>


          {/* FACULTY */}

          <Link
            to="/faculty-login"
            className="login-choice faculty-choice"
          >

            <div className="choice-icon">
              <ShieldCheck size={29} />
            </div>

            <div className="choice-content">

              <span className="choice-label">
                FACULTY
              </span>

              <h2>
                Faculty Login
              </h2>

              <p>
                Manage students,
                attendance, reports,
                analytics and academic
                records.
              </p>

              <div className="choice-features">

                <span>
                  <Users size={14} />
                  Student Management
                </span>

                <span>
                  <BarChart3 size={14} />
                  Analytics
                </span>

              </div>

            </div>

            <ArrowRight
              className="choice-arrow"
              size={20}
            />

          </Link>

        </div>


        <footer className="selection-footer">
          © 2026 EduReport · Academic
          Management System
        </footer>

      </div>

    </main>
  );
}