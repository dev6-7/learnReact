import React, { Component } from 'react'

export default class Label extends Component {
    render(){
        return (
            <label for={this.props.for}>{this.props.text}</label>
        );
    }
}