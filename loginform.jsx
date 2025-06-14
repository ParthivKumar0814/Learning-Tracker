import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("username", username);
      navigate("/dashboard");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Tracker</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="note">Don’t have an account? <a href="#">Register (soon)</a></p>
      </div>
      <footer>
        <p>© 2025 Learning Habit Tracker</p>
      </footer>
    </div>
  );
}

export default LoginForm;
