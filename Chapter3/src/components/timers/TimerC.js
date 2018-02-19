import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TimerC extends Component {

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
                    {this.props.name} = {this.state.t}, {this.props.t}
                    <button type="button" onClick={this.clickHandler}>Update</button>
                </div>
            </div>
        )
    }

}