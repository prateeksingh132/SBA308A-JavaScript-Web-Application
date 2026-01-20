# SBA 308A: JavaScript Web Application

## Project: GadgetShack (Dynamic Version)

**Brief Description:**

I decided to continue with my "GadgetShack" theme (from my previous SBA 307 and SBA 316 projects). My plan is to have it as my capstone project. GadgetShack is a tech e-commerce website.
In my previous SBA projects, the HTML was hardcoded. In this project, I wanted to make the website **dynamic** by pulling real item data from an external API (`dummyjson.com`).

my goal was to create a "Shop" page where users can browse products, filter them by category (Smartphones vs Laptops), and add items to a shopping cart. I also wanted to ensure the user experience was good by showing a loading animation while data is being fetched. I kept the user perspective in mind, while styling both the home page and shop page (tried to keep the styling simple, smooth and elegant).


# Technology Used
* HTML
* CSS
* JAVASCRIPT (Modules, Fetch API, Async/Await, DOM, LocalStorage)


# Features

**1. API Communication (Using fetch)**

i used the `fetch()` API in `api.mjs` to get product data from `https://dummyjson.com/products`. i used `async/await` syntax to handle the promises and `try/catch` blocks to handle any errors.

**2. User Interaction**

i created a **Filtering System** in `shop.html`. users can click "All Items", "Smartphones", or "Laptops". Clicking these buttons triggers a new fetch request to get specific categories items from the API.

**3. Add To Cart Functionality**

i implemented a **Shopping Cart** using `localStorage`. When a user clicks "Add to Cart," i read the existing data from the local storage, change the array (push new item), and save it back. this allows the data to persist even if i refresh the page.

**4. Modules**

i organized my whole scripts into 3 files as required:
* `script.mjs`: the main script (handles clicks and logic).
* `api.mjs`: handles all the api requests.
* `ui.mjs`: handles creating the HTML cards and showing/hiding the loading text.

**5. Engaging User Experience**

* **Loading State Message and Animation:** i added an artificial delay (1.5 seconds) using `setTimeout` (in `api.mjs`) so that the user can actually see the "Fetching latest products..." pulsing animation.
* **Other Animations:** i added mutliple animations in my project. i have animations on all the buttons, the item cards etc. The buttons change color on hover, and the item cards have a hover lift effect (and shadow effect) (similar to my SBA 307 style).


# Testing

I have created (and used during code creation) test points (log statement) at multiple places in the code, I have not removed them. They are commented at the time of submission and can be uncommented for future debugging and code check. These code checks looks something like:


////////////TESTING

//console.log('TESTING: assignment: ', assignment);

////////////



# Reflection

**What could you have done differently during the planning stages of your project to make the execution easier?**

(1) I initially forgot that when using modules (`.mjs`), I need to add `type="module"` in my HTML script tag. i wasted some time debugging why my imports were not working and thought there was some issue with my code.


**Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?**

(1) Yes. the "Add to Cart" logic. it was tricky because of **Event Delegation**. Since my item cards are created after the page loads (by my script ui.mjs), the "Add to Cart" buttons don't exist when the script first runs. so, i couldn't just add a simple `.addEventListener` to them. 

i had to figure out how to attach the listener to the *parent* container (`itemsGridArea`) and check `event.target` to see if the button was clicked. i found some examples on stackoverflow that helped me understand this concept. In future projects, i will verify if elements exist in HTML or are dynamic before trying to select them.

**What would you add to,or change about your application if given more time?**

(1) **Cart Page:** right now, the cart just updates a number in the navbar (`Cart (3)`). i would like to create a separate `cart.html` page that reads the `localStorage` and displays the actual list of items so the user can see what they added.
(2) **Better Error Handling:** Currently, i just show a red text message in the DOM if the API data fetching fails. i would like to make a nicer "Error Card" or a popup modal.
(3) **Register page from SBA 316:** i would like to integrate the register page i created in my SBA 316 project in this project.


**Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again**

(1)  Whenever creating elements that are created after page loads (like from an API), always attach the click listener to the parent div. that way i can use the event delegation.
(2) Always use `JSON.stringify()` when saving and `JSON.parse()` when retrieving data from local storage, else you get `[object Object]`.


# References

I referred to some examples on stackoverflow and documentation to help me with the logic. Here are the links:

https://stackoverflow.com/questions/23554456/how-do-i-store-a-simple-cart-using-localstorage

https://stackoverflow.com/questions/50311972/how-to-save-items-to-cart-using-localstorage

https://stackoverflow.com/questions/31789537/how-do-i-dictate-the-size-of-the-animate-pulse-feature-using-css







