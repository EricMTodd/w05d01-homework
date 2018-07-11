console.log("server.js is running...");


const express = require("express");
const app = express();

// Require our model. The model should be capitalized.
const Fruits = require("./models/fruits");




// Creating the index route.
// Index route should show all the fruits.rm
app.get("/fruits", (req, res) => {
	res.render("index.ejs", {
		"fruitsList": Fruits
	});
});


// What we are trying to do is get to localhost:3000/fruits/0 --> apple.
// We are going to use query params to act like a variable which can be sent over by the client.
// This is called "express routing";

// This is the show route --> This route always shows one item from the model.
app.get("/fruits/:index", (req, res) => {
	// Render is when you want to show an ejs template to the client.
	res.render("show.ejs", {
		"fruit": Fruits[req.params.index] // This creates a fruit varaible in the show page.
	});
});


app.listen(3000, () => {
	console.log("server.js is listening on port 3000");
});




























