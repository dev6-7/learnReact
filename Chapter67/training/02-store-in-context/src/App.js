import React, { Component } from 'react'

import { Store } from './store/store'
import { List } from "./components/List";
import { Text } from "./components/Text";
import { Provider } from "./store/Provider";


const store = new Store({
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
})

export class App extends Component {

    render () {
        return (
            <Provider store={store}>
                <Text/>
                <List/>
            </Provider>
        )
    }

}