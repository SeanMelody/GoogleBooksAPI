import React from "react";
import "./App.css";
import Main from "./Components/Main";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1>Google Books API</h1>
      <Main />
      <Search />
    </div>
  );
}


export default App;
