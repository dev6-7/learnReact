import React, { Component } from 'react'


export class TextInput extends Component {

    state = {
        text: 'Просто текст'
    }

    onChangeHandler = e => {
        this.setState({ text: e.target.value })
    }

    render () {
        return (
            <input type="text" value={this.state.text} onChange={this.onChangeHandler} style={style} />
        )
    }

}