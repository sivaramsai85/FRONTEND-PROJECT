import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Settings() {
  const [institution, setInstitution] = useState(
    "EduReport University"
  );

  const [department, setDepartment] = useState(
    "Computer Science & Engineering"
  );

  const [semester, setSemester] = useState("Semester 2");

  const [academicYear, setAcademicYear] = useState("2026");

  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "edureport_settings",
      JSON.stringify({
        institution,
        department,
        semester,
        academicYear,
      })
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="page-content settings-page">

          {/* HEADER */}
          <div className="settings-header">
            <div>
              <h1>Settings</h1>

              <p>
                Configure your academic system information.
              </p>
            </div>
          </div>

          {/* ONLY SETTINGS BOX */}
          <div className="settings-single-card">

            <div className="settings-card-header">
              <h2>Academic Settings</h2>

              <p>
                Update the academic information used by
                EduReport.
              </p>
            </div>

            <form onSubmit={handleSave}>

              {/* INSTITUTION */}
              <div className="settings-field">
                <label htmlFor="institution">
                  Institution Name
                </label>

                <input
                  id="institution"
                  type="text"
                  value={institution}
                  onChange={(e) =>
                    setInstitution(e.target.value)
                  }
                  placeholder="Enter institution name"
                />
              </div>

              {/* DEPARTMENT */}
              <div className="settings-field">
                <label htmlFor="department">
                  Department
                </label>

                <input
                  id="department"
                  type="text"
                  value={department}
                  onChange={(e) =>
                    setDepartment(e.target.value)
                  }
                  placeholder="Enter department"
                />
              </div>

              {/* SEMESTER */}
              <div className="settings-field">
                <label htmlFor="semester">
                  Semester
                </label>

                <select
                  id="semester"
                  value={semester}
                  onChange={(e) =>
                    setSemester(e.target.value)
                  }
                >
                  <option value="Semester 1">
                    Semester 1
                  </option>

                  <option value="Semester 2">
                    Semester 2
                  </option>

                  <option value="Semester 3">
                    Semester 3
                  </option>

                  <option value="Semester 4">
                    Semester 4
                  </option>

                  <option value="Semester 5">
                    Semester 5
                  </option>

                  <option value="Semester 6">
                    Semester 6
                  </option>

                  <option value="Semester 7">
                    Semester 7
                  </option>

                  <option value="Semester 8">
                    Semester 8
                  </option>
                </select>
              </div>

              {/* ACADEMIC YEAR */}
              <div className="settings-field">
                <label htmlFor="academicYear">
                  Academic Year
                </label>

                <input
                  id="academicYear"
                  type="number"
                  value={academicYear}
                  onChange={(e) =>
                    setAcademicYear(e.target.value)
                  }
                  min="2020"
                  max="2100"
                />
              </div>

              {/* ACTION */}
              <div className="settings-actions">

                <button
                  type="submit"
                  className="save-settings-btn"
                >
                  Save Settings
                </button>

                {saved && (
                  <span className="settings-saved">
                    ✓ Settings saved successfully
                  </span>
                )}

              </div>

            </form>
          </div>

        </section>
      </main>
    </div>
  );
}