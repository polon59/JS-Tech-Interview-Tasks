import React, { Component } from 'react'

import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {currentUser:null};
  }

  fetchNewUserData = () =>{
    return fetch('https://randomuser.me/api/', 
    {method : "GET",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {return data})
    .catch(err => console.log(err.message))
  }

  componentDidMount(){
    this.fetchNewUserData().then( (data) =>{
      this.setState({currentUser:data})
    })
  }



  render(){
    const {currentUser} = this.state;
    
    if (!currentUser) {
      return(
        <div className="App">
        <p>
          loading data...
        </p>
      </div>
      )
    }
    console.log(currentUser.picture)
    return(
      <div className="App">
        <p>
          {JSON.stringify(currentUser)}
        </p>
        <img src={currentUser.picture} alt="image"/>
      </div>
    )
  }

}

export default App;
