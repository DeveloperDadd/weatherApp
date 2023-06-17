let apiKey = 'c097438b59289f230ebfc5b099c90073';
let apiURL = 'https://api.openweathermap.org';
let apiPath = '/data/2.5/weather'

window.addEventListener('load', init);

  
function init () {
  app = document.getElementById("app");
  let headerBox = document.createElement("div");
  headerBox.setAttribute("id", "headerBox")
  app.appendChild(headerBox);
  
  let mainHeading = document.createElement("h1");
  mainHeading.textContent = "Weather App";
  headerBox.appendChild(mainHeading);
  
  userInput = document.createElement("input");
  userInput.setAttribute("id", "userInput");
  userInput.setAttribute("placeholder", "Enter a valid zipcode");
  headerBox.appendChild(userInput);
  
  let getWeatherButton = document.createElement("button");
  getWeatherButton.textContent = "Get Weather";
  getWeatherButton.setAttribute("id", "getWeatherButton");
  headerBox.appendChild(getWeatherButton);
  getWeatherButton.addEventListener('click', getWeatherData);
  
  let resultsBox = document.createElement("div");
  resultsBox.setAttribute("id", "resultsBox");
  app.appendChild(resultsBox);
  
  createBoxes();
}

let weatherDisplay = {
  boxHeadingText : ['City', 'Temperature', 'Other_Info'],
  cityResultText : '',
  temperatureClassNames : ['Kelvin', 'Celsius', 'Fahrenheit'],
  temperatureResultText : '', //return data from the function 
};


//This function creates the 3 boxes in the display box
function createBoxes() {
  for (let i = 0; i <= 2; i++) {
    let boxHeading = document.createElement("h2");
    boxHeading.textContent = weatherDisplay.boxHeadingText[i];
    boxHeading.classList.add(weatherDisplay.boxHeadingText[i]);
    resultsBox.appendChild(boxHeading);
    
    if (i === 1) {
      boxHeading.textContent = weatherDisplay.boxHeadingText[i];
      boxHeading.classList.add(weatherDisplay.boxHeadingText[i]);
      for (let j = 0; j <=2; j++) {
      let dataBox = document.createElement("p");
      dataBox.classList.add("databox");   
      dataBox.classList.add(weatherDisplay.temperatureClassNames[j]);
      boxHeading.appendChild(dataBox);
      }
    } 
  }
}

//Function to get weather data
async function getWeatherData() {
  let zipcode = userInput.value;
  console.log(userInput);
  console.log(userInput.value);
  console.log(zipcode);
  weatherData = {};
  axios
    .get (
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`
    )
  
    .then((response) => {
    let data = response.data;
    console.log(data);
    let weatherData = data;
    return weatherData;

    })

    .catch((error) => {
      console.log(error);
      alert("Error: please enter valid zipcode");
    })
  
    .finally (() => {
      console.log("Get Weather Data function complete");
    })
    
} 


function updateWeatherBoxes () {
  document.getElementByClassName('city').innerText = weatherData.name;
  document.getElementByClasName('kelvin').innerText= weatherData.main.temp;
  document.getElementByClassName('celsius').innerText = tempToCelsius();
  document.getElementByClassName('fahrenheit').innerText = tempToFahrenheit();
}

function tempToCelsius(kelvin) {
    return kelvin - 273.15;
}

function tempToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;   
}