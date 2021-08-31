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

    //get the zip code entred from the user
    let zipCode = document.getElementById("zip").value;

    //get the user inputs from feeling input feild
    const feeling = document.getElementById("feelings").value;

    try{
        //get the external data from the API, and return tempreture.
        let response = await fetch(url);
        let data = await response.json();
        let tempreture = data.main.temp;
        console.log(tempreture) ;  // for checking

        //send data=[temp, feelings, date] to endPoint via fetch()
        sendData(allUrl, {temp:tempreture, date:newDate, feel:feeling});  // we should add the host name before the endpoint name to make fetch work..
    
        //get the data from the server
        getData(sendUrl);

        //updte UI
        updateUi(tempreture, d, feeling)

    }catch(error){
        console.log(error);
    }

};


//send data=[temp, feelings, date] to endPoint via fetch()
const sendData = async(url ="", data = {}) => {
    await fetch(url, {
        method :"POST",
        credentials:"same-origin",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
};

//get data from server
const getData = async (url="") => {
    const getData =await fetch(url);
    const parseData = await getData.json();
};

//update the UI
const updateUi = (temp, date, feel) => {
    console.log(date)  // for checking
    document.getElementById("temp").innerText = `Tempreture: ${temp}`;
    document.getElementById("date").innerText = `Date: ${date}`;
    document.getElementById("content").innerText = `You feel: ${feel}`;
};