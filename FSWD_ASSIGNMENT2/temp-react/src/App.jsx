import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

// QUESTION 1: COURSE LIST
function Question1() {
  const courses = [
    { id: 1, name: "Full Stack Development", credits: 3, faculty: "Dr. Ravi" },
    { id: 2, name: "Database Management", credits: 4, faculty: "Ms. Priya" },
    { id: 3, name: "Computer Networks", credits: 3, faculty: "Mr. Kumar" },
  ];

  return (
    <div className="q1-page">
      <header className="q1-header">
        <h1>Course Directory</h1>
        <p>Explore your academic courses</p>
      </header>

      <main className="q1-container">
        <h2>Available Courses</h2>

        {courses.length > 0 ? (
          <div className="course-list">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-number">{course.id}</div>
                <div>
                  <h3>{course.name}</h3>
                  <p>Credits: {course.credits}</p>
                  <p>Faculty: {course.faculty}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-message">No courses available</p>
        )}
      </main>
    </div>
  );
}

// QUESTION 2: STUDENT PROFILE
function Question2() {
  const student = {
    name: "Rahul Sharma",
    age: 20,
    branch: "Computer Science and Engineering",
    passed: true,
  };

  return (
    <div className="q2-page">
      <header className="q2-header">
        <h1>Student Profile</h1>
        <p>Student information and academic status</p>
      </header>

      <main className="profile-card">
        <img
          src="https://placehold.co/180x180/e0e7ff/3730a3?text=Student"
          alt={`${student.name}'s profile`}
          className="profile-image"
        />

        <h2>{`Hello, ${student.name}!`}</h2>
        <p className="profile-subtitle">Student Information</p>

        <div className="profile-detail">
          <span>Name</span>
          <strong>{student.name}</strong>
        </div>

        <div className="profile-detail">
          <span>Age</span>
          <strong>{student.age} years</strong>
        </div>

        <div className="profile-detail">
          <span>Branch</span>
          <strong>{student.branch}</strong>
        </div>

        <p
          className={`status ${student.passed ? "pass" : "fail"}`}
          style={{
            backgroundColor: student.passed ? "#dcfce7" : "#fee2e2",
            color: student.passed ? "#166534" : "#991b1b",
          }}
        >
          Academic Status: {student.passed ? "PASS" : "FAIL"}
        </p>
      </main>
    </div>
  );
}

// QUESTION 3: ONLINE POLL
function Question3() {
  const [options, setOptions] = useState([
    { id: 1, text: "React", votes: 0 },
    { id: 2, text: "Angular", votes: 0 },
    { id: 3, text: "Vue", votes: 0 },
    { id: 4, text: "Svelte", votes: 0 },
  ]);

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  function handleVote(id) {
    setOptions((previousOptions) =>
      previousOptions.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option,
      ),
    );
  }

  return (
    <div className="q3-page">
      <header className="q3-header">
        <h1>QuickVote</h1>
        <p>Your opinion matters!</p>
      </header>

      <main className="poll-card">
        <span className="poll-label">COMMUNITY POLL</span>
        <h2>Which frontend framework do you prefer?</h2>
        <p className="poll-description">
          Select an option below to cast your vote.
        </p>

        {options.map((option) => {
          const percentage =
            totalVotes === 0 ? 0 : (option.votes / totalVotes) * 100;

          return (
            <div className="poll-option" key={option.id}>
              <div className="poll-option-heading">
                <span>{option.text}</span>
                <strong>{percentage.toFixed(1)}%</strong>
              </div>

              <div className="poll-track">
                <div className="poll-bar" style={{ width: `${percentage}%` }} />
              </div>

              <button
                className="vote-button"
                onClick={() => handleVote(option.id)}
              >
                Vote for {option.text}
              </button>

              <p className="vote-count">
                {option.votes} {option.votes === 1 ? "vote" : "votes"}
              </p>
            </div>
          );
        })}

        <div className="poll-footer">
          Total votes cast: <strong>{totalVotes}</strong>
        </div>

        <button
          className="reset-button"
          onClick={() =>
            setOptions((previousOptions) =>
              previousOptions.map((option) => ({ ...option, votes: 0 })),
            )
          }
        >
          Reset Poll
        </button>
      </main>
    </div>
  );
}

// ROUTING: EACH QUESTION HAS ITS OWN PAGE
function App() {
  return (
    <BrowserRouter>
      <nav className="site-navigation">
        <Link to="/question1">Question 1</Link>
        <Link to="/question2">Question 2</Link>
        <Link to="/question3">Question 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/question1" replace />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
