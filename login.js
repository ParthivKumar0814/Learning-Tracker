document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter both username and password.");
  }
});
