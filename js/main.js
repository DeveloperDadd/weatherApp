//VARIABLES
let button = document.getElementById("button");
let zipcode;
let celsius;
let fahrenheit;

button.addEventListener('click', checkZipcode);



//FUNCTIONS 
function checkZipcode() {
    let zipcode = document.getElementById("zipcode").value;
    if (zipcode.length !== 5) {
        alert('Error: please enter valid zipcode')
    } else {
        console.log('valid zip code')
        return zipcode;
    }
};

