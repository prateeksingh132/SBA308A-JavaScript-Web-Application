
// Goal:
// this module will handles all the UI stuff.
// should create HTML cards dynamically based on data.
// should show/hide loading messages.
// it should also manage the cart UI, navCartCount, (refer that stackoverflow example, using localstorage.get())
// also add a loading text in the dom, which will show loading or erros message if any

///////// things to keep in mind:
// start with conneting script with page, get elements first using querySelector or getElementById.
// use DOM methods (createElement, appendChild)
// clear container before adding new items.
// use localStorage for the cart.

//////// WHAT I KNOW:
// i need to select the container div first.
// i will need to loop through the products list.


// getting the required DOM elements first
// Goal: ia m gonna select the elements which i think i am gonna use later
const itemsGridArea = document.getElementById('itemsGridArea');
const loadingText = document.getElementById('loadingText');
const navCartCount = document.getElementById('navCartCount');


////////LOGIC

// step 1: Display Function
// this function will create the HTML cards on DOM.
// the idea is that scrip.mjs can call it after it gets data from api.js.
// so, i will have to export it as well

export function makeCards(productsArray) {

    // productsArray is my item list, from api.

    // clear container first bcuz otherwise new items will stack on old ones
    if (itemsGridArea) itemsGridArea.innerHTML = '';

    // i am using a standard for loop to go through the item list.
    for (let i = 0; i < productsArray.length; i++) {
        const item = productsArray[i];

        // create the element
        const box = document.createElement('div');
        box.classList.add('itemBox'); // adding css class
        // FUTUREWORK: add styling for itemBox

        // create the inner content
        // the json data from api contains a thumbnail property, that i can use in the item box

        box.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" class="itemImage">
            <div class="itemInfo">
                <h3>${item.title}</h3>
                <p class="itemPrice">$${item.price}</p>
                <p>${item.description.substring(0, 50)}...</p> 
                <button class="addToCartBtn">Add to Cart</button>
            </div>
        `;
        // the description properties in dummyjson.com api for some item is too big
        // FUTUREWORK: add styling for itemImage, itemInfo, itemPrice, addToCartBtn

        // append to the container
        if (itemsGridArea) itemsGridArea.appendChild(box);
    }
}




////////////TESTING
// i am gonna test my function with some sample data.
// chnage the script in shop.html to ui.mjs
// Note: i found out that i have to add type=module in the script tag, since i am using .mjs for my scripts.
// result: i got the data in my dom, but i dont see the thumbnail. not sure why. 
// FUTUREWORK: figure out the thumbnail issue

// const sampleProducts = [
//     {
//         id: 1,
//         title: "test1",
//         price: 999,
//         description: "sdsdsd.",
//         thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//         // this is the real image url from dummyjson.com
//     },
//     {
//         id: 2,
//         title: "test2",
//         price: 1999,
//         description: "sgsfsdf.",
//         thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.jpg"
//     }
// ];


// makeCards(sampleProducts);


////////////




////// FUTUREWORK: loading text logic
// step 2: i am gonna create some helper functions for showing Loading/Errors text message on DOM.
// this is adding to the user interaction
// LOGIC: simple functions to change display property

export function showLoadingSpinner() {
    loadingText.style.display = 'block';
}

export function hideLoadingSpinner() {
    loadingText.style.display = 'none';
}

export function showErrorMessage(message) {

    itemsGridArea.innerHTML = `<p style="color:red; text-align:center;">${message}</p>`;
}


////// FUTUREWORK: cart logic