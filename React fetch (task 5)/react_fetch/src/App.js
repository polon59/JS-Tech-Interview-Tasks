import React, { Component } from 'react'

import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {currentUser:null};
  }

  fetchNewUserData = () =>{
    fetch('https://randomuser.me/api/', 
    {method : "GET",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {this.setState({currentUser:data})})
    .catch(err => console.log(err.message))
  }



  componentDidMount(){
    this.fetchNewUserData();
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

    const {name,picture,location} = currentUser.results[0];

    return(
      <div className="App">
        <p>
          {JSON.stringify(currentUser)}
        </p>
        <h4>{`NAME : ${name.title} ${name.first} ${name.last}`}</h4>
        <h4>{`LOCATION : State ${location.state}, ${location.city} City, ${location.street}`}</h4>
        
        <img src={picture.large} alt="image"/>
        <button onClick={this.fetchNewUserData}>Find new user</button>
      </div>
    )
  }

}

export default App;
