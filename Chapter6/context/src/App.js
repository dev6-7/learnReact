import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { List } from './List';
import { MyText } from './MyText';

export class App extends Component {

    static childContextTypes = {
        addItem: PropTypes.func.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
        who: PropTypes.string.isRequired,
    }

    getChildContext = () => ({
        addItem: this.addItem,
        items: this.items,
        who: 'Pro'
    })

    items = ['Chris Cole', 'Nyjah', 'Mctire', 'Torrey']

    addItem = text => {
        if(text != '') {
            this.items.push(++this.items.length + '. ' + text)
            this.setState({})
        }
    }

    render (){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <MyText/>
                <br/>
                <List/>
            </div>
        )
    }
}