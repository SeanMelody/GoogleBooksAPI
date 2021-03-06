import React from 'react'

// // let savedBooks = []
// const getBooks = () => {
//     fetch('/api/books', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         // Json that response
//     })
//         .then((response) => response.json())
//         // Then get the data
//         .then((data) => {
//             // For Each loop to loop through the database and get the stock and id
//             // data.forEach(({ id, stock }) => {
//             // })
//             console.log(data)
//             // let savedBooks = data
//         })
// }
// getBooks()



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


    // Export default here instead of below!
    // export default class Saved extends Component {

    // Set state for the API results, and the search form!


    // let savedBooks = []
    // getSavedBooks = () => {
    //     fetch('/api/books', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })

    //         // Then get the data
    //         .then(res => {
    //             // this.setState(bookList.res.data)
    //             console.log(res.data)
    //             console.log("line 61")
    //             // let savedBooks = data
    //         })

    // }
    // searchSaved = () => {

    //     console.log(data)
    // };


    // Render all the data using React!

    return (
        <div>
            <h1>Saved List</h1>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    {/* Talbe descriptions */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Authors</th>
                            <th>View</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through the results from the API */}
                        {/* {this.state.result.map(book => */}
                        {/* <tr>
                            <td>Saved Book Image</td>
                            <td>Saved Book Title</td>
                            <td>Saved Book Authors</td>
                            <td><button onClick={() => console.log("View Button")}>View</button></td>
                            <td><button onClick={() => console.log("Delete Button")}>Delete</button></td>
                        </tr> */}

                        {props.savedBooks.map((savedBook) => (
                            <tr key={savedBook._id}>
                                <td><img src={savedBook.image} alt="book cover" /></td>
                                <td>{savedBook.title}</td>
                                <td>{savedBook.authors}</td>
                                <td> <a href={savedBook.link} target="_blank" rel="noopener noreferrer"><button>View</button></a></td>
                                <td><button onClick={() => deleteBook(savedBook._id)} >DeleteBook</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            <h5> End of list</h5>


        </div >
    )

}
export default Saved
