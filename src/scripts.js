// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import fetchAll from './data.js/getData';
import Traveler from './single-traveler';

console.log('This is the JavaScript entry file - your code begins here.');

window.addEventListener('load', () => {
  fetchAll().then((param) => {
    console.log(param)
  })
  
})
