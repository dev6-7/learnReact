import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class List extends Component {

    static contextTypes = {
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    render () {
        return (
            <div>
                {this.context.items.map(item => <div key={item}>{item}</div>)}
            </div>
        )
    }
}
