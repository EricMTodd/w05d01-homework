console.log("fruits.js is running...");

const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean
});

module.exports = mongoose.model("Fruit", fruitSchema);




























