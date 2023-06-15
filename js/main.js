//VARIABLES
let apiKey = 'c097438b59289f230ebfc5b099c90073';
let button = document.getElementById('button');
let zipcode;
let cityDisplay = document.getElementById("cityDisplay");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let icon = document.getElementById("iconDisplay");
const apiURL = "https://api.openweathermap.org";
let apipath = "/data/2.5/weather";

//EVENT LISTENERS
button.addEventListener('click', checkZipcode); //This event listener also needs to update page by GET weather using AXIOS, will need to update upon API fetch



//FUNCTIONS 
function checkZipcode() {
    let zipcode = document.getElementById("zipcode").value;
    if (zipcode.length !== 5) {
        alert('Error: please enter valid zipcode');
    } else {
        console.log('valid zip code, now GET data')
        return zipcode;
    }
};

//Use AXIOS to get data
import axios from 'axios';
const axios = require('axios'.default);

// Make a request from the weather API using base url, zipcode, and apikey
function getWeatherData() {
  let weatherData = {};

  try {
    let option = {
      baseURL: apiURL,
      params: {
        zip: zipcode;
        appid: apiKey
      }
    };
    weatherData = await axios.get(apipath, options)
  }

  catch (error) {
    //returns an error if there is one
    console.log("Error in the API call, need to debug");
  };
  return weatherData;
}

//CONVERSION FUNCTIONS
function tempToCelsius(kelvin) {
    celsius = weatherData.temperature - 273.15;
    return kelvin;
};

function tempToFahrenheit(celsius) {
    fahrenheit = (celsius + 9 / 5) + 32;
    return fahrenheit; 
}

