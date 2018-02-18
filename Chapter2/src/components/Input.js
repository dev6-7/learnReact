import React, { Component } from 'react'

export default class Input extends Component {
    render(){
        return (
            <input id={this.props.id} type={this.props.type} placeholder={this.props.placeHolder} />
        );
    }
}