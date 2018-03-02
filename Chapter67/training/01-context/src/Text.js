import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Text extends Component {

    static contextTypes = {
        addItem: PropTypes.func.isRequired,
    }

    state = {
        text: ''
    }

    onChange = e => {
        this.setState({ text: e.target.value })
    }

    onClick = () => {
        this.context.addItem(this.state.text)
        this.setState({ text: '' })
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <button onClick={this.onClick}>Отправить</button>
            </div>
        )
    }

}