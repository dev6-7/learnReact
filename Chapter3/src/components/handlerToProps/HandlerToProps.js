import React, { Component } from "react"
import { Btn } from './Btn'

export class HandlerToProps extends Component {

    state = {
        num: 0,
    }

    incHandler = incCount => {
        const newNum = this.state.num + incCount
        this.setState({ num: newNum})
    }

    render () {
        return (
            <div>
                D = {this.state.num}<br/>
                <Btn incCount={2} handler={this.incHandler}/>
            </div>
        )
    }
}


