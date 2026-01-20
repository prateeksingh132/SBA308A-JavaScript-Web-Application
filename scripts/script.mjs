
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
// i need to import the api data (fetchTheData function) from api.js
// i need to import display functions (makeCards) from ui.js


////////LOGIC - for main script
// create the final structure of the project: 2 more script api.mjs and ui.mjs and shop.html
// create a function which will coordinates with my api.mjs and the ui.mjs, its gonna fetch the data based on category (button click event) that i select
// create click event listeners for 3 filter buttons: All Tech, Smartphones, Laptops
//


//////////////////////////////////// SBA 308A

console.log("\n");
console.log("////////////// SBA 308A: JavaScript Web Application ////////////// ");
console.log("\n");

// imports
import { fetchTheData } from './api.mjs';
import { makeCards, showLoadingSpinner, hideLoadingSpinner, showErrorMessage, addToMyCart, updateCartCount } from './ui.mjs';

// getting the required DOM elements first. these are 3 elements (buttons): all tech, smatphones and laptops
// Goal: i am gonna select the elements which i think i am gonna use later
const btnAll = document.getElementById('btnAll');
const btnPhones = document.getElementById('btnPhones');
const btnLaptops = document.getElementById('btnLaptops');
const itemsGridArea = document.getElementById('itemsGridArea');


// LOGIC:

// step 1: create a function which will coordinates with my api.mjs and the ui.mjs, its gonna fetch the data based on category (button click event) that i select
// Goal: fetch the data (from api.mjs) and then display the data in the dom (using ui.mjs)
// i have two functions fetchTheData and makeCards that i have to use

async function loadCategoryItems(categoryName) {

    // start loading animation
    showLoadingSpinner();

    try {
        // await the data from the api module
        const dataArray = await fetchTheData(categoryName);

        // pass the data to the ui module
        makeCards(dataArray);

    } catch (error) {
        // if api fails, i wanna show an error on screen
        // i will extend this later, maybe create a function in the ui module later.
        console.log("Sorry, something went wrong. Please try again later.");

        // so here is the function i created in ui.mjs to show the error message in DOM
        showErrorMessage("Sorry, something went wrong. Please try again later.");

    } finally {
        // stop loading animation no matter what
        hideLoadingSpinner();
    }

}



///////// EVENT LISTENERS

// step 2: 3 filter buttons
// Gaol: the 3 buttons should filter the items based on categories: all tech, smartphones and laptops
// from dummyjson.com, the two category names in the url i need are: smartphones, laptops

btnAll.addEventListener('click', () => loadCategoryItems('all'));

btnPhones.addEventListener('click', () => loadCategoryItems('smartphones'));

btnLaptops.addEventListener('click', () => loadCategoryItems('laptops'));


// i also want all the items to be displayed when i click on browse button on homepage  or shop button in nav bar
// calling functions to set up page when it loads
loadCategoryItems('all');




////// FUTUREWORK: loading text logic
// DONE, added in the function


////// FUTUREWORK: add to cart logic

// step 3: 
// so, normally, to make a button work, i would just select it by id and add an event listener
// but, the issue is that the add to cart button doesnt exist when the page loads. They are created later in ui.mjs once we get the json data from api.
// so, this means that i cannot attach event listeners to them directly at the start. instead, i can attach the listener to the parent container div (itemsGridArea).
// i am relying on the concept of event bubbling here (from the lecture). when i click a button inside the dom, that click will bubbles up to the parent and that parent catches it and handles it.
// so, when a click happens, i check if the target was a button with class addToCartBtn.
// i referred two stackoverflow example where they are doing the same thing: https://stackoverflow.com/questions/50311972/how-to-save-items-to-cart-using-localstorage
// and this one: https://stackoverflow.com/questions/23554456/how-do-i-store-a-simple-cart-using-localstorage

itemsGridArea.addEventListener('click', function (event) {
    // first, i need to find out what exactly was clicked since i attached this even listener on whole div. the event.target tells me that
    // and then check if user clicked the add button
    if (event.target.classList.contains('addToCartBtn')) {
        // so, i added a new data-title attribute to the button (addToCartBtn) in ui.mjs, so that i can get the product name from this data attribute 
        const title = event.target.getAttribute('data-title');

        // now that i know what was clicked, i just pass that name to my helper function in ui.mjs, which handles the whole localStorage saving part. 
        // calling the cart function
        addToMyCart(title);
    }
});


// if i referesh the page, the cart count goes to its default 0. so i am gonna put the updatecartcount function here so that it runs immediately when the page loads.
updateCartCount();


// FUTUREWORK: i wanna create a cart page, which fetches these clicked items from localstorage and displays it