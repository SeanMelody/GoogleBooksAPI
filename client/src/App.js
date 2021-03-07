// Import all the goodness!
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Main from "./Components/Main";
import Saved from "./Pages/Saved/Saved"
import Footer from "./Components/Footer/Footer"
import Nav from "./Components/Nav/Nav";
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
      {/* <Header /> */}
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/saved" component={Saved}>
            <Saved savedBooks={savedBooks} />
          </Route>
          <Route exact path="/" component={Main} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
