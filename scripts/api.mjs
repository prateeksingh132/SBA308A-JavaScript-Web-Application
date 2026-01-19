
// Goal:
// this module is responsible for fetching data from the dummyjson.com API.
// it exports the fetch function so script.mjs can use it.
// it should handle the network request part, not the UI part.


//////// WHAT I KNOW:
// the api url is 'https://dummyjson.com/products'.
// i need to export this function to use it in script.mjs.


const baseUrl = 'https://dummyjson.com/products';

////////LOGIC

// step 1: create a function for fetching the data from api
// i am exporting this function so other files can use it.
// it takes a category string, fetches the data, and RETURNS it.
export async function fetchTheData(categoryName) {

    // step 2: URL construction
    // logic: if category is 'all', i use base url. base url has all the json data, it includes all tech products along with other products (non-tech).
    // if its something else, i m gonna modify the url.
    let finalUrl = baseUrl;
    if (categoryName && categoryName !== 'all') {
        finalUrl = `${baseUrl}/category/${categoryName}`;
    }

    // step 3: main logic here, put your code isnide the try/catch block
    try {

        ////////////TESTING
        //console.log('TESTING: finalUrl: ', finalUrl);
        ////////////

        console.log(`Fetching data from: ${finalUrl}`);

        // have to use await here as well as in data, remember fetch can take time to have to await it. code pauses here until data comes back.
        const response = await fetch(finalUrl);


        ////////////TESTING
        //console.log('TESTING: response.ok: ', response.ok);
        ////////////

        // validation is key here. if response is not 200 ok, i m gonna throw error manually.
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        // convert response to json (use await here too)
        const data = await response.json();

        ////////////TESTING
        //console.log('TESTING: data: ', data);
        ////////////

        // LOGIC CHECK: 
        // the api returns an object, and the actual array is inside a property called 'products'.
        // so i need to access data.products, not just data.


        ////////////TESTING
        //console.log('TESTING: data.products: ', data.products);
        ////////////

        // logic: return the products array so main.js can handle it
        return data.products;

    } catch (err) {
        console.error("Error fetching data:", err.message);
    }

}


////////////TESTING
//fetchTheData("all");
////////////