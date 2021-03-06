import React, { Component } from 'react'

// let savedBooks = []
const getBooks = () => {
    fetch('/api/books', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // Json that response
    })
        .then((response) => response.json())
        // Then get the data
        .then((data) => {
            // For Each loop to loop through the database and get the stock and id
            // data.forEach(({ id, stock }) => {
            // })
            console.log(data)
            // let savedBooks = data
        })
}
getBooks()



const deleteBook = (id) => {
    fetch(`/api/books/${id}`, {
        method: 'DELETE'
        // Json that response
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })

}


// Export default here instead of below!
export default class Saved extends Component {

    // Set state for the API results, and the search form!
    state = {
        result: [],
        search: ""
    }

    // searchSaved = () => {

    //     console.log(data)
    // };


    // Render all the data using React!
    render() {
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
                            <tr>
                                <td>Saved Book Image</td>
                                <td>Saved Book Title</td>
                                <td>Saved Book Authors</td>
                                <td><button onClick={() => console.log("View Button")}>View</button></td>
                                <td><button onClick={() => console.log("Delete Button")}>Delete</button></td>
                            </tr>



                        </tbody>
                    </table>
                </div>

                <h5> End of list</h5>


            </div >
        )

    }
}
