// Import axios
import axios from "axios";

// set the api key to a const


// test search
// let search = "Apathy"

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



// const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${APIKEY}`
// app.get("/google-books", (req, res) => {
//     // get the search string from the req.body.search
//     //fetch the google api using the URLS + search + api key 
//     // send back the response object in the res.send
//     res.send({ msg: "success" });
// });
  //