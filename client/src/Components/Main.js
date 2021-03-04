// Import all the necessary goodness!
import React, { Component } from 'react'
import API from "../utils/API"
import Search from "./Search/Search"

// Export default here instead of below!
export default class Main extends Component {

    // Set state for the API results, the search form and the sort order!
    state = {
        results: [],
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

            </div>
        )
    }
}

