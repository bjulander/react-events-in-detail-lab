// Code DelayedButton Component Here

import React from "react"


export default class DelayedButton extends React.Component {


    handleDelay = (event) => {
        event.persist()
        window.setTimeout(() => {
        this.props.onDelayedClick(event)}, this.props.delay)
    }

    render (){
        return (
            <div className="delayBtn">
                <button onClick={this.handleDelay}>DBtn</button>
            </div>
        )
    }
}