import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StudentTable from "../components/StudentTable";

import {
  getStudents
} from "../data/students";

export default function Reports() {
  const students =
    getStudents();

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="page-content">

          <div className="page-title">

            <div>

              <div className="welcome-label">
                FACULTY REPORTING
              </div>

              <h1>
                Student Reports
              </h1>

              <p>
                Complete academic performance
                report.
              </p>

            </div>

            <button
              className="primary-button"
              onClick={() =>
                window.print()
              }
            >
              Print Report
            </button>

          </div>

          <div className="section-card">

            <StudentTable
              students={students}
            />

          </div>

        </section>

      </main>

    </div>
  );
}