//
//  JS File
//  YOU CAN REMOVE ALL OF THIS CODE AND START FRESH
//

//
// Variables
//

// Constants
const appID = "";
const headingText = "";
const headingTextIcon = "";
const projectDueDate = "";

// Variables
let countdownDate = new Date(projectDueDate);

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function calculateDaysLeft(countdownDate) {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  console.log(countdown);

  const difference = (countdown - now) / 1000;


  // Countdown passed already
  if (difference < 1) {
    return null;
  }


  const days = Math.floor(difference / (60 * 60 * 24));

  return days;
}

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  const daysLeft = calculateDaysLeft(countdownDate);
  let headingTextCalculated = headingText;

  if (daysLeft > 1) {
    headingTextCalculated = headingTextCalculated.concat(
      " In ",
      daysLeft.toString(),
      " days "
    );
  }else if (daysLeft === 1) {
    headingTextCalculated = headingTextCalculated.concat(
      " Tomorrow"
    );
  }

  h1.textContent = headingTextCalculated.concat(headingTextIcon);
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();


const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const email = document.getElementById('email')
const nameHere = document.getElementById('nameHere')
const pronouns = document.getElementById('pronouns')

function showError(value, message) {
  const label = value.parentElement
  const small = label.querySelector('small')

  if (value.value === '') {
    small.innerText = message
  
  } else {
    small.innerText = ''
 
  }
}




function checkEmail(value) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!re.test(value.value.trim())) {
    showError(email, 'Looks like this is not an email')
  } else {
    showError(email, '')
  }
}

function onSubmit(e) {
  e.preventDefault()
  
  showError(nameHere, 'Please fill your name here')
  showError(pronouns, 'Pronouns cannot be empty')
  checkEmail(email)
}

form.addEventListener('submit', onSubmit)