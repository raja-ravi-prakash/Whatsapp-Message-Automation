const electron = require("electron");
const express = require("express");
const cors = require("cors");

const { app, BrowserWindow, dialog } = electron;

let window;
app.on("ready", function() {
  window = new BrowserWindow({});
  window.loadURL("http://localhost:8080");
});

let expressApp = express();

expressApp.use(express.static("public"));
expressApp.use(cors());
expressApp.post("/submit", function(req, res) {
  dialog.showMessageBox({
    buttons: ["Yes"],
    message: JSON.stringify(req.body),
  });
  res.status(200).send("yes");
});
expressApp.listen(2155);
