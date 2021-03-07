// import all the Goodness
import React from 'react'
//Lets you link pages
import { Link } from "react-router-dom";

// Nav bar will display on each page, using link to switch out contents
function Nav() {
    return (
        <nav>
            <h1>Google Book API</h1>
            <Link to="/">
                <p>Search Books</p>
            </Link>
            <Link to="/saved">
                <p>Saved</p>
            </Link>
        </nav>
    )
}

export default Nav