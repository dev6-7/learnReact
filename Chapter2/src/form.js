import React, { Component } from 'react'
import { render } from "react-dom";
import Article from './Article'
import './form.less'

render(
    <Article h2="Оставьте нам сообщение"/>,
    document.getElementById('formRoot')
);

class App extends Component {
    constructor(props) {
        super(props);
    }

    renderManual() {
        return <ManualComponent />;
    }

    render() {
        return (
            <div>{this.renderManual()}
                <button onClick={() => alert(this.props.text)}>
                    Click me!
                </button>
            </div>
        );
    }
}

class ManualComponent extends Component{
    render() {
        return (
            <div class="articleBlock">
                <ArticleComponent h1="Что же делать?"
                                  text="Делать можно много чего, ну ты занимайся и всё получится!"/>
                <ArticleComponent h1="Как не помереть?"
                                  text="Никогда не знаешь когда, так что ну ты занимайся и всё получится!"/>
                <ArticleComponent h1="Как жить дальше?"
                                  text="Увидишь, а пока ну ты занимайся и всё получится!"/>
            </div>
        );
    }
}