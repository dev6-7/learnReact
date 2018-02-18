import React, {Component} from 'react'

export class AlertButton extends React.Component {
    render() {
        return (
            <button onClick={() => alert(this.props.alertText)}>
                {this.props.buttonText}
            </button>
        );
    }
}