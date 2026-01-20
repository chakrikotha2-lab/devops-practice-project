const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());   // Allow frontend access

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ ADD THIS API ROUTE
app.get("/api", (req, res) => {
  res.send("Backend API working ✅");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on port 5000");
});

