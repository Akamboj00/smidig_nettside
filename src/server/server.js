const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const firebase = require("firebase");
require('dotenv').config()

const app = express();

app.use(
  session({
    secret: "qIi4I1NH9KrdKL0oc0IPgr",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

app.get("/api/profile", (req, res) => {
  const { email } = req.session;
  if (!email) {
    return res.status(401).send();
  }
  res.json({ email });
});

app.post("/api/login", (req, res) => {
  const { email } = req.body;
  req.session.email = email;
  res.end();
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
