import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class List extends Component{
    static contextTypes = {
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
        who: PropTypes.string
    }

    render() {
        return(
            <div>
                <h2>{this.context.who}</h2>
                {this.context.items.map(item => <div key={item}>{item}</div>)}
            </div>
        )
    }
}