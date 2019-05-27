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

    const {name,picture} = currentUser.results[0];

    return(
      <div className="App">
        <p>
          {JSON.stringify(currentUser)}
        </p>
        <h4>{`Name : ${name.title} ${name.first} ${name.last}`}</h4>
        <img src={picture.large} alt="image"/>
      </div>
    )
  }

}

export default App;
