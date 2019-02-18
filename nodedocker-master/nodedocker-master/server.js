"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world\n");
});

const emps = [
  {
    EmpNo: 1001,
    EmpName: "A"
  },
  {
    EmpNo: 1002,
    EmpName: "B"
  },
  {
    EmpNo: 1003,
    EmpName: "C"
  },
  {
    EmpNo: 1004,
    EmpName: "D"
  }
];

app.get("/", (req, res) => {
  res.send("Hello world\n");
});

app.get("/emps", (req, res) => {
  res.send(JSON.stringify(emps));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
