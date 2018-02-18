import React, { Component } from 'react'
import { render } from "react-dom";
import SendForm from './components/SendForm'
import './styles/form.less'
import './styles/testSaas.scss'

render(
    <SendForm h2="Оставьте нам сообщение"/>,
    document.getElementById('formRoot')
);