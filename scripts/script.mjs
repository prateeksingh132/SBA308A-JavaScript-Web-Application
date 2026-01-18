
///// Objectives from assignment doc
// Use asynchronous JavaScript tools to build a responsive web application.
// Demonstrate understanding of the JavaScript event loop.
// Generate asynchronous code using Promises and async/await syntax.
// Use fetch and/or Axios to interact with an external web API.
// Organize files using modules and imports.



/////////GOAL
// i have to use all the concepts in Async Javascript in this SBA.
// my goal is to create a home page (), "Shop" page for GadgetShack that pulls real products from an API. i am gonna continue preparing my full stack ecommerce website (capstone project).
// i did a google search for some fake store apis, found https://dummyjson.com/.
// i want my pages to be dynamic. i wanna to show "Loading..." when data is coming, and show error if it fails.
// since, i am using this sba for my capstone prep, i have already created the registration page in my SBA 316, in this sba, i am gonna create a homepage and a catalog page calles Shop which will pull the data from the api.
// i also want to save items to cart using localStorage. will have to figure it out how to do it later.
// i am gonna use fetch.

// script.mjs
// GOAL: this is the main (entry point) of the application.
// GOAL: it imports functions from api.js and ui.js and connects them.
// GOAL: it handles all the user interactions (clicks).

// api.mjs:
// this module is responsible for fetching data from the dummyjson.com API.
// it exports the fetch function so script.mjs can use it.
// it should handle the network request part, not the UI part.

// ui.mjs:
// this module will handles all the visual stuff.
// should create HTML cards dynamically based on data.
// should show/hide loading messages.
// it should also manage the cart UI. (i have an idea how to do it, saw an example on stackoverflow, they used localStorage.getitem(). refer that) 


///////// Things to keep in mind (requirement list):
// create an external json/api request. the api url https://dummyjson.com/products has data in JSON format.
// create a function to add the data to the DOM.
// use async/await for data fetching.
// implement error handling (try/catch).
// use at least 3 module files (scripts). figure out how to divide the script work in 3 modules.
// BOM: use window object (alert or something).



//// Remember (from dylan/lecture):
// since i am gonna use fetch, remember it returns a promise, so i have to await it
// don't forget to parse the JSON with .json(), else you wont see the data (remember that example we did in the class)
// dont forget to do try/catch blocks for async code as well



//////// WHAT I KNOW:
// the api url is 'https://dummyjson.com/products'
// i need to import getProductsData from api.js
// i need to import display functions from ui.js


////////LOGIC - step by step
// step 1: create the final structure of the project: 2 more script api.mjs and ui.mjs and shop.html








//////////////////////////////////// SBA 308A

console.log("\n");
console.log("////////////// SBA 308A: JavaScript Web Application ////////////// ");
console.log("\n");

