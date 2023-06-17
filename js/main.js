let app = document.GetElementById('app');
let apiKey = 'c097438b59289f230ebfc5b099c90073';
let apiURL = 'https://api.openweathermap.org';
let apiPath = '/data/2.5/weather'
let getWeatherButton = document.getElementById("getWeatherButton");
let userInput;

window.addEventListener('load', init);
getWeatherButton.addEventListener('click', getWeatherData);
  
function init () {
  app = document.getElementById("app");
  let headerBox = document.createElement("div");
  headerBox.setAttribute("id", "headerBox")
  app.appendChild(headerBox);
  
  let mainHeading = document.createElement("h1");
  mainHeading.textContent = "Weather App";
  headerBox.appendChild(mainHeading);
  
  userInput = document.createElement("input");
  userInput.setAttribute("placeholder", "Enter a valid zipcode");
  headerBox.appendChild(userInput);
  
  getWeatherButton = document.createElement("button");
  getWeatherButton.textContent = "Get Weather";
  getWeatherButton.setAttribute("id", "getWeatherButton");
  headerBox.appendChild(getWeatherButton);
  
  let resultsBox = document.createElement("div");
  resultsBox.setAttribute("id", "resultsBox");
  app.appendChild(resultsBox);
  
  createBoxes();
}

let weatherDisplay = {
  boxHeadingText : ['City', 'Temperature', 'Other Info'],
  cityResultText : '',
  temperatureClassNames : ['Kelvin', 'Celsius', 'Fahrenheit'],
  temperatureResultText : '',
  otherInfoIcon: ''
};


//This function creates the 3 boxes in the display box
function createBoxes() {

  for (let i = 0; i <= 2; i++) {
    let boxHeading = document.createElement("h2");
    boxHeading.textContent = weatherDisplay.boxHeadingText[i];
    boxHeading.classList.add(weatherDisplay.boxHeadingText[i]); //When i comment this out it returns the other info heading correctly? 
    app.appendChild(boxHeading);
    
    if (i === 1) {
      for (let j = 0; j <=2; j++) {
      boxHeading.classList.add(weatherDisplay.boxHeadingText[i])
      let dataBox = document.createElement("p");
      dataBox.classList.add("databox");   dataBox.classList.add(weatherDisplay.temperatureClassNames[j]);
      boxHeading.appendChild(dataBox);
      }
    } 
  }
}

//Function to get weather data


function getWeatherData() {
  let userZipcode = document.getElementById("userInput").value; 
  axios
    .get (
      `http://api.openweathermap.org/data/2.5/weather?zip=${userZipcode}&appid=${apiKey}`
    )
  
    .then((response) => {
    let data = response.data;
    console.log(data);
  });
  
    catch((error) => {
      console.log(error);
      alert("Error: please enter valid zipcode");
    });
  
    .finally(() => {
      console.log("Get Weather Data function complete");
    });
    
} 


function updateWeatherBoxes () {
  document.getElementByClassName('city').innerText = data.name;
  document.getElementByClasName('kelvin').innerText= data.main.temp;
  document.getElementByClassName('celsius').innerText = tempToCelsius();
  document.getElementByClassName('fahrenheit').innerText = tempToFahrenheit();
}

function tempToCelsius(kelvin) {
    return kelvin - 273.15;
}

function tempToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;   
}