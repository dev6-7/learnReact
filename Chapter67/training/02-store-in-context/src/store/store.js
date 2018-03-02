import { itemReducer } from './reducers'

export class Store {

    constructor(defState){
        this.state = defState
        this.handlers = []
    }

    dispatch(action) {
        const state = itemReducer(this.state, action)

        if (state !== this.state) {
            this.state = state
            // Сообщаем всем подписчикам что было обновление
            this.handlers.forEach(cb => cb())
        }
    }

    getState(){
        return this.state
    }

    on(cb) {
        this.handlers.push(cb)
    }

    off(cb) {
        const i = this.handlers.indexOf(cb)
        if (i >= 0) {
            this.handlers.splice(i, 1)
        }
    }

}
