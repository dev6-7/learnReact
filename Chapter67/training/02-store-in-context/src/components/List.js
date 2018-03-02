import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class List extends Component {

    static contextTypes = {
        store: PropTypes.any.isRequired,
    };

    render () {
        return (
            <div>
                {this.context.store.getState().list.map(item => <div key={item.text}>{item.text}</div>)}
            </div>
        )
    }
}
