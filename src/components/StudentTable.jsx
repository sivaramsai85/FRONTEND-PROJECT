import { Link } from "react-router-dom";

function StudentTable({ students }) {
  if (!students.length) {
    return (
      <div className="empty-table">
        No students found.
      </div>
    );
  }

  return (
    <div className="student-table-container">

      <table className="student-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Department</th>
            <th>Attendance</th>
            <th>Average</th>
            <th>Grade</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (
            <tr key={student.id}>

              <td>
                <strong>{student.name}</strong>
              </td>

              <td>
                {student.rollNo}
              </td>

              <td>
                {student.department}
              </td>

              <td>
                <div className="attendance-cell">
                  <span>
                    {student.attendance}%
                  </span>

                  <div className="mini-progress">
                    <div
                      style={{
                        width: `${student.attendance}%`
                      }}
                    />
                  </div>
                </div>
              </td>

              <td>
                {student.average}%
              </td>

              <td>
                <span className="grade-badge">
                  {student.grade}
                </span>
              </td>

              <td>
                <span
                  className={`status-badge ${
                    student.status ===
                    "Excellent"
                      ? "excellent"
                      : student.status ===
                        "Good"
                      ? "good"
                      : "attention"
                  }`}
                >
                  {student.status}
                </span>
              </td>

              <td>
                <Link
                  className="view-button"
                  to={`/students/${student.id}`}
                >
                  View
                </Link>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;