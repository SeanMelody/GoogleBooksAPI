// Import all the necessary goodness!
import React, { Component } from 'react'
import API from "../utils/API"
import Search from "./Search/Search"
import { Link } from "react-router-dom";


// Export default here instead of below!
export default class Main extends Component {

    // Set state for the API results, and the search form!
    state = {
        result: [],
        search: ""
    }

    // Component did mount to get the API request from Utils / API for Harry Potter
    componentDidMount() {
        this.searchBooks("Harry+Potter");
    }


    // Search Books function for using the API to search for books
    searchBooks = query => {
        API.APISearch(query)
            .then(res => {
                // Set the results to state
                this.setState({ result: res.data.items })
                //console.log it so I know what is retunred
                console.log(res.data.items)
            })
            // Gotta catch them errors!
            .catch(err => console.log(err));
    };

    // Handle input change to get the data from the search bar and make it render
    handleInputChange = event => {
        // Set value and name to state
        const value = event.target.value;
        const name = event.target.name;
        // Set the state
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the API for the value of `this.state.search`
    handleFormSubmit = event => {
        // Gotta prevent the default!
        event.preventDefault();
        // call the searchBooks function!
        this.searchBooks(this.state.search);
        // Console log what is searched
        console.log(this.state.search)
    };

    // Render all the data using React!
    render() {
        //Return it all
        return (
            <div>
                {/* Search form so user can search books */}
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />

                {/* Table for displaying the searched books! */}
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        {/* Talbe descriptions */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through the results from the API */}
                            {this.state.result.map(book =>
                                <tr key={book.id}>
                                    <td><img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&source=gbs_api`} /></td>
                                    <td>{book.volumeInfo.title}</td>
                                    <td>{book.volumeInfo.authors}</td>
                                    <td> <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer"><button>View</button></a></td>
                                    <td><button onClick={() => console.log(book.id)}>Save</button></td>
                                    {/* <td>
                                        <Link to="/saved">
                                            <button>Save {console.log(book.id)}</button>
                                        </Link>
                                    </td> */}
                                    {/* <td><button onClick={() => console.log(book.volumeInfo.title)}>Save</button></td> */}
                                </tr>


                            )}
                        </tbody>
                    </table>
                </div>

                <h5> End of list</h5>

            </div >
        )
    }
}

