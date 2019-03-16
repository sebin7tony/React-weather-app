import React from 'react'
import PropTypes from 'prop-types'

class LocationPicker extends React.Component{

    //props passing in functional & class components
    state = {
            selected: this.props.locations[1]
        }

    //learn more about the class based component
    //when should we use functional or class based component ?
    onchange = (event) => {
        const {value} = event.target;
        //learn about setstate
        this.setState(() =>{
            return {
                selected : value
            }
        },() =>{this.props.updateLocation(this.state.selected);})
        //console.log('Slected '+this.state.selected)
    }

    //different function representation in es6
    //how to assign a function to a variable ?
    render = () => {

        const locationOptions =  
                this.props.locations.map((location =>{
                    return(
                        <option
                            key={location}
                            value={location}
                        >{location}</option>
                    )
                }
            )
        )

        const pickerStyle = {

        }

        return (
            <div style={pickerStyle}>
                <select
                    value={this.state.selected}
                    onChange={this.onchange}
                    name='location'
                >
                    {locationOptions}
                </select>
            </div>
        )
    }
}

LocationPicker.propTypes = {
    locations: PropTypes.array,
    updateLocation: PropTypes.func
}

export default LocationPicker