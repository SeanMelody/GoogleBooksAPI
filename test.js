import React, { Component, useEffect } from 'react'

export default class Profile extends Component {

  state = {
    users: []
  }

  getUsers = () => {
    fetch('/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
      // Json that response
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // .then(res => {
        //   this.setState({ users: res })
        // })
      })

  }





  render() {

    // useEffect(() => {
    //   getUsers()
    //   // eslint-disable-next-line
    // }, [])



    return (
      <div>

      </div >
    )
  }
}
