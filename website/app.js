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