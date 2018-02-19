import React, { Component } from 'react'
import {TimerB} from './TimerB'


export class TimerA extends Component {

    constructor(props) {
        super(props)
        window.setState = this.setState.bind(this)
    }

    state = {
        t: Date.now()
    }

    clickHandler = () => {
        console.log(this.props.name + ' до setState ' + this.state.t)
        this.setState({ t: Date.now() })
        console.log(this.props.name + ' после setState ' + this.state.t)
        setTimeout(()=>{
            console.log(this.props.name + ' через секунду после setState ' + this.state.t)
        }, 1000)
    }

    render () {
        console.log('Render ' + this.props.name + ' ' + this.state.t)

        return (
            <div>
                <div>
                    {this.props.name} = {this.state.t}
                    <button type="button" onClick={this.clickHandler}>Update</button>
                </div>
                <TimerB name="B"/>
            </div>
        )
    }

}