import React, { Component } from 'react'
import { render } from "react-dom";
import MyComp from './MyComp'
import './form.less'

render(
    <div><MyComp h1="React" text="The best view-component builder"/></div>,
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

class ArticleComponent extends Component {
    render(){
        return (
            <div id="article">
                <h1>{this.props.h1}</h1>
                <p>{this.props.text}</p>
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