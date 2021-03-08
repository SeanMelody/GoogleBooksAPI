// import all the Goodness
import React from 'react'
import FooterStyles from "./FooterStyles"

// Footer Component will display on every page
const Footer = () => {
    return (
        <div className="footer sticky-footer"
            style={FooterStyles.Footer}>
            <hr></hr>
            {/* copyright and love 2021 */}
            <h6>&#169; and &#9829; Sean Melody 2021</h6>
        </div>
    )
}

export default Footer