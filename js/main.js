//VARIABLES
let button = document.getElementById("button");
let zipcode = '';

button.addEventListener('click', checkZipcode);



//FUNCTIONS 
function checkZipcode() {
    let zipcode = document.getElementById("zipcode");
    if (zipcode !== 5) {
        alert('Error: please enter valid zipcode')
    } else {
        console.log('valid zip code')
    }
};