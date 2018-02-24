// Плюсы: можем насоздавать много сторов, экшены для действий над данными, модель в каком то виде
// Минусы: сложно понять и принять концепцию экшенов и редъюсеров, пного писанины с AC и редъюсерами

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
console.log('ADD ELEMENT')
const store = new Store({
    list: [
        { id: 1, text: 'Yo!', done: false },
        { id: 2, text: 'Vasiliy', done: false },
    ]
})
const action = addElement(3, 'JAVA 10', false);
store.dispath(action)
console.log(JSON.stringify(store, null, 4))

/*кейс изменения статуса*/
console.log('CHANGE STATUS')
const addJava7 = addElement(4, 'JAVA 7', false);
store.dispath(addJava7)
const changeAction = changeStatus(4, true);
store.dispath(changeAction)
console.log(JSON.stringify(store, null, 4))

/*кейс удаления Василия*/
console.log('DELETE ELEMENT')
const deleteAction = deleteElement(2);
store.dispath(deleteAction)
console.log(JSON.stringify(store, null, 4))