import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// =====================================================
// AUTH PAGES
// =====================================================

import LoginSelection from "./pages/LoginSelection";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";

// =====================================================
// MAIN PAGES
// =====================================================

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";

import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import Assignments from "./pages/Assignments";
import Announcements from "./pages/Announcements";
import Timetable from "./pages/Timetable";
import Profile from "./pages/Profile";


// =====================================================
// GET CURRENT USER
// =====================================================

function getCurrentUser() {
  const storedUser =
    localStorage.getItem("currentUser");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem("currentUser");
    return null;
  }
}


// =====================================================
// PROTECTED ROUTE
// =====================================================

function ProtectedRoute({
  children,
  role
}) {
  const user = getCurrentUser();

  // No login
  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  // Faculty-only route
  if (role === "faculty") {
    const isFaculty =
      user.role === "admin" ||
      user.role === "faculty";

    if (!isFaculty) {
      return (
        <Navigate
          to="/dashboard"
          replace
        />
      );
    }
  }

  // Student-only route
  if (role === "student") {
    if (user.role !== "student") {
      return (
        <Navigate
          to="/dashboard"
          replace
        />
      );
    }
  }

  return children;
}


// =====================================================
// APP
// =====================================================

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =================================================
            AUTHENTICATION
        ================================================= */}

        <Route
          path="/"
          element={
            <LoginSelection />
          }
        />

        <Route
          path="/login"
          element={
            <Login />
          }
        />

        <Route
          path="/student-login"
          element={
            <StudentLogin />
          }
        />

        <Route
          path="/faculty-login"
          element={
            <FacultyLogin />
          }
        />


        {/* =================================================
            DASHBOARD
        ================================================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            FACULTY - STUDENTS
        ================================================= */}

        <Route
          path="/students"
          element={
            <ProtectedRoute role="faculty">
              <Students />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/add"
          element={
            <ProtectedRoute role="faculty">
              <AddStudent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/:id"
          element={
            <ProtectedRoute>
              <StudentDetails />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            ATTENDANCE
        ================================================= */}

        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            FACULTY REPORTS
        ================================================= */}

        <Route
          path="/reports"
          element={
            <ProtectedRoute role="faculty">
              <Reports />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            FACULTY ANALYTICS
        ================================================= */}

        <Route
          path="/analytics"
          element={
            <ProtectedRoute role="faculty">
              <Analytics />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            STUDENT ASSIGNMENTS
        ================================================= */}

        <Route
          path="/assignments"
          element={
            <ProtectedRoute role="student">
              <Assignments />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            ANNOUNCEMENTS
        ================================================= */}

        <Route
          path="/announcements"
          element={
            <ProtectedRoute>
              <Announcements />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            STUDENT TIMETABLE
        ================================================= */}

        <Route
          path="/timetable"
          element={
            <ProtectedRoute role="student">
              <Timetable />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            STUDENT PROFILE
            THIS WAS MISSING
        ================================================= */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute role="student">
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            SETTINGS
        ================================================= */}

        <Route
          path="/settings"
          element={
            <ProtectedRoute role="faculty">
              <Settings />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            FALLBACK
        ================================================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}