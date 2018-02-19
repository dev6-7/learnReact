import React, { Component } from 'react'
import {TimerC} from './TimerC'


export class TimerB extends Component {

    state = {
        t: Date.now()
    }

    clickHandler = () => {
        this.setState({ t: Date.now() })
    }

    render () {
        console.log('Render ' + this.props.name + ' ' + this.state.t)

        return (
            <div>
                <div>
                    {this.props.name} = {this.state.t}
                    <button type="button" onClick={this.clickHandler}>Update</button>
                </div>
                <TimerC name="C" t={this.state.t}/>
            </div>
        )
    }

}