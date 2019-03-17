import React from 'react'
import WeatherCard from './WeatherWidget/WeatherCard';
import PropTypes from 'prop-types'

function WeatherComponent(props){

    const getAllWidgets = () => {
        console.log(props.locationList)
        return( props.locationList.map((location) => {
            return (
                <WeatherCard key={location} location={location} />
            )
        }))
    }

    return(
        
        <div>{getAllWidgets()}</div>
    )
}

WeatherComponent.propTypes = {
    locationList : PropTypes.array
}

export default WeatherComponent