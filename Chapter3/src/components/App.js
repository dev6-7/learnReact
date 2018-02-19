import React, { Component } from 'react'
import { TextInput } from './textInput/TextInput'
import { TimerA } from './timers/TimerA'
import { HandlerToProps } from './handlerToProps/HandlerToProps'
import { Calc } from './Calc'


export class App extends Component {

    render () {
        return (
            <Calc style={{backgroundColor: 'green'}}/>
        )
    }

}