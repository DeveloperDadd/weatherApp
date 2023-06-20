let apiKey = 'c097438b59289f230ebfc5b099c90073';
let apiURL = 'https://api.openweathermap.org';
let apiPath = '/data/2.5/weather';

window.addEventListener('load', init);

  
function init () {
  const app = document.getElementById("app");
  app.classList.add("text-center")
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
  getWeatherButton.classList.add('btn');
  getWeatherButton.classList.add('btn-primary');
  getWeatherButton.textContent = "Get Weather";
  getWeatherButton.setAttribute("id", "getWeatherButton");
  headerBox.appendChild(getWeatherButton);
  getWeatherButton.addEventListener('click', updateUI);
  
  let resultsBox = document.createElement("div");
  resultsBox.setAttribute("id", "resultsBox");
  app.appendChild(resultsBox);
  
  createBoxes();

  let cityHeaderBox = document.getElementsByClassName("City")[0];

  let cityNameBox = document.createElement("p");
  cityNameBox.setAttribute("id", "cityNameBox");
  cityHeaderBox.appendChild(cityNameBox);

  let otherInfoHeader = document.getElementsByClassName("Other_Info")[0];
  let iconBox = document.createElement("img");
  iconBox.setAttribute("id", "icon-image");
  otherInfoHeader.appendChild(iconBox);
  iconBox.setAttribute("alt", "An icon image related to the temperature outside")

  let conditionBox = document.createElement("p");
  conditionBox.setAttribute("id", "condition");
  let conditionHeader = document.getElementsByClassName('Condition')[0];
  conditionHeader.appendChild(conditionBox);

}

let weatherDisplay = {
  boxHeadingText : ['City', 'Temperature', 'Condition', 'Other_Info'],
  cityResultText : '',
  temperatureClassNames : ['Kelvin', 'Celsius', 'Fahrenheit'],
  temperatureResultText : '', //return data from the function 
};


//This function creates the 3 boxes in the display box
function createBoxes() {
  for (let i = 0; i < 4; i++) {
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

function updateUI() {
  getWeatherData();
}

//Function to get weather data
let weatherData = {};
async function getWeatherData() {
  let options = {
    method: 'get',
    baseURL: apiURL,
    params: {
      zip: userInput.value,
      appid: apiKey,
    }
  };
  try {
    await axios
      .get(apiPath, options)
      .then(function (response) {
        return response.data;
      })
      .then(function (data) {
        weatherData = data;
        updateWeatherBoxes();
      })
  } catch(error) {
     alert("Error: please enter a valid zipcode");
  }
  
}

function updateWeatherBoxes () {
  document.getElementById("cityNameBox").innerText = weatherData.name;
  document.getElementsByClassName('Kelvin')[0].innerText= weatherData.main.temp +" Kelvin";
  document.getElementsByClassName('Celsius')[0].innerText = Math.round(tempToCelsius(weatherData.main.temp)) + " Celsius";
  document.getElementsByClassName('Fahrenheit')[0].innerText = Math.round(tempToFahrenheit(tempToCelsius(weatherData.main.temp))) + " Fahrenheit";
  document.getElementById('condition').innerText = weatherData.weather[0].description;
  let icon = weatherData.weather[0].icon;
  document.getElementById("icon-image").setAttribute("src", `https://openweathermap.org/img/wn/${icon}.png`)
}

function tempToCelsius(kelvin) {
    return kelvin - 273.15;
}

function tempToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;   
}