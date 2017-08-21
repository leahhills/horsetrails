import React, { Component } from 'react';
import TrailList from "./components/TrailList/TrailList"
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="horsie-image">
          <h2>To Ride Or Not To Ride...That Is Equestrian</h2>
        </div>
        <TrailList />
      </div>
    );
  }
}

export default App;
