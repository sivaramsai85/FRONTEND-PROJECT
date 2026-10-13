import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  GraduationCap,
  Users,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  LogIn,
  KeyRound,
  CheckCircle2
} from "lucide-react";

import {
  getStudentByEmail
} from "../data/students";


export default function StudentLogin() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [forgotPassword, setForgotPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  // =====================================================
  // LOGIN
  // =====================================================

  function handleLogin(event) {

    event.preventDefault();

    setError("");
    setSuccess("");

    const cleanEmail =
      email.trim().toLowerCase();

    if (!cleanEmail || !password) {

      setError(
        "Please enter your email and password."
      );

      return;
    }

    setLoading(true);

    const student =
      getStudentByEmail(cleanEmail);


    if (!student) {

      setLoading(false);

      setError(
        "Student account not found."
      );

      return;
    }


    if (student.password !== password) {

      setLoading(false);

      setError(
        "Incorrect password."
      );

      return;
    }


    // IMPORTANT:
    // Store student login information.
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        id: student.id,
        studentId: student.id,
        name: student.name,
        email: student.email,
        role: "student"
      })
    );


    setLoading(false);

    navigate(
      "/dashboard",
      {
        replace: true
      }
    );
  }


  // =====================================================
  // FORGOT PASSWORD
  // =====================================================

  function handleForgot(event) {

    event.preventDefault();

    setError("");
    setSuccess("");

    const cleanEmail =
      email.trim().toLowerCase();

    if (!cleanEmail) {

      setError(
        "Please enter your student email."
      );

      return;
    }

    const student =
      getStudentByEmail(cleanEmail);


    if (!student) {

      setError(
        "Student email not found."
      );

      return;
    }


    setSuccess(
      `Demo password: ${student.password}`
    );
  }


  return (

    <div className="student-auth-page">


      {/* =================================================
          LEFT SIDE
      ================================================= */}

      <section className="student-auth-left">

        <Link
          to="/"
          className="student-auth-back"
        >
          <ArrowLeft size={17} />
          <span>
            Back to Portals
          </span>
        </Link>


        <div className="student-auth-brand">

          <div className="student-auth-brand-icon">
            <GraduationCap size={28} />
          </div>

          <div>

            <h2>
              EduReport
            </h2>

            <p>
              Student Reporting System
            </p>

          </div>

        </div>


        <div className="student-auth-intro">

          <div className="student-auth-overline">
            STUDENT PORTAL
          </div>

          <h1>
            Your academic journey,
            <br />
            all in one place.
          </h1>

          <p>
            Access your academic performance,
            attendance, assignments, timetable
            and personal student profile from
            one secure portal.
          </p>


          <div className="student-auth-features">

            <div className="student-feature-item">

              <div className="student-feature-icon">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>
                  Academic Performance
                </strong>

                <span>
                  View marks and grades
                </span>
              </div>

            </div>


            <div className="student-feature-item">

              <div className="student-feature-icon">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>
                  Attendance
                </strong>

                <span>
                  Monitor your attendance
                </span>
              </div>

            </div>


            <div className="student-feature-item">

              <div className="student-feature-icon">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>
                  Assignments
                </strong>

                <span>
                  Track academic work
                </span>
              </div>

            </div>


            <div className="student-feature-item">

              <div className="student-feature-icon">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>
                  Student Profile
                </strong>

                <span>
                  Access your academic details
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          RIGHT SIDE
      ================================================= */}

      <section className="student-auth-right">

        <div className="student-auth-card">


          {!forgotPassword ? (

            <>

              <div className="student-form-header">

                <div className="student-form-icon">
                  <Users size={22} />
                </div>

                <h1>
                  Student Login
                </h1>

                <p>
                  Sign in to access your
                  student dashboard.
                </p>

              </div>


              <form
                className="student-auth-form"
                onSubmit={handleLogin}
              >

                <div className="student-field">

                  <label htmlFor="student-email">
                    Student Email
                  </label>

                  <div className="student-input-wrapper">

                    <Mail size={18} />

                    <input
                      id="student-email"
                      type="email"
                      value={email}
                      placeholder="name@student.com"
                      autoComplete="username"
                      onChange={(event) => {
                        setEmail(
                          event.target.value
                        );

                        setError("");
                        setSuccess("");
                      }}
                      required
                    />

                  </div>

                </div>


                <div className="student-field">

                  <label htmlFor="student-password">
                    Password
                  </label>

                  <div className="student-input-wrapper">

                    <Lock size={18} />

                    <input
                      id="student-password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      onChange={(event) => {
                        setPassword(
                          event.target.value
                        );

                        setError("");
                        setSuccess("");
                      }}
                      required
                    />


                    <button
                      type="button"
                      className="student-password-toggle"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>


                {error && (
                  <div className="student-message student-message-error">
                    {error}
                  </div>
                )}


                {success && (
                  <div className="student-message student-message-success">
                    {success}
                  </div>
                )}


                <button
                  type="submit"
                  className="student-login-button"
                  disabled={loading}
                >

                  {loading
                    ? "Signing in..."
                    : "Sign In"
                  }

                  {!loading && (
                    <LogIn size={17} />
                  )}

                </button>

              </form>


              <button
                type="button"
                className="student-forgot-button"
                onClick={() => {
                  setForgotPassword(true);
                  setError("");
                  setSuccess("");
                }}
              >
                Forgot password?
              </button>


              <div className="student-demo-box">

                <div className="student-demo-title">
                  Demo Student Account
                </div>

                <div className="student-demo-row">

                  <span>
                    Email
                  </span>

                  <strong>
                    siva@student.com
                  </strong>

                </div>

                <div className="student-demo-row">

                  <span>
                    Password
                  </span>

                  <strong>
                    siva123
                  </strong>

                </div>

              </div>

            </>

          ) : (

            <>

              <div className="student-form-header">

                <div className="student-form-icon">
                  <KeyRound size={22} />
                </div>

                <h1>
                  Password Recovery
                </h1>

                <p>
                  Enter your student email
                  to recover your password.
                </p>

              </div>


              <form
                className="student-auth-form"
                onSubmit={handleForgot}
              >

                <div className="student-field">

                  <label htmlFor="recovery-email">
                    Student Email
                  </label>

                  <div className="student-input-wrapper">

                    <Mail size={18} />

                    <input
                      id="recovery-email"
                      type="email"
                      value={email}
                      placeholder="name@student.com"
                      onChange={(event) => {
                        setEmail(
                          event.target.value
                        );

                        setError("");
                        setSuccess("");
                      }}
                      required
                    />

                  </div>

                </div>


                {error && (
                  <div className="student-message student-message-error">
                    {error}
                  </div>
                )}


                {success && (
                  <div className="student-message student-message-success">
                    {success}
                  </div>
                )}


                <button
                  type="submit"
                  className="student-login-button"
                >
                  Recover Password
                  <KeyRound size={17} />
                </button>

              </form>


              <button
                type="button"
                className="student-forgot-button"
                onClick={() => {
                  setForgotPassword(false);
                  setError("");
                  setSuccess("");
                }}
              >
                <ArrowLeft size={14} />
                Back to Student Login
              </button>


              <div className="student-recovery-note">
                This is a demo password recovery
                feature. No real email is sent.
              </div>

            </>

          )}

        </div>

      </section>

    </div>
  );
}