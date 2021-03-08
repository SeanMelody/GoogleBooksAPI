import React from 'react'
import Header from '../../Components/Header/Header'
import SavedStyles from "./SavedStyles"

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
            <Header title={"Saved Books"} />
            <div className="container">

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
                    <div style={SavedStyles.Card} className="card" key={savedBook._id}>
                        <div className="card-title" ><h4>{savedBook.title}</h4></div>
                        <div className="card-body row">
                            <img className="col-md-2" src={savedBook.image} alt="book cover" />
                            <h3 className="col-md-2">{savedBook.authors}</h3>
                            <p className="col-md-6">{savedBook.description}</p>
                            <a href={savedBook.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-primary">View</button></a>
                            <button onClick={() => deleteBook(savedBook._id)} className="btn btn-outline-danger">DeleteBook</button>
                        </div>
                    </div>
                ))}


            </div>

            <h5> End of list</h5>


        </div >
    )

}
export default Saved

// Table 
    // < div className = "table-responsive" >
    //     <table className="table table-striped table-hover">
    //         /* Talbe descriptions */
    //         <thead>
    //             <tr>
    //                 <th>Image</th>
    //                 <th>Title</th>
    //                 <th>Authors</th>
    //                 <th>View</th>
    //                 <th>Delete</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             /* Map through the results from the API */
    //             /* {this.state.result.map(book => */
    //         /* <tr>
    //                         <td>Saved Book Image</td>
    //                         <td>Saved Book Title</td>
    //                         <td>Saved Book Authors</td>
    //                         <td><button onClick={() => console.log("View Button")}>View</button></td>
    //                         <td><button onClick={() => console.log("Delete Button")}>Delete</button></td>
    //                     </tr> */

    //             {props.savedBooks.map((savedBook) => (
    //                 <tr key={savedBook._id}>
    //                     <td><img src={savedBook.image} alt="book cover" /></td>
    //                     <td>{savedBook.title}</td>
    //                     <td>{savedBook.authors}</td>
    //                     <td> <a href={savedBook.link} target="_blank" rel="noopener noreferrer"><button>View</button></a></td>
    //                     <td><button onClick={() => deleteBook(savedBook._id)} >DeleteBook</button></td>
    //                 </tr>
    //             ))}

    //         </tbody>
    //     </table>
    //         </div >