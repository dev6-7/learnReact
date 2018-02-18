import React, { Component } from 'react'
import Input from "./Input";
import Label from "./Label";
import {AlertButton} from "./AlertButton";
import Span from "./Span";

export default class SendForm extends Component {
    render(){
        return (
            <div id="sendForm">
                <div>
                    <Span id="formHeader" text="Отправьте нам сообщение"/>
                    <br/>
                    <br/>
                </div>
                <Input id="name" type="text" placeHolder="Имя"/>
                <Input id="email" type="email" placeHolder="Почта"/>
                <Input id="telephone" type="tel" placeHolder="Телефон"/>
                <br/>
                <Input id="message" type="text" placeHolder="Сообщение"/>
                <br/><br/>
                <AlertButton alertText="Отправлено" buttonText="Отправить"/>
            </div>
        );
    }
}