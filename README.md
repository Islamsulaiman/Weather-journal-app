# Weather-Journal App Project

## Overview
This project uresis openweathermap API and zoocide provided by the user to give back the temperature of this specific location.

## Instructions before run
1) Create an account in "https://api.openweathermap.org" and copy your api key.
2) Create .env file -using terminal- inside config folder.
3) Add your api key inside .env file in the form of: API_KEY = copied api key -without parentheses- 


## how to run
1) Within terminal, navigate to project main folder.
2) type (npm install) within your terminal to download all the packages nedded to this project."this will add node_modules file to your main folder"
3) type (npm start) in terminal, to start the server using nodemon package.


## technologies used with this project
1) vanilla JS
2) html
3) css

## project implementation steps
1) server.js > setup the server.
2) make account on open weather.
3) Integrating OpenWeatherMap API:
    3.1 The personal API Key for OpenWeatherMap API is saved in a named const variable.	
    3.2 The API Key variable is passed as a parameter to fetch() .
    3.3 Data is successfully returned from the external API.
4) implement all my endpoint at server.js:
    4.1 get route to send data to app.js
    4.2 post route to take data from app.js
5) implement fetch to get data from external server
6) send data to server,js
7) get the data back from server.js
8) update the UI

## Disclaimer
This Project is a collaboration between me and Udacity nanodegree program, there’s some starter code provided by Udacity presented in the initial commit in this repo.



