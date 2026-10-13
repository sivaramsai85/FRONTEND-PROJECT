import {
  LayoutDashboard,
  Users,
  FileText,
  CalendarCheck,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
  ClipboardList,
  Megaphone,
  CalendarDays,
  UserCircle,
  UserPlus
} from "lucide-react";

import {
  NavLink,
  useNavigate
} from "react-router-dom";

export default function Sidebar() {
  const navigate =
    useNavigate();

  let user = null;

  try {
    user = JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );
  } catch {
    user = null;
  }

  const isFaculty =
    user?.role === "admin";

  const facultyLinks = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />
    },
    {
      path: "/students",
      label: "Students",
      icon: <Users size={18} />
    },
    {
      path: "/students/add",
      label: "Add Student",
      icon: <UserPlus size={18} />
    },
    {
      path: "/attendance",
      label: "Attendance",
      icon: <CalendarCheck size={18} />
    },
    {
      path: "/reports",
      label: "Reports",
      icon: <FileText size={18} />
    },
    {
      path: "/analytics",
      label: "Analytics",
      icon: <BarChart3 size={18} />
    },
    {
      path: "/announcements",
      label: "Announcements",
      icon: <Megaphone size={18} />
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <Settings size={18} />
    }
  ];

  const studentLinks = [
    {
      path: "/dashboard",
      label: "My Dashboard",
      icon: <LayoutDashboard size={18} />
    },
    {
      path: "/attendance",
      label: "My Attendance",
      icon: <CalendarCheck size={18} />
    },
    {
      path: "/assignments",
      label: "Assignments",
      icon: <ClipboardList size={18} />
    },
    {
      path: "/timetable",
      label: "Timetable",
      icon: <CalendarDays size={18} />
    },
    {
      path: "/announcements",
      label: "Notices",
      icon: <Megaphone size={18} />
    },
    {
      path: "/profile",
      label: "My Profile",
      icon: <UserCircle size={18} />
    }
  ];

  const links =
    isFaculty
      ? facultyLinks
      : studentLinks;

  function logout() {
    localStorage.removeItem(
      "currentUser"
    );

    navigate("/", {
      replace: true
    });
  }

  return (
    <aside className="sidebar">

      <div className="logo">

        <GraduationCap
          size={25}
        />

        <span>
          EduReport
        </span>

      </div>

      <div className="role-badge">
        {isFaculty
          ? "FACULTY PORTAL"
          : "STUDENT PORTAL"}
      </div>

      <nav>

        {links.map(
          (item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({
                isActive
              }) =>
                `nav-link ${
                  isActive
                    ? "active"
                    : ""
                }`
              }
            >
              {item.icon}

              <span>
                {item.label}
              </span>

            </NavLink>
          )
        )}

      </nav>

      <div className="sidebar-bottom">

        <div className="logged-user">

          <div className="small-sidebar-avatar">
            {user?.name
              ?.charAt(0)
              .toUpperCase() ||
              "U"}
          </div>

          <div>

            <strong>
              {user?.name ||
                "User"}
            </strong>

            <small>
              {isFaculty
                ? "Faculty"
                : "Student"}
            </small>

          </div>

        </div>

        <button
          className="logout-button"
          onClick={logout}
        >
          <LogOut size={16} />

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}