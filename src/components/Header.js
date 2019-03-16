import React from 'react'
import LocationPicker from './LocationPicker'
import PropTypes from 'prop-types'

function Header(props){
    const headerStyle = {
        backgroundColor : 'grey'
    }

    return(
        <div style={headerStyle}>
            <h2>My Weather App</h2>
            { props.locations.length === 0 ? undefined:
                <LocationPicker locations={props.locations} updateLocation={props.updateLocation} />
            }
        </div>
    )
}

Header.propTypes = {
    locations : PropTypes.array,
    updateLocation : PropTypes.func
}

export default Header



