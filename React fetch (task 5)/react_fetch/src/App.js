import React, { Component } from 'react';
import LoadingComponent from './LoadingComponent';

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
    setTimeout(this.fetchNewUserData, 2000);
  }


  renderLoadingInfo = () =>{
    return(
      <div className="App">
      <p>
        loading data...
      </p>
    </div>
    )
  }


  render(){
    const {currentUser} = this.state;
    
    if (!currentUser) {
      return this.renderLoadingInfo();
    }

    const {name,picture,location,dob} = currentUser.results[0];

    return(
      <div className="App">
        <p>
          {JSON.stringify(currentUser)}
        </p>
        <h4>{`NAME : ${name.title} ${name.first} ${name.last}`}</h4>
        <h4>{`LOCATION : State ${location.state}, ${location.city} City, ${location.street}`}</h4>
        <h4>{`AGE : ${dob.age}`}</h4>

        <img src={picture.large} alt="user photo"/>
        <button onClick={this.fetchNewUserData}>Find new user</button>
      </div>
    )
  }

}

export default App;
