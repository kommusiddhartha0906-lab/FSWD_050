const courses = [
  { id: 1, name: "Full Stack Development", credits: 3, faculty: "Dr. Ravi" },
  { id: 2, name: "Database Management", credits: 4, faculty: "Ms. Priya" },
  { id: 3, name: "Computer Networks", credits: 3, faculty: "Mr. Kumar" },
];

export default function Question1() {
  return (
    <div style={{ fontFamily: "Arial", padding: 25 }}>
      <h1>Course List</h1>

      {courses.length > 0 ? (
        courses.map((course) => (
          <div
            key={course.id}
            style={{
              padding: 15,
              margin: 12,
              background: "#eaf2ff",
              borderRadius: 8,
            }}
          >
            <h2>{course.name}</h2>
            <p>Credits: {course.credits}</p>
            <p>Faculty: {course.faculty}</p>
          </div>
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
}
