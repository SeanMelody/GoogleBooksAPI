// Import all the goodness
import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import SavedStyles from "./SavedStyles"


// Function to delete the book from the database by ID
const deleteBook = (id) => {
    fetch(`/api/books/${id}`, {
        method: 'DELETE'
        // Json that response
    })
        .then((response) => response.json())
        .then((data) => {
            // Console log the data
            console.log(data)
        })
    // Refresh the page so that the book is no longer shown
    window.location.reload()

}

const Saved = (props) => {

    const { savedBooks, getBooks } = props

    useEffect(() => {
        getBooks()
        // eslint-disable-next-line
    }, [])

    // Render all the data using React and Props!
    return (
        <div>
            <Header title={"Saved Books"} />
            {/* Have to refresh to see the newly added books */}
            {/* <p>Refresh the page to see your newly saved books</p> */}
            {/* Statement to display something different if there are no saved books yet */}
            {savedBooks.length ? (
                <div className="container">
                    {/* Map through the results from the Mongoose Database */}
                    {savedBooks.map((savedBook) => (
                        // Set each book to a card
                        <div style={SavedStyles.Cards} className="card" key={savedBook._id}>
                            <div className="card-title row justify-content-around" >
                                <h4 className="col-md-5">{savedBook.title}</h4>
                                {/* Button to view the book on googlebooks */}
                                <button
                                    className="btn btn-outline-primary">
                                    <a style={SavedStyles.linkStyles}
                                        href={savedBook.link} target="_blank" rel="noopener noreferrer"
                                    >
                                        View on Google Books
                                </a>
                                </button>
                                {/* Button to call the delete book function */}
                                <button style={SavedStyles.Button}
                                    className="btn btn-outline-danger"
                                    onClick={() => deleteBook(savedBook._id)}>Delete Book
                            </button>

                            </div>
                            {/* Div to dispaly the card body, image, authors and descrioption */}
                            <div className="card-body row">
                                <img style={SavedStyles.Images} className="col-md-2" src={savedBook.image} alt="book cover" />
                                <h3 className="col-md-2">{savedBook.authors}</h3>
                                <p className="col-md-8">{savedBook.description}</p>
                            </div>
                        </div>
                    ))}
                    {/* A break for some space */}
                    <br></br>
                </div>

            ) : (
                    // Display this if there are no saved books yet
                    <h3>No Saved Books Yet</h3>
                )}


        </div >
    )

}

// Export it all
export default Saved
