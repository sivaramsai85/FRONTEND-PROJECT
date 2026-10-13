import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  UserPlus,
  ArrowLeft,
  User,
  Mail,
  Lock,
  Phone,
  GraduationCap
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  getStudents,
  addStudent,
  calculateAverage,
  getGrade,
  getStatus
} from "../data/students";

export default function AddStudent() {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      rollNo: "",
      department: "CSE",
      year: "2nd Year",
      semester: "Semester 2",
      section: "A",
      phone: "",
      attendance: "85",
      mathematics: "80",
      physics: "80",
      programming: "80",
      database: "80"
    });

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  function updateField(
    field,
    value
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value
    }));
  }

  function submit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.rollNo.trim()
    ) {
      setError(
        "Please fill all required fields."
      );

      return;
    }

    const existingStudents =
      getStudents();

    const emailExists =
      existingStudents.some(
        (student) =>
          student.email
            .toLowerCase() ===
          form.email
            .trim()
            .toLowerCase()
      );

    if (emailExists) {
      setError(
        "A student with this email already exists."
      );

      return;
    }

    const rollExists =
      existingStudents.some(
        (student) =>
          student.rollNo
            .toLowerCase() ===
          form.rollNo
            .trim()
            .toLowerCase()
      );

    if (rollExists) {
      setError(
        "A student with this roll number already exists."
      );

      return;
    }

    const subjects = {
      mathematics:
        Number(form.mathematics),
      physics:
        Number(form.physics),
      programming:
        Number(form.programming),
      database:
        Number(form.database)
    };

    const temporaryStudent = {
      subjects
    };

    const average =
      calculateAverage(
        temporaryStudent
      );

    const newStudent =
      addStudent({
        name: form.name.trim(),
        email: form.email
          .trim()
          .toLowerCase(),
        password: form.password,
        rollNo: form.rollNo.trim(),
        department:
          form.department,
        year: form.year,
        semester:
          form.semester,
        section:
          form.section,
        phone: form.phone,
        attendance:
          Number(form.attendance),
        subjects,
        average,
        grade:
          getGrade(average),
        status:
          getStatus(average),
        remarks:
          "Newly added student."
      });

    setSuccess(
      `${newStudent.name} has been added successfully.`
    );

    setTimeout(() => {
      navigate(
        `/students/${newStudent.id}`
      );
    }, 900);
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="page-content">

          <button
            className="back-link-button"
            onClick={() =>
              navigate("/students")
            }
          >
            <ArrowLeft size={16} />
            Back to Students
          </button>

          <div className="page-title">

            <div>

              <div className="welcome-label">
                FACULTY MANAGEMENT
              </div>

              <h1>
                Add New Student
              </h1>

              <p>
                Create a student account and
                add academic information.
              </p>

            </div>

          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          {success && (
            <div className="form-success">
              {success}
            </div>
          )}

          <form
            onSubmit={submit}
            className="add-student-form"
          >

            <div className="section-card">

              <div className="form-section-title">

                <User size={18} />

                <div>
                  <h3>
                    Personal Information
                  </h3>

                  <p>
                    Student identity and contact
                    details.
                  </p>
                </div>

              </div>

              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Full Name *
                  </label>

                  <div className="form-input-icon">

                    <User size={16} />

                    <input
                      value={form.name}
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="Enter full name"
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label>
                    Roll Number *
                  </label>

                  <input
                    value={form.rollNo}
                    onChange={(event) =>
                      updateField(
                        "rollNo",
                        event.target.value
                      )
                    }
                    placeholder="23CS021"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Student Email *
                  </label>

                  <div className="form-input-icon">

                    <Mail size={16} />

                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateField(
                          "email",
                          event.target.value
                        )
                      }
                      placeholder="student@student.com"
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label>
                    Login Password *
                  </label>

                  <div className="form-input-icon">

                    <Lock size={16} />

                    <input
                      type="text"
                      value={
                        form.password
                      }
                      onChange={(event) =>
                        updateField(
                          "password",
                          event.target.value
                        )
                      }
                      placeholder="Create password"
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label>
                    Phone
                  </label>

                  <div className="form-input-icon">

                    <Phone size={16} />

                    <input
                      value={form.phone}
                      onChange={(event) =>
                        updateField(
                          "phone",
                          event.target.value
                        )
                      }
                      placeholder="9876543210"
                    />

                  </div>

                </div>

              </div>

            </div>

            <div className="section-card">

              <div className="form-section-title">

                <GraduationCap size={18} />

                <div>
                  <h3>
                    Academic Information
                  </h3>

                  <p>
                    Course and semester information.
                  </p>
                </div>

              </div>

              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Department
                  </label>

                  <select
                    value={
                      form.department
                    }
                    onChange={(event) =>
                      updateField(
                        "department",
                        event.target.value
                      )
                    }
                  >
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EEE</option>
                    <option>MECH</option>
                    <option>CIVIL</option>
                    <option>AIML</option>
                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Year
                  </label>

                  <select
                    value={form.year}
                    onChange={(event) =>
                      updateField(
                        "year",
                        event.target.value
                      )
                    }
                  >
                    <option>
                      1st Year
                    </option>

                    <option>
                      2nd Year
                    </option>

                    <option>
                      3rd Year
                    </option>

                    <option>
                      4th Year
                    </option>
                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Semester
                  </label>

                  <select
                    value={
                      form.semester
                    }
                    onChange={(event) =>
                      updateField(
                        "semester",
                        event.target.value
                      )
                    }
                  >
                    <option>
                      Semester 1
                    </option>

                    <option>
                      Semester 2
                    </option>

                    <option>
                      Semester 3
                    </option>

                    <option>
                      Semester 4
                    </option>

                    <option>
                      Semester 5
                    </option>

                    <option>
                      Semester 6
                    </option>

                    <option>
                      Semester 7
                    </option>

                    <option>
                      Semester 8
                    </option>
                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Section
                  </label>

                  <select
                    value={
                      form.section
                    }
                    onChange={(event) =>
                      updateField(
                        "section",
                        event.target.value
                      )
                    }
                  >
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </select>

                </div>

              </div>

            </div>

            <div className="section-card">

              <div className="form-section-title">

                <GraduationCap size={18} />

                <div>
                  <h3>
                    Initial Performance
                  </h3>

                  <p>
                    Enter initial academic
                    records.
                  </p>
                </div>

              </div>

              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Attendance %
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={
                      form.attendance
                    }
                    onChange={(event) =>
                      updateField(
                        "attendance",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div className="form-group">

                  <label>
                    Mathematics
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={
                      form.mathematics
                    }
                    onChange={(event) =>
                      updateField(
                        "mathematics",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div className="form-group">

                  <label>
                    Physics
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={
                      form.physics
                    }
                    onChange={(event) =>
                      updateField(
                        "physics",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div className="form-group">

                  <label>
                    Programming
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={
                      form.programming
                    }
                    onChange={(event) =>
                      updateField(
                        "programming",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div className="form-group">

                  <label>
                    Database
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={
                      form.database
                    }
                    onChange={(event) =>
                      updateField(
                        "database",
                        event.target.value
                      )
                    }
                  />

                </div>

              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  navigate("/students")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="primary-button"
              >
                <UserPlus size={17} />
                Add Student
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>
  );
}