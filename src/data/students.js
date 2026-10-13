const DEFAULT_STUDENTS = [
  {
    id: 1,
    name: "Siva Kumar",
    email: "siva@student.com",
    password: "siva123",
    rollNo: "23CS001",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 92,
    subjects: {
      mathematics: 88,
      physics: 91,
      programming: 95,
      database: 89
    },
    average: 91,
    grade: "A+",
    status: "Excellent",
    phone: "9876543201",
    remarks: "Excellent academic performance."
  },

  {
    id: 2,
    name: "Rahul Varma",
    email: "rahul@student.com",
    password: "rahul123",
    rollNo: "23CS002",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 86,
    subjects: {
      mathematics: 82,
      physics: 85,
      programming: 90,
      database: 84
    },
    average: 85,
    grade: "A",
    status: "Good",
    phone: "9876543202",
    remarks: "Good performance. Improve consistency."
  },

  {
    id: 3,
    name: "Ananya Reddy",
    email: "ananya@student.com",
    password: "ananya123",
    rollNo: "23EC003",
    department: "ECE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 95,
    subjects: {
      mathematics: 94,
      physics: 96,
      programming: 91,
      database: 93
    },
    average: 94,
    grade: "A+",
    status: "Excellent",
    phone: "9876543203",
    remarks: "Outstanding academic performance."
  },

  {
    id: 4,
    name: "Priya Sharma",
    email: "priya@student.com",
    password: "priya123",
    rollNo: "23EE004",
    department: "EEE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 78,
    subjects: {
      mathematics: 74,
      physics: 79,
      programming: 76,
      database: 80
    },
    average: 77,
    grade: "B+",
    status: "Attention",
    phone: "9876543204",
    remarks: "Attendance and academic performance need improvement."
  },

  {
    id: 5,
    name: "Arjun Rao",
    email: "arjun@student.com",
    password: "arjun123",
    rollNo: "23CS005",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 88,
    subjects: {
      mathematics: 86,
      physics: 83,
      programming: 92,
      database: 87
    },
    average: 87,
    grade: "A",
    status: "Good",
    phone: "9876543205",
    remarks: "Strong programming skills."
  },

  {
    id: 6,
    name: "Sneha Patel",
    email: "sneha@student.com",
    password: "sneha123",
    rollNo: "23EC006",
    department: "ECE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 91,
    subjects: {
      mathematics: 90,
      physics: 88,
      programming: 85,
      database: 89
    },
    average: 88,
    grade: "A",
    status: "Good",
    phone: "9876543206",
    remarks: "Consistent academic performance."
  },

  {
    id: 7,
    name: "Kiran Teja",
    email: "kiran@student.com",
    password: "kiran123",
    rollNo: "23EE007",
    department: "EEE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 72,
    subjects: {
      mathematics: 70,
      physics: 73,
      programming: 69,
      database: 75
    },
    average: 72,
    grade: "B",
    status: "Attention",
    phone: "9876543207",
    remarks: "Needs improvement in attendance and academics."
  },

  {
    id: 8,
    name: "Meghana Devi",
    email: "meghana@student.com",
    password: "meghana123",
    rollNo: "23CS008",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 96,
    subjects: {
      mathematics: 95,
      physics: 94,
      programming: 97,
      database: 96
    },
    average: 96,
    grade: "A+",
    status: "Excellent",
    phone: "9876543208",
    remarks: "Exceptional overall performance."
  },

  {
    id: 9,
    name: "Vikram Singh",
    email: "vikram@student.com",
    password: "vikram123",
    rollNo: "23CS009",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 89,
    subjects: {
      mathematics: 84,
      physics: 87,
      programming: 91,
      database: 88
    },
    average: 88,
    grade: "A",
    status: "Good",
    phone: "9876543209",
    remarks: "Good overall performance."
  },

  {
    id: 10,
    name: "Pooja Nair",
    email: "pooja@student.com",
    password: "pooja123",
    rollNo: "23EC010",
    department: "ECE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "A",
    attendance: 93,
    subjects: {
      mathematics: 92,
      physics: 90,
      programming: 88,
      database: 91
    },
    average: 90,
    grade: "A+",
    status: "Excellent",
    phone: "9876543210",
    remarks: "Very good academic performance."
  },

  {
    id: 11,
    name: "Rohit Kumar",
    email: "rohit@student.com",
    password: "rohit123",
    rollNo: "23CS011",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 81,
    subjects: {
      mathematics: 79,
      physics: 82,
      programming: 85,
      database: 80
    },
    average: 82,
    grade: "A",
    status: "Good",
    phone: "9876543211",
    remarks: "Good performance with room for improvement."
  },

  {
    id: 12,
    name: "Divya Rao",
    email: "divya@student.com",
    password: "divya123",
    rollNo: "23EE012",
    department: "EEE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 76,
    subjects: {
      mathematics: 73,
      physics: 77,
      programming: 75,
      database: 79
    },
    average: 76,
    grade: "B+",
    status: "Attention",
    phone: "9876543212",
    remarks: "Improve attendance and consistency."
  },

  {
    id: 13,
    name: "Aditya Reddy",
    email: "aditya@student.com",
    password: "aditya123",
    rollNo: "23CS013",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 94,
    subjects: {
      mathematics: 91,
      physics: 93,
      programming: 96,
      database: 94
    },
    average: 94,
    grade: "A+",
    status: "Excellent",
    phone: "9876543213",
    remarks: "Excellent technical performance."
  },

  {
    id: 14,
    name: "Harsha Vardhan",
    email: "harsha@student.com",
    password: "harsha123",
    rollNo: "23EC014",
    department: "ECE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 87,
    subjects: {
      mathematics: 85,
      physics: 88,
      programming: 84,
      database: 86
    },
    average: 86,
    grade: "A",
    status: "Good",
    phone: "9876543214",
    remarks: "Consistent performance."
  },

  {
    id: 15,
    name: "Keerthi Lakshmi",
    email: "keerthi@student.com",
    password: "keerthi123",
    rollNo: "23CS015",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 97,
    subjects: {
      mathematics: 96,
      physics: 95,
      programming: 98,
      database: 97
    },
    average: 97,
    grade: "A+",
    status: "Excellent",
    phone: "9876543215",
    remarks: "Outstanding performance."
  },

  {
    id: 16,
    name: "Manoj Kumar",
    email: "manoj@student.com",
    password: "manoj123",
    rollNo: "23EE016",
    department: "EEE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 74,
    subjects: {
      mathematics: 71,
      physics: 74,
      programming: 72,
      database: 76
    },
    average: 73,
    grade: "B+",
    status: "Attention",
    phone: "9876543216",
    remarks: "Needs improvement in attendance."
  },

  {
    id: 17,
    name: "Nikhil Varma",
    email: "nikhil@student.com",
    password: "nikhil123",
    rollNo: "23CS017",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 90,
    subjects: {
      mathematics: 87,
      physics: 89,
      programming: 94,
      database: 91
    },
    average: 90,
    grade: "A+",
    status: "Excellent",
    phone: "9876543217",
    remarks: "Strong programming performance."
  },

  {
    id: 18,
    name: "Aishwarya Devi",
    email: "aishwarya@student.com",
    password: "aishwarya123",
    rollNo: "23EC018",
    department: "ECE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 84,
    subjects: {
      mathematics: 81,
      physics: 86,
      programming: 83,
      database: 85
    },
    average: 84,
    grade: "A",
    status: "Good",
    phone: "9876543218",
    remarks: "Good academic progress."
  },

  {
    id: 19,
    name: "Sai Charan",
    email: "saicharan@student.com",
    password: "saicharan123",
    rollNo: "23CS019",
    department: "CSE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 79,
    subjects: {
      mathematics: 78,
      physics: 80,
      programming: 82,
      database: 77
    },
    average: 79,
    grade: "B+",
    status: "Attention",
    phone: "9876543219",
    remarks: "Needs consistent academic practice."
  },

  {
    id: 20,
    name: "Lakshmi Priya",
    email: "lakshmi@student.com",
    password: "lakshmi123",
    rollNo: "23EE020",
    department: "EEE",
    year: "2nd Year",
    semester: "Semester 2",
    section: "B",
    attendance: 91,
    subjects: {
      mathematics: 89,
      physics: 92,
      programming: 87,
      database: 90
    },
    average: 90,
    grade: "A+",
    status: "Excellent",
    phone: "9876543220",
    remarks: "Excellent academic performance."
  }
];

