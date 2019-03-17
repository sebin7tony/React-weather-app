import React, { Component } from 'react';
import Header from './components/Header'
import WeatherContainer from './components/WeatherContainer'
//import Footer from './components/Footer'
import './App.css';

class App extends Component {
  state = {
    location:{
      locationSelected : undefined,
      locationList : []
    }
   
  }

  updatedLocation = (locationSelected) => {
    let updatedLocation = {...this.state.location,locationSelected}
    this.setState({location: updatedLocation},()=>{
      console.log("Updated "+JSON.stringify(this.state))
    })
  }

  addLocation = (newLoc) =>{
    const locList = [...this.state.location.locationList]
    locList.push(newLoc)
    this.setState({location : {...this.state.location, locationList:locList }})
  }


  render() {
    return (
      <div className="App">
        <Header locations={this.state.location.locationList} updateLocation={this.updatedLocation} addLocation={this.addLocation} />
        <WeatherContainer locationList={this.state.location.locationList}/>
      </div>
    );
  }
}

export default App;
