// Import all the necessary goodness!
import React, { Component } from 'react'
import API from "../utils/API"
import Search from "./Search/Search"
import { Link } from "react-router-dom";


// Export default here instead of below!
export default class Main extends Component {

    // Set state for the API results, the search form and the sort order!
    state = {
        result: [],
        search: ""
    }

    // Component did mount to get the API request from Utils / API
    componentDidMount() {
        this.searchBooks("Harry+Potter");
        //Call the API search function from Utils/API
        // API.APISearch()
        //     //Get the data set it to state and console log it
        //     .then(res => {
        //         // console.log(res.data.items)
        //         this.setState({ results: res.data.items })
        //         console.log(this.state.results)
        //         // Gotta check them errors!
        //     }).catch(err => console.log(err))
    }
    // componentDidMount() {
    //     this.searchBooks("Harry+Potter");
    // }


    searchBooks = query => {
        API.APISearch(query)
            .then(res => {
                this.setState({ result: res.data.items })
                console.log(res.data.items)
            })

            .catch(err => console.log(err));
    };

    // Handle input change to get the data from the search bar and make it render
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
        console.log(this.state.search)
        console.log("line48")

    };

    // Handle input change to get the data from the search bar and make it render
    // handleInputChange = event => {
    //     if (event.target.name === "search") {
    //         // Lower case it just incase
    //         const searchValue = event.target.value.toLowerCase();
    //         // Set the state
    //         this.setState({
    //             search: searchValue
    //         })
    //     }
    // }


    render() {
        return (
            <div>
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />

                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Link</th>
                                {/* <th>Description</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.result.map(book =>
                                <tr key={book.id}>
                                    <td><img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&source=gbs_api`} /></td>
                                    <td>{book.volumeInfo.title}</td>
                                    <td>{book.volumeInfo.authors}</td>
                                    {/* <td>{book.volumeInfo.description}</td> */}
                                    <td> <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer"><button>View</button></a></td>
                                    <button onClick={() => console.log(book.id)}>Save</button>
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
                {/* <p>{this.state.result.volumeInfo.title}</p> */}
                <h5> End of list</h5>

            </div >
        )
    }
}

// {books.length ? (
//     <List>
//       {books.map(book => (
//         <ListItem key={book._id}>
//           <Link to={"/books/" + book._id}>
//             <strong>
//               {book.title} by {book.author}
//             </strong>
//           </Link>
//           <DeleteBtn onClick={() => deleteBook(book._id)} />
//         </ListItem>
//       ))}
//     </List>
//   ) : (
//     <h3>No Results to Display</h3>
//   )}