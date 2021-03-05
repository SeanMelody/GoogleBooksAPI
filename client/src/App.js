import React from "react";
import "./App.css";
import Main from "./Components/Main";
import Saved from "./Components/Saved/Saved"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Google Books API</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/saved" component={Saved} />
          <Route path="/" component={Main} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>

        {/* <Search /> */}
      </BrowserRouter>
    </div>
  );
}


export default App;
