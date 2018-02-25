// работа через редьюсеры, над привыкнуть и свыкнуться

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const CHANGE_STATUS = 'CHANGE_STATUS'
class Store {
    constructor(defState){
        this.store = defState
    }

    dispath(action){
        switch(action.type){
            case ADD_ITEM:
                this.store = Object.assign({}, this.store)
                this.store.list = this.store.list.slice()
                this.store.list.push(action.payload)
                break
            case CHANGE_STATUS:
                let id = action.payload.id
                let status = action.payload.done
                let item = this.store.list.find( el => el.id == id)
                item.done = status
                break
            case DELETE_ITEM:
                let idDel = action.payload.id
                let deleteItemIndex = this.store.list.findIndex(el => el.id == idDel)
                this.store.list.splice(deleteItemIndex, 1)
                break
        }
    }

    getState() {
        return this.store
    }
}

/*ACTION CREATOR*/
function addElement(id, text, done = false) {
    return {
        type: ADD_ITEM,
        payload: {id, text, done}
    }
}

function changeStatus(id, done) {
    return {
        type: CHANGE_STATUS,
        payload: {id, done}
    }
}

function deleteElement(id) {
    return {
        type: DELETE_ITEM,
        payload: {id}
    }
}

/*кейс добавления*/
console.log('ADD 3 ELEMENT')
const store = new Store({
    list: []
})
const add1 = addElement(1, 'JAVA 5', false);
const add2 = addElement(2, 'JAVA 6', false);
const add3 = addElement(3, 'JAVA 7', false);
store.dispath(add1)
store.dispath(add2)
store.dispath(add3)
/*console.log(JSON.stringify(store, null, 4))*/

/*кейс изменения статуса*/
console.log('CHANGE 2 STATUS')
const change1 = changeStatus(1, true);
const change2 = changeStatus(3, true);
store.dispath(change1)
store.dispath(change2)
/*console.log(JSON.stringify(store, null, 4))*/

/*кейс удаления*/
console.log('DELETE 1 ELEMENT')
const deleteAction = deleteElement(3);
store.dispath(deleteAction)
/*console.log(JSON.stringify(store, null, 4))*/

console.log('ADD 1 ELEMENT')
const add4 = addElement(4, 'JAVA 8', false);
store.dispath(add4)

console.log('DELETE 1 ELEMENT')
const del1 = deleteElement(1);
const del2 = deleteElement(2);
const del4 = deleteElement(4);
store.dispath(del1)
store.dispath(del2)
store.dispath(del4)

console.log(JSON.stringify(store, null, 4))

/*TODO спросить у Кости или загуглить wtf*/
/*строчка оказывается очень нужна для того что бы потом в другом файле импортить этот класс*/
/*из тучи гайдов, помог этот http://unitjs.com/guide/mocha.html*/
module.exports = Store;