import React, { Component } from 'react'

export default class Span extends Component {
    render(){
        return (
            <span style={this.props.style} id={this.props.id}>{this.props.text}</span>
        );
    }
}