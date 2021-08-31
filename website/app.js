// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


// All URL's needed to communicate with server.js endpoints
// URL for env edpoint
let envUrl = "http://127.0.0.1:3000/env";
//the url for all edpoint
let allUrl = "http://127.0.0.1:3000/all";
// the url for send endpoint
let sendUrl = "http://127.0.0.1:3000/send";

//get the id for Generate button, so I can maka an event for it.
const generate = document.getElementById("generate");

// event for clicking generate button, to get data via fetch() when clicked.
generate.addEventListener("click", perform);

async function perform(){

    //get the api key via fetch from the endpoint env to help getting the data from external server.
    const response = await fetch(envUrl)
    const data = await response.json();
    const apiKey = data.apiKey;         //we used ".apiKey" because its the name we used in our endpoint object we sent

    //url to be use with fetch
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

};