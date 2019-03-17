import React from 'react'

function Footer(){
    const footerStyle = {
        backgroundColor : 'grey',
        position: "absolute"
    } 

    return(
        <div style={footerStyle}>
            <p>It is footer</p>
        </div>
    )
}

export default Footer