import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Btn} from './Btn'

export class Calc extends Component {

    /*валидация на уровне dev (на отъебись), в проде не используется*/
    /*static propTypes = {
        style: PropTypes.string.isRequired
    }*/

    constructor(props, context){
        super(props, context)
    }

    static defaultProps = {}

    state = {
        a: undefined,
        action: undefined,
        b: '0',
        error: ''
    }

    /*Методы жизненного цикла компонента*/
    /*синхронно перед render*/
    componentWillMount() {}
    /*отрисовка*/
    render () {
        const { a, b, action, error } = this.state
        const {style} = this.props;
        /*почему-то вот так не работает нифига*/
        /*const {style} = this.props.style;*/
        const {...args} = this.props

        return (
            <div>
                <h2>Калькулятор</h2>
                <table className="calc" style={style}>
                    <tbody>
                    <tr>
                        <td colSpan="4" className="label-error-text">&nbsp;{error}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="label-text">&nbsp;{a}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="label-text">&nbsp;{action}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <input id="digit" value={b} className="input-digit" onKeyDown={this.keyHandler} onChange={this.typingHandler}/>
                        </td>
                    </tr>

                    <tr>
                        <td><Btn action="1" handler={this.btnHandler}/></td>
                        <td><Btn action="2" handler={this.btnHandler}/></td>
                        <td><Btn action="3" handler={this.btnHandler}/></td>
                        <td><Btn action="C" handler={this.btnHandler} className="action"/></td>
                    </tr>

                    <tr>
                        <td><Btn action="4" handler={this.btnHandler}/></td>
                        <td><Btn action="5" handler={this.btnHandler}/></td>
                        <td><Btn action="6" handler={this.btnHandler}/></td>
                        <td><Btn action="+" handler={this.btnHandler} className="action"/></td>
                    </tr>

                    <tr>
                        <td><Btn action="7" handler={this.btnHandler}/></td>
                        <td><Btn action="8" handler={this.btnHandler}/></td>
                        <td><Btn action="9" handler={this.btnHandler}/></td>
                        <td><Btn action="-" handler={this.btnHandler} className="action"/></td>
                    </tr>

                    <tr>
                        <td><Btn action="*" handler={this.btnHandler} className="action"/></td>
                        <td><Btn action="0" handler={this.btnHandler}/></td>
                        <td><Btn action="/" handler={this.btnHandler} className="action"/></td>
                        <td><Btn action="=" handler={this.btnHandler} className="action"/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    btnHandler = btnAction => {
        console.log('btnHandler')

        let {a, b, action} = this.state
        switch (btnAction) {
            case '+':
            case '-':
            case '*':
            case '/':
                if (a) {
                    // Для выполнения последовательных операций мы должны применить последнюю операцию
                    // и отобразить только что нажатую
                    b = (new Function(`return ${a} ${action || btnAction} ${b}`))()
                }
                /*этот момент видимо для перерисовки*/
                this.setState({
                    a: b,
                    action: btnAction,
                    b: '0'
                })
                return
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState({ b: Number(b + btnAction).toString()})
                return
            case '=':
                b = (new Function(`return ${a} ${action} ${b}`))()
                this.setState({
                    a: undefined,
                    action: undefined,
                    /*когда просто b то это null что ли?*/
                    b,
                })
                return
            case 'C':
                this.setState({
                    a: undefined,
                    action: undefined,
                    b: '0',
                })
                return
        }
    }

    keyHandler = e => {
        console.log('keyHandler')
        let keyAction = e.key;

        if(keyAction == 'Enter') {
            keyAction = '='
        } else if (keyAction == 'Esc') {
            keyAction = 'C'
        }
        if(['-', '+', '*', '/', '%', '='].includes(keyAction)){
            this.btnHandler(keyAction)
        }
    }

    typingHandler = e => {
        console.log('typingHandler')
        /*откуда это e вообще Х_Х??*/
        /*еррор падает*/
        const text = e.target.value

        if(text.match('/^\d*$/')){
            this.setState({
                /*для чего намбер сначала а потом ещё стринг?*/
                b: Number(text).toString()
            })
        } else {
            alert('Incorrect value')
        }
    }

    /*clickHandler = e => {}*/
    /*всё мы появились можно работать, обрабатывать html, конец первоначального цикла рендера*/
    componentDidMount() {
        /*$('#input').on('click', this.clickHandler)*/
    }


    /*при изменении state*/

    /*вызывается после изменения пропсов (this.props, nextProps)*/
    componentWillReceiveProps(nextProps) {}
    /*нужно компонент ререндерить или нет(также это влияет и на дочек)*/
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    /*если shouldComponentUpdate сказал да, то инициативу перехватывает этот метод*/
    componentWillUpdate(nextProps, nextState) {}
    /*ререндер компонента, предыдущих параметров в this уже нет, они передаются в метод*/
    componentDidUpdate(prevProps, prevState) {}
    /*перед удалением, можно убрать обработчики, чистка данных в сторах*/
    componentWillUnmount() {
        /*q.r.t=1
        $('#input').off('click', this.clickHandler)*/
    }
    /*трай кэтч*/
    componentDidCatch(error, info) {}

    /*вызываешь -> значит ререндеришь*/
    // this.setState()
    /*костыль который заставляет ререндерить без изменения стейта*/
    // this.forceUpdate()
}