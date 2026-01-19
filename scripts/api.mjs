
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

}