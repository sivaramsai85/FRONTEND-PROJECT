import { Bell, Search } from "lucide-react";

function Navbar() {
  let user = null;

  try {
    user = JSON.parse(
      localStorage.getItem("currentUser")
    );
  } catch {
    user = null;
  }

  const name = user?.name || "User";

  return (
    <header className="navbar">

      <div className="navbar-title">
        <h2>Student Reporting System</h2>

        <p>
          Monitor academic performance
          and student progress
        </p>
      </div>

      <div className="navbar-right">

        <div className="search-box">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />

        </div>

        <button
          className="icon-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <div className="profile">

          <div className="avatar">
            {name
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <strong>{name}</strong>

            <small>
              {user?.role === "admin"
                ? "Faculty"
                : "Student"}
            </small>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;