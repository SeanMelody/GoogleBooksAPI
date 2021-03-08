import React from 'react'
import Header from '../../Components/Header/Header'
import SavedStyles from "./SavedStyles"

const deleteBook = (id) => {
    fetch(`/api/books/${id}`, {
        method: 'DELETE'
        // Json that response
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    window.location.reload()

}

const Saved = (props) => {

    // Render all the data using React!
    return (
        <div>
            <Header title={"Saved Books"} />
            <p>Refresh the page to see your newly saved books</p>
            {props.savedBooks.length ? (
                <div className="container">

                    {/* Map through the results from the Mongoose Database */}
                    {props.savedBooks.map((savedBook) => (
                        <div style={SavedStyles.Cards} className="card" key={savedBook._id}>
                            <div className="card-title row justify-content-around" >
                                <h4 className="col-md-5">{savedBook.title}</h4>

                                <button
                                    className="btn btn-outline-primary">
                                    <a style={SavedStyles.linkStyles}
                                        href={savedBook.link} target="_blank" rel="noopener noreferrer"
                                    >
                                        View on Google Books
                                </a>
                                </button>

                                <button style={SavedStyles.Button}
                                    className="btn btn-outline-danger"
                                    onClick={() => deleteBook(savedBook._id)}>Delete Book
                            </button>

                            </div>
                            <div className="card-body row">
                                <img style={SavedStyles.Images} className="col-md-2" src={savedBook.image} alt="book cover" />
                                <h3 className="col-md-2">{savedBook.authors}</h3>
                                <p className="col-md-8">{savedBook.description}</p>
                            </div>
                        </div>
                    ))}

                    <br></br>
                </div>

            ) : (
                    <h3>No Saved Books Yet</h3>
                )}


        </div >
    )

}
export default Saved
