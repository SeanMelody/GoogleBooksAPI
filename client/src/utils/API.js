// Import axios
import axios from "axios";

// set the api key to a const
const APIKEY = "key"

// test search
// let search = "Apathy"

// set the base requestURL
const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=harry+potter&key="

// export function for the axios API calss
export default {
    // Set it to a function
    APISearch: function () {
        // console.log(requestUrl + search + APIKEY)
        return axios.get(requestUrl + APIKEY);
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