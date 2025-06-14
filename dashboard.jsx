import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [username, setUsername] = useState("");
  const [habits, setHabits] = useState([
    { title: "Daily Reading", progress: 75 },
    { title: "Online Course", progress: 50 },
    { title: "Practice Coding", progress: 90 },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h1>Welcome, {username}!</h1>
      {habits.map((habit, index) => (
        <div className="habit" key={index}>
          <h2>{habit.title}</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${habit.progress}%` }}>{habit.progress}%</div>
          </div>
        </div>
      ))}
      <nav className="nav-buttons">
        <a href="#">View History (soon)</a>
        <a href="#">Settings (soon)</a>
      </nav>
      <footer>
        <p>© 2025 Learning Habit Tracker</p>
      </footer>
    </div>
  );
}

export default Dashboard;
