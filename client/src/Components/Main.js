// Import all the necessary goodness!
import React, { Component } from 'react'
import API from "../utils/API"

// Export default here instead of below!
export default class Main extends Component {

    // Set state for the API results, the search form and the sort order!
    state = {
        results: [],
        search: ""
    }

    // Component did mount to get the API request from Utils/API
    componentDidMount() {
        //Call the API search function from Utils/API
        API.APISearch()
            //Get the data set it to state and console log it
            .then(res => {
                // console.log(res.data.items)
                this.setState({ results: res.data.items })
                console.log(this.state.results)
                // Gotta check them errors!
            }).catch(err => console.log(err))
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

