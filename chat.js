const form = document.getElementById("chatForm");
const responseBox = document.getElementById("response");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const question = document.getElementById("question").value.trim();
  if (!question) return;
  responseBox.textContent = "Thinking...";

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // replace with your OpenAI key
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      }),
    });
    const data = await res.json();
    responseBox.textContent = data.choices?.[0]?.message?.content || "No reply received.";
  } catch (err) {
    responseBox.textContent = "Error: " + err.message;
  }
});

