console.log("server.js is running...");


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Initialized some middleware
// bodyParser allows us to read the contents of a form, or the body of a request.
// The app.use sets up what middleware you are using
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));


const fruitController = require("./controllers/fruitControllers");

// This means every route in the fruit controller starts with /fruits/.
app.use("/fruits/", fruitController);


app.listen(3000, () => {
	console.log("server.js is listening on port 3000");
});




























