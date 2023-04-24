// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {fetchAll, fetchData, getDestination,getTraveler,getTrip} from './data.js/getData';
import Traveler from './single-traveler';

let currentTraveler;

console.log('This is the JavaScript entry file - your code begins here.');
// Selectors
const travelerDisplay = document.querySelector('.traveler-info')
const greeting = document.querySelector('.greeting')

window.addEventListener('load', () => {
  fetchAll().then((travelerData) => {
    console.log('TD',travelerData)
    currentTraveler = new Traveler(travelerData[1])
    console.log(currentTraveler)
  })
    displayTravelerData()
})

function displayTravelerData(){
  if(!currentTraveler)return
  greeting.innerText = `Hello ${currentTraveler.name}!`
  // travelerDisplay.innerHTML = <p></p>
}