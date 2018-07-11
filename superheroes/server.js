console.log("server.js is running...");

const express = require("express");
const app = express();

app.listen(3000, () => {
	console.log("Here to save the day... on port 3000.");
});


superheroes = [{
	name: "Reaper",
	actions: ["Hellfire Shotguns", "Phase Shift", "Shadow Step", "Death Blossom"],

},
{
	name: "Roadhog",
	actions: ["Shrapnel Cannon", "Meat Hook", "Huff Gas", "Whole-Hog"],
},
{
	name: "Bastion",
	actions: ["Fire Cannon", "Fortify", "Repair", "Siege Mode"],
}];

app.get("/superheroes", (req, res) => {
	res.send(superheroes);
});

app.get("/superheroes/:index", (req, res) => {
	res.send(superheroes[req.params.index]);
});


























