// Import all the necessary goodness!
import React, { Component } from 'react'
import API from "../utils/API"
import Header from '../Components/Header/Header';
import SearchForm from "../Components/Search/SearchForm"
import SearchedStyles from "./SearchedStyles"




// Export default here instead of below!
export default class Search extends Component {

    // Set state for the API results, and the search form!
    state = {
        result: [],
        search: ""
    }

    // Component did mount to get the API request from Utils / API for Harry Potter
    componentDidMount() {
        // this.searchBooks("");
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

    // saveBook = (book) => {

    //     fetch(`/api/books/`, {
    //         method: 'POST',
    //         body: JSON.stringify(book),
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(`${book.title} added`)
    //         })
    // }

    // Render all the data using React!
    render() {

        // Save book to the Mongoose database
        const saveBook = (book) => {
            console.log(book)
            let newSave = {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors[0],
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks.smallThumbnail,
                link: book.volumeInfo.previewLink
            }
            fetch(`/api/books`, {
                method: 'POST',
                body: JSON.stringify(newSave),
                headers: { "Content-Type": "application/json" }
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    console.log(`${book.volumeInfo.title} saved`)
                })
        }
        //Return it all
        return (
            <div>
                <Header title={"Search For a Book"} />
                {/* Search form so user can search books */}
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <div className="container">

                    {this.state.result.map(book =>
                        <div style={SearchedStyles.Cards} className="card" key={book.id}>
                            <div className="card-title row justify-content-around">
                                <h4 className="col-md-5">{book.volumeInfo.title}</h4>

                                <button className="btn btn-outline-danger">
                                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                                        View on Google Books
                                    </a>
                                </button>

                                <button className="btn btn-outline-success"
                                    onClick={() => saveBook(book)} >Save Book
                                </button>

                            </div>
                            <div className="card-body row">
                                <img className="col-md-2" src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&source=gbs_api`} alt="book cover" />
                                <h5 className="col-md-2">{book.volumeInfo.authors}</h5>
                                <p className="col-md-8">{book.volumeInfo.description}</p>

                            </div>

                        </div>


                    )}
                    <br></br>

                </div>


            </div >
        )
    }
}

// Table!
/* <table className="table table-striped table-hover">

                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            */
                            // {this.state.result.map(book =>
                            //     <tr key={book.id}>
                            //         <td><img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&source=gbs_api`} alt="book cover" /></td>
                            //         <td>{book.volumeInfo.title}</td>
                            //         <td>{book.volumeInfo.authors}</td>
                            //         <td> <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer"><button>View</button></a></td>
                            //         <td><button onClick={() => saveBook(book)} >saveBook()</button></td>
                            //         {/* <td>
                    //                     <Link to="/saved">
                    //                         <button>Save {console.log(book.id)}</button>
                    //                     </Link>
                    //                 </td> */}
                    //                 {/* <td><button onClick={() => console.log(book.volumeInfo.title)}>Save</button></td> */}
                    //             </tr>

                    //             // : <tr><h4>Search for a book</h4></tr>
                    //         )}
                    //     </tbody>
                    // </table>
