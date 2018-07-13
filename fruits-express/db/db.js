console.log("db.js is running...");

// This is where we will set up our db connection.
const mongoose = require("mongoose");

// Food is the name of our database that is automatically created.
const url = "mongodb://localhost:27017/food";
mongoose.connect(url, { useNewUrlParser: true });


mongoose.connection.on("connected", () => {
	console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
	console.log(err, " mongoose failed to connect");
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose is disconnected");
});













