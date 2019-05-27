import React, { Component } from 'react'

import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {currentUser:null};
  }

  render(){
    return(
      <div className="App">
        <p>
          main component
        </p>
      </div>
    )
  }

}

export default App;
