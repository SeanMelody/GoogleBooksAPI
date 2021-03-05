// Import axios
import axios from "axios";

// set the api key to a const


// set the base requestURL
const requestUrl = "https://www.googleapis.com/books/v1/volumes?q="

// export function for the axios API call
export default {
    // Set it to a function
    APISearch: function (query) {
        // let search = "Apathy"
        console.log(requestUrl + query + APIKEY)
        return axios.get(requestUrl + query + APIKEY);
    }
};
