import React from 'react'
import Proptypes from 'prop-types'
import snowflake from './images/snowflake.png'
import sunny from './images/sunny.svg'
import umbrella from './images/umbrella.svg'
import data from './weatherData'

class WeatherCard extends React.Component{

    state ={
        location : "",
        main : "",
        temperature : "",
        description : ""
    }

    componentDidMount = () =>{
        let index = Math.floor(Math.random() * 4)
        var {main,temperature,description} = data[index]
        console.log("Reached card "+JSON.stringify(data[index]))
        this.setState(
            {
                location : this.props.location,
                main,
                temperature,
                description
            }
        )
    }

    render(){
        const imageStyle = {
            height: '20%',
            width: '20%'
        }

        const getWeatherimage = (weather) =>{
            let src = ""
            if(weather === 'rain'){
                src = umbrella
            }
            else if(weather === 'snow'){
                src = snowflake
            }
            else{
                src = sunny
            }
            return <img style={imageStyle} alt="images" src={src} />
        }

        const cardStyle = {
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            padding: "2px 16px",
            borderRadius: 5,
            width : "27%",
            float : "left"
        }

        return(
            <div style={cardStyle}>
                <h2>{this.state.location}</h2>
                {getWeatherimage(this.state.main)}
                <h1>{this.state.temperature}</h1>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

WeatherCard.propTypes = {
    location : Proptypes.string
}

export default WeatherCard