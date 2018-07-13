console.log("fruitControllers.js is running...");

const express = require("express");
const router = express.Router();
const Fruits = require("../models/fruits");


// Index Route
router.get("/", (req, res) => {
// Finding every fruit without a search parameter.
	Fruits.find({}, (err, allFruits) => {
		if (err) {
			res.render(err);
		} else {
// allFruits is the response from our db, when you are finding all of something it returns an array.
		res.render("index.ejs", {
		"fruitsList": allFruits
	});
		}
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
// Adding the contents of the form to the model.
	  Fruits.create(req.body, (err, createdFruit) => {
	  	if (err) {
	  		console.log(err);
	  	} else {
	  		console.log(createdFruit);
// We want to respond to the client after we get the response from the database.
			res.redirect("/fruits/");
	  	}
	});
});


// Show route 
router.get("/:index", (req, res) => {
		res.render("show.ejs", {
		"fruit": Fruits[req.params.index]
	});
});


// Delete Route
router.delete("/:id", (req, res) => {
	Fruits.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
		res.redirect("/fruits/");
	});
});


// Edit Route
router.get("/:id/edit", (req, res) => {
		Fruits.findById(req.params.id, (err, foundFruit) =>{
		res.render("edit.ejs", {
		"fruit": foundFruit
		});
	});
});

// This is the route that the form is sending its info to (edit route).
router.put("/:id", (req, res) => {
	if (req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
// The new true returns the updated object. By default it is false. Things that are default you don't have to specify.
// First argument is the document you are looking for.
// Second argument is the content you are updating with.
	Fruits.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
		if (err) {
			res.render(err);
		} else {
			console.log(updatedFruit, "Model successfully updated.");
			res.redirect("/fruits/");
		}
	});
});


module.exports = router;