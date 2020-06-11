const electron = require("electron");
const express = require("express");
const cors = require("cors");
let os = require("shelljs");
let fs = require("fs");
let bp = require("body-parser");
let file = "../../info.txt";

const { app, BrowserWindow, dialog } = electron;

let window;
app.on("ready", function() {
  window = new BrowserWindow({});

  window.loadURL(
    process.argv[2] == "--prod"
      ? "http://localhost:2155"
      : "http://localhost:8080"
  );
});

function numbers(data) {
  data.forEach((element) => {
    fs.writeFileSync(file, element + " HI");
  });

  os.exec("cd ..");
  os.exec("cd ..");
  os.exec("python init.py");
}

let expressApp = express();
expressApp.use(express.static("public"));
expressApp.use(cors());
expressApp.use(bp.json());

expressApp.post("/submit", function(req, res) {
  numbers(req.body.numbers);
  res.status(200).send("yes");
});
expressApp.listen(2155);
