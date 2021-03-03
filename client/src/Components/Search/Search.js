// Import React
import React from "react";

// Declare a function for the search bar and bring in props
const Search = (props) => {


    //Return the search form!
    return (
        <form>
            <div className="row form-group">
                <div className="col-md-12 mx-auto">
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        placeholder="Search For Books"
                        className="col-md-6 mx-auto form-control text-center border border-dark"
                        id="search"
                    />
                </div>
            </div>
        </form>
    )

}

// Export to use as the Search Component
export default Search