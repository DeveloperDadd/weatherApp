//VARIABLES
let apiKey = c097438b59289f230ebfc5b099c90073;
let button = document.getElementById('button');
let zipcode;
let city;
let celsius;
let fahrenheit;
let kelvin;
let icon;
let weather; 

//Use AXIOS to get data


//EVENT LISTENERS
button.addEventListener('click', checkZipcode); //This event listener also needs to update page by GET weather using AXIOS, will need to update upon API fetch



//FUNCTIONS 
function checkZipcode() {
    let zipcode = document.getElementById("zipcode").value;
    if (zipcode.length !== 5) {
        alert('Error: please enter valid zipcode')
    } else {
        console.log('valid zip code, now GET data')
        return zipcode;
    }
};

function tempToKelvin(celsius) {
    kelvin = celsius + 273.15;
    return kelvin;
};

function tempToFahrenheit(celsius) {
    fahrenheit = (celsius + 9 / 5) + 32;
    return fahrenheit; 
}