export const faculty = {
  id: 100,
  name: "Faculty Admin",
  email: "faculty@edureport.com",
  password: "faculty123",
  role: "admin",
  department: "Computer Science & Engineering",
  designation: "Assistant Professor"
};

export const assignments = [
  {
    id: 1,
    title: "Java Data Structures",
    subject: "Programming",
    dueDate: "2026-10-08",
    status: "Pending"
  },
  {
    id: 2,
    title: "Database Normalization",
    subject: "Database",
    dueDate: "2026-10-11",
    status: "Pending"
  },
  {
    id: 3,
    title: "Numerical Methods",
    subject: "Mathematics",
    dueDate: "2026-10-14",
    status: "Submitted"
  },
  {
    id: 4,
    title: "Physics Lab Record",
    subject: "Physics",
    dueDate: "2026-10-18",
    status: "Pending"
  }
];

export const announcements = [
  {
    id: 1,
    title: "Mid Examination Schedule",
    date: "2026-10-06",
    type: "Exam",
    description:
      "The mid examination schedule has been published."
  },
  {
    id: 2,
    title: "Assignment Submission",
    date: "2026-10-08",
    type: "Academic",
    description:
      "Students must submit the Java assignment before the deadline."
  },
  {
    id: 3,
    title: "Attendance Notice",
    date: "2026-10-09",
    type: "Important",
    description:
      "Students below 75% attendance should meet their faculty advisor."
  }
];

