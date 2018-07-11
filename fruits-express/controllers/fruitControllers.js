console.log("fruitControllers.js is running...");

const express = require("express");
const router = express.Router();
const Fruits = require("../models/fruits");


// Index Route
router.get("/", (req, res) => {
	res.render("index.ejs", {
		"fruitsList": Fruits
	});
});


// Create Route
router.get("/new", (req, res) => {
	res.render("new.ejs");
});

// This is the route that the form is sending its info to (create route).
router.post('/', (req, res) => {
  // Contents of the form will be in req.body
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruits.push(req.body);
  console.log(Fruits);
  res.redirect("/fruits/");
});


// Show route 
router.get("/:index", (req, res) => {
		res.render("show.ejs", {
		"fruit": Fruits[req.params.index]
	});
});


// Delete Route
router.delete("/:index", (req, res) => {
	Fruits.splice(req.params.index, 1);
	console.log(Fruits);
	res.redirect("/fruits/");
});


// Edit Route
router.get("/:index/edit", (req, res) => {
		res.render("edit.ejs", {
		fruit: Fruits[req.params.index],
		index: req.params.index
	});
});

// This is the route that the form is sending its info to (edit route).
router.put("/:index", (req, res) => {
	if (req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	Fruits[req.params.index] = req.body;
	res.redirect("/fruits/");
	console.log(Fruits);
});


module.exports = router;