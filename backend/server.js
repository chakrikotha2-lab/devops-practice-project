const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());   // Allow frontend access

// Root endpoint
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API endpoint
app.get("/api", (req, res) => {
  res.json({
    status: "success",
    message: "API is working correctly",
    environment: "feature"
  });
});

// Server start (ALWAYS LAST)
app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on port 5000");
});

