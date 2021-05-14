import React from "react"

// Code CoordinatesButton Component Here

export default class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render (){
        return (
            <div className="coordBtn">
                <button onClick={this.handleClick}>Button</button>
            </div>
        )
    }
}