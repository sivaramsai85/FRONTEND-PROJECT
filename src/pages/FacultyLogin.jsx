import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  ArrowLeft,
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  KeyRound
} from "lucide-react";

import {
  faculty
} from "../data/students";

export default function FacultyLogin() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    showForgot,
    setShowForgot
  ] = useState(false);

  const [
    forgotEmail,
    setForgotEmail
  ] = useState("");

  function login(event) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (
      !email.trim() ||
      !password
    ) {
      setError(
        "Please enter your email and password."
      );

      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() ===
          faculty.email.toLowerCase() &&
        password ===
          faculty.password
      ) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(
            faculty
          )
        );

        navigate(
          "/dashboard",
          {
            replace: true
          }
        );

        return;
      }

      setError(
        "Invalid faculty email or password."
      );

      setLoading(false);
    }, 350);
  }

  function forgotPassword(
    event
  ) {
    event.preventDefault();

    if (
      forgotEmail.trim().toLowerCase() !==
      faculty.email.toLowerCase()
    ) {
      setError(
        "No faculty account found with this email."
      );

      return;
    }

    setError("");

    setMessage(
      `Demo reset: your password is "${faculty.password}".`
    );
  }

  return (
    <div className="auth-page faculty-auth">

      <div className="auth-brand-panel">

        <button
          className="back-login-button"
          onClick={() =>
            navigate("/")
          }
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="auth-brand">

          <ShieldCheck size={32} />

          <span>
            EduReport
          </span>

        </div>

        <div className="auth-panel-content">

          <span>
            FACULTY PORTAL
          </span>

          <h1>
            Manage your academic
            ecosystem.
          </h1>

          <p>
            Manage students, attendance,
            academic reports, analytics,
            announcements and student
            records.
          </p>

        </div>

      </div>

      <div className="auth-form-panel">

        <div className="auth-card">

          {!showForgot ? (
            <>
              <div className="auth-heading">

                <div className="auth-icon faculty-icon">
                  <ShieldCheck
                    size={23}
                  />
                </div>

                <h2>
                  Faculty Login
                </h2>

                <p>
                  Sign in to the faculty
                  administration portal.
                </p>

              </div>

              <form
                onSubmit={login}
                className="auth-form"
              >

                <label>
                  Faculty Email
                </label>

                <div className="auth-input">

                  <Mail size={18} />

                  <input
                    type="email"
                    placeholder="faculty@edureport.com"
                    value={email}
                    onChange={(event) =>
                      setEmail(
                        event.target.value
                      )
                    }
                  />

                </div>

                <label>
                  Password
                </label>

                <div className="auth-input">

                  <Lock size={18} />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) =>
                      setPassword(
                        event.target.value
                      )
                    }
                  />

                  <button
                    type="button"
                    className="auth-eye"
                    onClick={() =>
                      setShowPassword(
                        (value) =>
                          !value
                      )
                    }
                  >
                    {showPassword ? (
                      <EyeOff
                        size={18}
                      />
                    ) : (
                      <Eye
                        size={18}
                      />
                    )}
                  </button>

                </div>

                {error && (
                  <div className="auth-error">
                    {error}
                  </div>
                )}

                <button
                  className="auth-submit"
                  disabled={loading}
                >
                  {loading
                    ? "Signing in..."
                    : "Faculty Sign In"}
                </button>

              </form>

              <button
                className="forgot-button"
                onClick={() => {
                  setShowForgot(true);
                  setError("");
                  setMessage("");
                }}
              >
                Forgot Password?
              </button>

              <div className="demo-box">

                <strong>
                  Demo Faculty
                </strong>

                <span>
                  faculty@edureport.com
                </span>

                <span>
                  Password: faculty123
                </span>

              </div>
            </>
          ) : (
            <>
              <div className="auth-heading">

                <div className="auth-icon faculty-icon">
                  <KeyRound
                    size={23}
                  />
                </div>

                <h2>
                  Forgot Password
                </h2>

                <p>
                  Enter your faculty email.
                </p>

              </div>

              <form
                onSubmit={
                  forgotPassword
                }
                className="auth-form"
              >

                <label>
                  Faculty Email
                </label>

                <div className="auth-input">

                  <Mail size={18} />

                  <input
                    type="email"
                    placeholder="faculty@edureport.com"
                    value={
                      forgotEmail
                    }
                    onChange={(event) =>
                      setForgotEmail(
                        event.target.value
                      )
                    }
                  />

                </div>

                {error && (
                  <div className="auth-error">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="auth-success">
                    {message}
                  </div>
                )}

                <button className="auth-submit">
                  Reset Password
                </button>

              </form>

              <button
                className="forgot-button"
                onClick={() => {
                  setShowForgot(false);
                  setError("");
                  setMessage("");
                }}
              >
                ← Back to Login
              </button>

              <div className="fake-reset-note">
                This is a demo forgot-password
                feature. No real email is sent.
              </div>

            </>
          )}

        </div>

      </div>

    </div>
  );
}