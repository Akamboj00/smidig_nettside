const express = require("express");
const path = require("path");

const app = express();

app.get("/api/profile", (req, res) => {
  res.json({ username: "User from server" });
});

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
  } else {
    next();
  }
});

app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});
