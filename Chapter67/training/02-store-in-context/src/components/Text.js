import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { addItem } from '../store/AC'


export class Text extends Component {

    static contextTypes = {
        store: PropTypes.any.isRequired,
    };

    state = {
        text: ''
    }

    onTyping = e => {
        this.setState({ text: e.target.value })
    }

    submit = () => {
        const addItemAction = addItem(Date.now(), this.state.text)
        this.context.store.dispatch(addItemAction)
        this.setState({ text: '' })
    }


    render () {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onTyping}/>
                <button onClick={this.submit}>Отправить</button>
            </div>
        )
    }

}
