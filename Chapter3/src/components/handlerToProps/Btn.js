import React, { Component } from "react"

export class Btn extends Component {

    click = e => {
        this.props.handler(this.props.incCount)
    }

    render () {
        return (
            <button type="button" onClick={this.click}>2</button>
        )
    }

}