
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

        ////////////TESTING
        //console.log('TESTING: creating artificial delay: ');
        ////////////

        // Artifical delay:
        // i added this bcuz the api is too fast and i want to see my cool loading text functionality.
        // this pauses the code for 1500 milliseconds (1.5 seconds), so i can test my loading spinner.
        await wait(1500);


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

        // logic: return the products array so script.js can handle it
        return data.products;

    } catch (err) {
        console.error("Error fetching data:", err.message);
        // i also have to tell main script script.mjs if an error happens. will think about it when i do testing in script.mjs.
        // so, i can just throw the error again. that way so script.mjs will catch it and it will knows something went wrong and can show alert

        throw err;

    }

}


// 
// logic: i found this code on stackoverflow to create a delay.
// i need this to return a promise so i can use 'await' on it.
function wait(timeInMS) {
    return new Promise(function (resolve) {
        setTimeout(resolve, timeInMS);
    });
}


////////////TESTING
//fetchTheData("all");
////////////