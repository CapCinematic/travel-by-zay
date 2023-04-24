// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {fetchAll, fetchData} from './data.js/getData';
import Traveler from './single-traveler';
import Trip from './trip';
import Destination from './destination';

let currentTraveler;

console.log('This is the JavaScript entry file - your code begins here.');
// Selectors
const travelerDisplay = document.querySelector('.traveler-info')
const greeting = document.querySelector('.greeting')

window.addEventListener('load', getData)

function getData(){
  fetchAll.then((travelerData) => {
    travelerData[0].travelers.map((traveler) => new Traveler(traveler))
    console.log(travelerData[3])
    travelerData[2].trips.map((trip) => new Trip(trip))
    travelerData[3].destinations.map((destination) => new Destination(destination))
    currentTraveler = new Traveler(travelerData[1])
  })
}