export const timetable = [
  {
    day: "Monday",
    classes: [
      ["09:30", "Mathematics"],
      ["11:00", "Programming"],
      ["14:00", "Database"]
    ]
  },
  {
    day: "Tuesday",
    classes: [
      ["09:30", "Physics"],
      ["11:00", "Programming Lab"],
      ["14:00", "Mathematics"]
    ]
  },
  {
    day: "Wednesday",
    classes: [
      ["09:30", "Database"],
      ["11:00", "Physics"],
      ["14:00", "Programming"]
    ]
  },
  {
    day: "Thursday",
    classes: [
      ["09:30", "Mathematics"],
      ["11:00", "Database Lab"],
      ["14:00", "Physics"]
    ]
  },
  {
    day: "Friday",
    classes: [
      ["09:30", "Programming"],
      ["11:00", "Mathematics"],
      ["14:00", "Project Work"]
    ]
  }
];

/* =========================================
   STUDENT STORAGE
========================================= */

const STORAGE_KEY =
  "edureport_students";

export function getStudents() {
  try {
    const stored =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Use defaults
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      DEFAULT_STUDENTS
    )
  );

  return DEFAULT_STUDENTS;
}

export function saveStudents(list) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(list)
  );
}

export function resetStudents() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      DEFAULT_STUDENTS
    )
  );
}

export function addStudent(student) {
  const currentStudents =
    getStudents();

  const newId =
    currentStudents.length
      ? Math.max(
          ...currentStudents.map(
            (student) =>
              Number(student.id)
          )
        ) + 1
      : 1;

  const newStudent = {
    ...student,
    id: newId
  };

  saveStudents([
    ...currentStudents,
    newStudent
  ]);

  return newStudent;
}

export function getStudentById(id) {
  return getStudents().find(
    (student) =>
      Number(student.id) ===
      Number(id)
  );
}

export function getStudentByEmail(
  email
) {
  return getStudents().find(
    (student) =>
      student.email
        .toLowerCase() ===
      email
        .toLowerCase()
  );
}

export function calculateAverage(
  student
) {
  const values = Object.values(
    student.subjects || {}
  );

  if (!values.length) {
    return 0;
  }

  return Math.round(
    values.reduce(
      (total, value) =>
        total + Number(value),
      0
    ) / values.length
  );
}

export function getGrade(
  average
) {
  if (average >= 90) return "A+";
  if (average >= 80) return "A";
  if (average >= 70) return "B+";
  if (average >= 60) return "B";
  if (average >= 50) return "C";

  return "F";
}

export function getStatus(
  average
) {
  if (average >= 90) {
    return "Excellent";
  }

  if (average >= 80) {
    return "Good";
  }

  return "Attention";
}