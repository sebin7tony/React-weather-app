import React from 'react'
import PropTypes from 'prop-types'

class LocationAdder extends React.Component{

    state={
        location : ""
    }

    changeHandler = (event) =>{
        const {name,value} = event.target
        this.setState(
            {[name] : value}
        )
    }

    onFormSubmit = (e) =>{
        e.preventDefault()
        this.props.addLocation(this.state.location)
        this.setState({location : ""})
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <input 
                    name="location"
                    value={this.state.location}
                    placeholder="Add your City"
                    onChange={this.changeHandler}
                />
                <button>Submit</button>
            </form>
        )
    }
}

LocationAdder.propTypes = {
    addLocation : PropTypes.func
}

export default LocationAdder