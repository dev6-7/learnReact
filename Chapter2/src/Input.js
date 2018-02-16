import React, { Component } from 'react'

export default class Input extends Component {
    render(){
        return (
            <input type={this.props.type} id={this.props.id}/>
        );
    }
}