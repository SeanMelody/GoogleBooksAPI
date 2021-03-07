// import all the Goodness
import React from 'react'
//Lets you link pages
import { Link } from "react-router-dom";
import NavStyles from "./NavStyles"

// Nav bar will display on each page, using link to switch out contents
function Nav() {
    return (
        <nav style={NavStyles.NavStyles}>
            <h1 style={NavStyles.Title}>Google Book API</h1>
            <Link to="/">
                <p style={NavStyles.linkStyles}>Search Books</p>
            </Link>
            <Link to="/saved">
                <p style={NavStyles.linkStyles}>Saved</p>
            </Link>

        </nav>
    )
}

export default Nav