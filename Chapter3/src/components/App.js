import React, { Component } from 'react'
import { TextInput } from './textInput/TextInput'
import { TimerA } from './timers/TimerA'
import { HandlerToProps } from './handlerToProps/HandlerToProps'
import { Calc } from './Calc'


export class App extends Component {

    render () {
        return (
            <div>
                {/*<h2>Обычное поле ввода</h2>
                <TextInput/>

                <h2>Обновление по изменению state</h2>
                <TimerA name="A"/>

                <h2>Проброс хэндлера пропсом</h2>
                <HandlerToProps/>*/}

                <h2>Калькулятор</h2>
                <Calc style={{backgroundColor: 'red'}}/>
            </div>
        )
    }

}