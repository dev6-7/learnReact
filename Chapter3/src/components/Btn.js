import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


/*PureComponent это что-то вроде stateless компонента*/
export class Btn extends PureComponent {
    /*static как в яве, переменные на уровне класса*/
    static propTypes = {
        action: PropTypes.string.isRequired,
        handler: PropTypes.func.isRequired,
        className: PropTypes.string,
    }

    /*handler сюда пробрасывают из Calc компонента*/
    clickHandler = () => {
        const { action, handler } = this.props
        handler(action)
    }

    render () {
        const { action, className } = this.props

        return (
            <button onClick={this.clickHandler} className={`${className}  calc-btn`}>{action}</button>
        )
    }

    /*компонент тупой и можно его не ререндерить (также это влияет и на дочек), для пуркомпонента не нужен
    * потому что он сам себя не может ререндерить, только извне*/
    /*shouldComponentUpdate(nextProps, nextState){
        return false
    }*/
}
