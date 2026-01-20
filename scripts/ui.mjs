
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
    itemsGridArea.innerHTML = '';

    // i am using a standard for loop to go through the item list.
    for (let i = 0; i < productsArray.length; i++) {
        const item = productsArray[i];

        // create the element
        const box = document.createElement('div');
        box.classList.add('itemBox'); // adding css class
        // FUTUREWORK: add styling for itemBox

        // create the inner content
        // the json data from api contains a thumbnail property, that i can use in the item box
        // Note: i added a data-title attribute to the button for add to cart logic.
        // this helps me identify which product was clicked later in script.mjs.

        box.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" class="itemImage">
            <div class="itemInfo">
                <h3>${item.title}</h3>
                <p class="itemPrice">$${item.price}</p>
                <p>${item.description.substring(0, 50)}...</p> 
                <button class="addToCartBtn" data-title="${item.title}">Add to Cart</button>
            </div>
        `;
        // the description properties in dummyjson.com api for some item is too big
        // FUTUREWORK: add styling for itemImage, itemInfo, itemPrice, addToCartBtn

        // append to the container
        itemsGridArea.appendChild(box);
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


// step 3: save items to cart using localStorage
// Goal: basically, i am trying to simulate a real shopping cart. The problem is, normally in javascript, if i create an array and add items to it, everything disappears the moment i refresh the page.
// So, I needed a way to keep the cart data even if I refresh the page. 
// i am using localStorage which is kind of like a small database that lives in the browser. it stays there even if i close the tab or refresh the page.
// so, i have to update the localStorage and the UI. 
// I referred two stackoverflow example where they are doing the same thing: https://stackoverflow.com/questions/50311972/how-to-save-items-to-cart-using-localstorage
// and this one: https://stackoverflow.com/questions/23554456/how-do-i-store-a-simple-cart-using-localstorage
// also, check this website later on, it has more details on how to use local storage and what else can i do with it for future expansion: https://www.taniarascia.com/how-to-use-local-storage-with-javascript/


export function addToMyCart(itemName) {
    // get existing cart from storage
    // so it seems that localStorage only stores strings, this is tricky bcuz when i get the data out, it comes out as a long string like ['asad', 'adsd']
    // i have to use json.parse to turn it back into an array so i can use it..
    // also, if gadgetShackCart doesn't exist yet, it returns null, so i use || [] to start with an empty array.
    let myCart = JSON.parse(localStorage.getItem('gadgetShackCart')) || [];


    ////////////TESTING
    //console.log('TESTING: myCart: ', myCart);
    ////////////


    // add the new product in my mycart array
    myCart.push(itemName);

    ////////////TESTING
    //console.log('TESTING: myCart: ', myCart);
    ////////////

    // save back to storage
    // now, i checked that saving it back to loacl storage as array, it saved somethign weird like [object Object]
    // so, i have to use json.stringify to convert it back to string and then save
    localStorage.setItem('gadgetShackCart', JSON.stringify(myCart));


    ////////////TESTING
    //console.log('TESTING: localStorage.getItem('gadgetShackCart'): ', localStorage.getItem('gadgetShackCart'));
    ////////////


    // update the cart count in navbar immediately so i can see the change
    updateCartCount();

    // i am using BOM alert here to confirm to user
    window.alert(`${itemName} added to cart!`);
}

// step 4: create a helper function that will update the cart count in DOM (navbar)
export function updateCartCount() {
    // so, i need to read the array length to show how many items are in cart
    let myCart = JSON.parse(localStorage.getItem('gadgetShackCart')) || [];

    ////////////TESTING
    //console.log('TESTING: myCart: ', myCart);
    ////////////

    navCartCount.textContent = `Cart (${myCart.length})`;

}