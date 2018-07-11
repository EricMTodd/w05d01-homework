Lab

# Lab/HW - REST: Index/Show

## Superheros

### Basic Express App
1. Create a new directory inside your labs dir called "superheroes"
1. cd into superheroes
1. perform an npm init, specify server.js as your entry
1. install express
1. create a server.js file
1. inside server.js, require express and save it to a variable named `express`
1. create a variable named app, and set it equal to `express()`
1. have app listen on port 3000
    - once it's listening, log "Here to save the day..."
1. test it by going to http://localhost:3000

### Routes

1. Create a variable called superheroes and set it to ['batman', 'superman', 'hulk']
1. Create a route to /superheroes
    - The route should send the entire superheroes array
1. Create a route to /superheroes/:index
    - The route should send the superhero that is at the index in the superheroes array as specified by req.params.index

### Enhancing Data

1. Change the entries in the superheroes array so that each element in the array is an object
    - E.g. Instead of 'superman' have: `{ name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']}`




# Homework MVC: Index

1. Extend the app we've built in class so that the index route uses EJS to render all the fruits into HTML
    - Each fruit that is displayed should have a link to that fruit's show page
    - Each fruit's show page should have a link back to the index page
1. Next exit the fruit folder, and Clone this repo [this starter code](https://git.generalassemb.ly/WebDev-Connected-Classroom/space-Hw) (Make sure you are not in a git repo)and follow the directions in the comments in ```server.js```. This is the server code you have add the rest
