import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Provider extends Component {

    static propTypes = {
        store: PropTypes.any.isRequired,
    };

    static childContextTypes = {
        store: PropTypes.any.isRequired,
    };

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    constructor(props) {
        super(props)
        props.store.on(
            () => {this.setState({})}
        )
    }

    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}