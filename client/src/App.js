// Import all the goodness!
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved/Saved"
import Footer from "./Components/Footer/Footer"
import Nav from "./Components/Nav/Nav";


function App() {
  // Set the state to saved books from the database
  const [savedBooks, setSavedBooks] = useState([])

  // Fetch request to get the books from the database
  const getBooks = () => {
    fetch('/api/books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Json that response
    })
      .then((response) => response.json())
      // Then get the data
      .then((data) => {
        // Console log the data 
        // console.log(data)

        // Call the set saved books function
        setSavedBooks(data)
      })

  }
  // use Effect to call the get books function
  useEffect(() => {
    getBooks()
    // eslint-disable-line no-alert
  }, [])



  // Return it all!
  return (
    <div className="App">
      {/* BrowserRouter to switch between pages */}
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/saved" render={(props) => (
            <Saved savedBooks={savedBooks} getBooks={getBooks} />

          )} />

          {/* </Route> */}
          <Route exact path="/" component={Search} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
