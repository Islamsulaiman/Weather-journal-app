//1) setup the server..
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// define bodyParser pacakge
const bodyParser = require("body-parser");
// use bodyParser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Require path module to detrmine the path of ".env" across all systems
const path = require("path")
const filePath = path.resolve(process.cwd() + "/config/.env")  //get the full path to ".env"
const dotenv = require("dotenv")  //require dotenv module
dotenv.config({path: filePath})  //pass the full path to dotenv module to allow as accessing ".env" file content

//endpoint to send all the needed data from ".env" file
app.get("/env", (req, res) => {
    let API = process.env.API_KEY; //get the data
    res.send({apiKey: API})  //send this object to "app.js"
});


//endpoint to recive data and store it into projectData
app.post("/all", (req, res) => {
    projectData = { ...req.body};
    res.send();
});

app.get("/send", (req, res) => {
    res.send(projectData);
});

// Setup Server
const port = process.env.PORT || 3000;  // port number, either enviroment var or hardcoded.
const server = app.listen(port, listening);

function listening(){
    // make sure the server is running
    console.log(`The server is running on port number ${port} ....`);
};