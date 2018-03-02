import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from './List';
import { Text } from './Text';


export class App extends Component {

    static childContextTypes = {
        addItem: PropTypes.func.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    getChildContext = () => ({
        addItem: this.addItem,
        items: this.items,
    })

    items = ['1', 'Yo!', '4']

    addItem = text => {
        this.items.push(text)
        this.setState({})
    }

    render () {
        return (
            <div>
                <Text/>
                <List/>
            </div>
        )
    }

}