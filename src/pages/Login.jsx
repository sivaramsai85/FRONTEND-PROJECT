import { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  GraduationCap,
  Lock,
  Mail,
  Eye,
  EyeOff
} from "lucide-react";

import {
  faculty,
  getStudentByEmail
} from "../data/students";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError(
        "Please enter your email and password."
      );

      return;
    }

    setLoading(true);

    setTimeout(() => {
      const normalizedEmail =
        email.trim().toLowerCase();

      if (
        normalizedEmail ===
          faculty.email.toLowerCase() &&
        password === faculty.password
      ) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            ...faculty
          })
        );

        navigate("/dashboard", {
          replace: true
        });

        return;
      }

      const student =
        getStudentByEmail(
          normalizedEmail
        );

      if (
        student &&
        password === student.password
      ) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            id: student.id,
            name: student.name,
            email: student.email,
            role: "student",
            studentId: student.id
          })
        );

        navigate("/dashboard", {
          replace: true
        });

        return;
      }

      setError(
        "Invalid email or password."
      );

      setLoading(false);
    }, 300);
  }

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="login-brand">
          <GraduationCap size={30} />
          <span>EduReport</span>
        </div>

        <div className="login-intro">

          <h1>
            Student Reporting
            System
          </h1>

          <p>
            Monitor student academic
            performance, attendance,
            reports and analytics
            from one place.
          </p>

        </div>

        <div className="login-feature-list">

          <div>
            <span>✓</span>
            Academic Performance
          </div>

          <div>
            <span>✓</span>
            Attendance Monitoring
          </div>

          <div>
            <span>✓</span>
            Student Reports
          </div>

          <div>
            <span>✓</span>
            Performance Analytics
          </div>

        </div>

      </div>

      <div className="login-right">

        <div className="login-card">

          <div className="login-card-header">

            <div className="login-icon">
              <GraduationCap size={24} />
            </div>

            <h2>
              Welcome Back
            </h2>

            <p>
              Sign in to continue
              to EduReport
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            <label>
              Email Address
            </label>

            <div className="input-with-icon">

              <Mail size={18} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            <label>
              Password
            </label>

            <div className="input-with-icon">

              <Lock size={18} />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (value) => !value
                  )
                }
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Sign In"}
            </button>

          </form>

          <div className="demo-credentials">

            <strong>
              Demo Credentials
            </strong>

            <p>
              Faculty:
              faculty@edureport.com /
              faculty123
            </p>

            <p>
              Student:
              siva@student.com /
              siva123
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;