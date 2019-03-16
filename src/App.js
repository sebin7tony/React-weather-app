import React, { Component } from 'react';
import Header from './components/Header'
import WeatherContainer from './components/WeatherContainer'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  state = {
    location:{
      locationSelected : undefined,
      locationList : ["India","Canada"]
    }
   
  }

  updatedLocation = (locationSelected) => {
    let updatedLocation = {...this.state.location,locationSelected}
    this.setState({location: updatedLocation},()=>{
      console.log("Updated "+JSON.stringify(this.state))
    })
  }


  render() {
    return (
      <div className="App">
        <Header locations={this.state.location.locationList} updateLocation={this.updatedLocation} />
        <WeatherContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
