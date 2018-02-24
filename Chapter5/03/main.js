/*Уже есть класс, конструктор методы, моделька, ООП считай красивенько, можно создать много объектов*/
/*в чем отстой? */

class Store {
    constructor(defState){
        this.state = defState
    }

    addElement(id, text, done = false){
        this.state = Object.assign({}, this.state)
        this.state.list = this.state.list.slice()
        this.state.list.push({id, text, done})
    }

    getState(){
        return this.state
    }
}

const store = new Store({
    list: [
        {id: 1, text:'React', done: false},
        {id: 2, text:'Java 9', done: false}
    ]
})


store.addElement(3, 'Java 10', false)

console.log(JSON.stringify(store, null, 4));