export default function Question2() {
  const student = {
    name: "Rahul Sharma",
    age: 20,
    branch: "CSE",
    passed: true,
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 25, textAlign: "center" }}>
      <h1>Student Profile</h1>

      <div style={{ background: "#f0eaff", padding: 25, borderRadius: 12 }}>
        <img
          src="https://placehold.co/150x150?text=Student"
          alt={`${student.name}'s profile`}
          className="profile-image"
          style={{ width: 120, height: 120, borderRadius: "50%" }}
        />

        <h2>{`Name: ${student.name}`}</h2>
        <p>Age: {student.age}</p>
        <p>Branch: {student.branch}</p>

        <p style={{ color: student.passed ? "green" : "red" }}>
          Status: {student.passed ? "Pass" : "Fail"}
        </p>
      </div>
    </div>
  );
}
