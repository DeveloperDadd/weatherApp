# Weather App #

## ABOUT : ##
- Simple Weather app that is desktop and mobile responsive using Bootstrap 5 
  <br>
- User will input a 5-digit zipcode into a input section and click a button to display current weather
  <br>
- Data from openweathermap.org will be fetched using Axios GET request from their API and displayed to the user
  <br>
- App will also give a user error if a 5 digit zip code is invalid or does not work with the weather API "Error : Invalid Zip Code"
  <br>
- Object properties that will be displayed are city, condition (rainy, cloudy), temperature in Kelvin, Celsius, and Fahrenheit, and a unique icon corresponding with the temperature.
  <br>
- User can keep entering new zip codes as they wish for different cities.

## INIT : Create variables for the program
1. **newZipcode:**
      * Important key to obtain correct information for end user
      * User will provide the zipcode they wish to search for
      * Store this input inside of the variable to search for in the API
        * Properties:
            - Must be five digits
            - Will return an error if there is a letter or less or more than 5 numbers.
2. **apiKey:**
      * Key provided by openweathermap.org upon creating an account
      * Will be needed to be able to use Axios commands to fetch data from the server
      * Cannot have a fully functional app without it
         * Properties: 
            - Unique to every developer
            - Must be used to access the API correctly
3. **button:**
      * Button that user will click to activate an event listener to retrieve information from the API
      * Click will also trigger a function to make sure the user provided zip code is correct format and acceptable
         * Properties:
            - Click functionality - event listener waiting for click
            - Necessary step for app to work correctly
4. **weather:**
      * Will be stored as an object
      * The property values will be returned from the API upon user activation
      * Displays only after user correctly inputs a zipcode and clicks 'button'
         * Properties: 
            - City 
            - Temperature in Kelvin
            - Temperature in Celsius
            - Temperature in Fahrenheit
            - Current condition (rainy, windy, etc.)
            - Icon based on temperature/condition
5. **app:** maybe ?? <--- not sure how to make this work
   <br>
      * Store the app in whole as an object
      * State will obviously work inside the object 
          * Properties: 
              - Header to display 'Weather App' input box for zip code and button to fetch data
              - City property with header and fetched data of city name as value
              - Temperature property with temperature header and the 3 different temperatures as value
              - Condition property with current condition as value
              - Other info property to display fetched image as value
6. **currentLocation:** (for stretch goal)
      * Use a geo tracking API to obtain user's current location and store in this variable
      * Use a fetch AXIOS command to obtain current weather and update the weather object based upon variable's value 
          * Properties: 
              - Is user's current location
              - App's intial display will display the weather based on their current location
7. **fahrenheit:**
      * Temperature stored in fahrenheit
      * Either received from the weather API or converted from Celsius using a function (not sure haven't looked in depth at API yet)
8. **celsius:**
      * Temperature stored in celsius
      * Either received from the weather API or converted from Celsius using a function (not sure haven't looked in depth at API yet)
9. **kelvin:**
      * Temperature stored in kelvin
      * Either received from the weather API or converted from Celsius using a function (not sure haven't looked in depth at API yet)  

## FUNCTIONALITY :               
              
**PREPARATION:**

*STRETCH GOAL*

 * FUNCTION onLoad (eventListener)
    1. FETCH user current location (zipcode)
    2. INPUT user location in a new variable called currentLocation
    3. FETCH weather using apiKey and currentLocation
    4. DISPLAY weather in current location to end user on initial load in
    5. END
 
 * FUNCTION checkZip()
    1. INPUT user location in variable newZipcode
    2. Convert newZipcode to number value
    3. IF newZipcode is more or less than 5 numbers, alert user Error : Invalid Zip Code
    4. IF newZipcode contains a letter 'a - z', alert user Error : Invalid zip code
    5. END
 
 * FUNCTION getWeather()
    1. Run checkZip() function first to verify zipcode is correct
    2. INPUT user location in variable newZipcode
    3. FETCH weather data using apiKey and newZipcode
    4. APPEND weather variable object property values to equal the values returned based on the AXIOS get commands (below is very simplified language to understand for pseudocode purposes)
        - city : GET city value based on newZipcode
        - Temperature in Kelvin : convert to Kelvin using predefined function (do function inside of object or outside?)
        - Temperature in Celsius : GET Celsius value based on newZipcode value
        - Temperature in Fahrenheit : GET Fahrenheit value based on newZipcode value or convert from Celsius using a function (do function inside of object or outside?)
        - Current condition (rainy, windy, etc.) : GET current weather condition based on value from newZipcode
        - Icon based on temperature/condition : use a series of IF STATEMENTs to check for certain values, if they are true return a specific icon 
    5. END
  
 * FUNCTION tempToFahrenheit()
   1. Assuming weather API provides Celsius temperature only
   2. Take variable 'celsius' MULT 9 DIV 5 ADD 32
   3. CONCAT + "Fahrenheit" or see if there is way to get degrees symbol to do "F"

 * FUNCTION tempToKelvin()
   1. Take variable 'Celius' ADD 273.15 to it
   2. CONCAT "Kelvin" to it
   3. END

 * FUNCTION updatePage()
    1. Invoked only on USER 'CLICK' 
    2. Inside the function INVOKE getWeather() function
    3. Return weather or change the display of the app to match the newZipcode weather values
        - Example: getDocumentById('city').innerText = weather.city;
    5. END
 






