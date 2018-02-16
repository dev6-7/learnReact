import React, { Component } from 'react'
import Input from "./Input";
import Label from "./Label";

export default class Article extends Component {
    render(){
        return (
            <div id="article">
                <h2>{this.props.h2}</h2>
                <Label for="name" text="Имя"/>
                <Input id="name" type="text"/>
                <Label for="email" text="Почта"/>
                <Input id="email" type="email"/>
                <Label for="telephone" text="Телефон"/>
                <Input id="telephone" type="tel"/>
                <Label for="message" text="Сообщение"/>
                <Input id="message" type="text"/>
            </div>
        );
    }
}