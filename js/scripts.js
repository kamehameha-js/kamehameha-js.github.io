/**
 * scripts.js
 * A learn to debug JavaScript lesson
 * Built by Patrick Karjala for Kamehameha School, June 2017
 * 
 * This code contains errors on purpose, which we can fix and then resolve!
 */

// Welcome the user to the page if they look at the console.
console.log( "Welcome to the Kamehameha Schools JavaScript Learning page!" );

// Set global variables
var default_name = "Bob";

// Gather our Elements
var submit_button = document.getElementById( "nameButton" );
var user_name = document.getElementById( "username" );
var set_user_name = document.getElementById( "setName" );


/**
 * setTextValue( value, location );
 * Overwrites the text value at a location with the provided value.
 * 
 * @param value - The text value supplied.
 * @param location - The HTML element to have its text value changed.
 * 
 * @returns - No value.
 */
function setTextValue( value, location ) {
  location.textContent = value;
  return;
}

// Add an event listener to the submit button.
submit_button.addEventListener( "click", function( event ) {

  console.log( "The Submit Name button was clicked!" );
  console.log( "The 'username' value is: " + user_name.value );

  // If our user_name has a value set...
  if( user_name.value == '' ) {
    // ...then put it at our set_user_name location.
    console.log( "The 'username' is NOT blank!" );
    setTextValue( user_name.value, set_user_name );
  } else {
    // Otherwise, use our default name.
    console.log( "The 'username' IS blank!" );
    setTextValue( set_user_name, default_name );
  }
});