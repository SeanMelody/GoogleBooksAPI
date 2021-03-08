// import all the Goodness
import React from 'react'
//Lets you link pages
import { Link } from "react-router-dom";
import NavStyles from "./NavStyles"

// Nav bar will display on each page, using link to switch out contents
function Nav() {
    return (
        // Style the nav, so it's inline and no link underlines
        <nav style={NavStyles.NavStyles}>
            <h1 style={NavStyles.Title}>Google Book API</h1>
            <Link to="/" style={NavStyles.linkStyles}>
                <p>Search Books</p>
            </Link>
            <Link to="/saved" style={NavStyles.linkStyles}>
                <p>Saved</p>
            </Link>

        </nav>
    )
}

export default Nav