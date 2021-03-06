import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Components/Main";
import Saved from "./Components/Saved/Saved"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
// import Nav from "./Components/Nav/Nav";
// import Search from "./Components/Search/Search"
// import axios from "axios"
// import { useEffect } from "react"



// let savedBooks = []
// const getBooks = () => {
//   fetch('/api/books', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // Json that response
//   })
//     .then((response) => response.json())
//     // Then get the data
//     .then((data) => {
//       // For Each loop to loop through the database and get the stock and id
//       // data.forEach(({ id, stock }) => {
//       // })
//       console.log(data)
//       savedBooks = data
//       console.log(savedBooks)
//     })
// }
// getBooks()




function App() {

  const [savedBooks, setSavedBooks] = useState([])

  // let bookList = []
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
        // For Each loop to loop through the database and get the stock and id
        // data.forEach(({ id, stock }) => {
        // })
        console.log(data)
        // bookList = data
        // console.log(bookList)
        setSavedBooks(data)
      })

  }
  // getBooks()
  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="App">
      <h1>Google Books API</h1>
      <BrowserRouter>

        <Switch>

          <Route path="/saved" component={Saved}>
            <Saved savedBooks={savedBooks} />
          </Route>
          <Route path="/" component={Main} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>

        {/* <Search /> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
