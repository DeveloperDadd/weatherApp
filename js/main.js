//VARIABLES
let apiKey = 'c097438b59289f230ebfc5b099c90073';
let button = document.getElementById('getWeatherBtn');
let zipcodeInput = document.getElementById("zipcode");
let cityDisplay = document.getElementById("cityDisplay");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let icon = document.getElementById("iconDisplay");
const apiURL = "https://api.openweathermap.org";
let apipath = "/data/2.5/weather";


//EVENT LISTENERS
button.addEventListener('click', getWeatherData); //This event listener also needs to update page by GET weather using AXIOS, will need to update upon API fetch

//FUNCTIONS 

function checkZipcode() {
  let zipcode = zipcodeInput.value;
  if (zipcode.length !== 5) {
    alert('Error: please enter valid zipcode');
  } else {
      console.log('valid zip code, now GET data')
      return zipcode;
  }
};

// Make a request from the weather API using base url, zipcode, and apikey

function getWeatherData() {
  let weatherData = null
  let zipcode = checkZipcode();
  if (zipcode) {
    let options = {
      baseURL: apiURL,
      params: {
      zip: zipcode,
      appid: apiKey
    }
  };
  axios.get(apipath, options)
    .then(response => {
      let data = response.data;
      console.log(data);
      weatherData = data;
      return weatherData;
    })
    .catch(error => {
      //returns an error if there is one
      alert('Error: invalid zipcode, could not fetch request. Please enter a valid zipcode');
      console.log("Error in the API call, need to debug");
    })
    .finally(() => {
      console.log(weatherData);
    });
  }
};

//CONVERSION FUNCTIONS
function tempToCelsius(kelvin) {
    return kelvin - 273.15;
};

function tempToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;   
};