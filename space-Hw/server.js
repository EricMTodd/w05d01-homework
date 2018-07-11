console.log("server.js is running...");

// DEPENDENCIES
const express = require('express');
const ejs = require("ejs");
const app = express();

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

const marsMissions = require("./models/marsMissions");

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
app.get("/marsMissions", (req, res) => {
  res.render("index.ejs", {
    "missionsIndex": marsMissions
  });
});

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get("/marsMissions/:index", (req, res) => {
  res.render("show.ejs", {
    "mission": marsMissions[req.params.index]
  });
});

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})
