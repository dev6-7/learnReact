import {ADD_ITEM} from "./constants";

// Редюсер отвечающий за элементы массива. Д.б. чистой функцией
export function itemReducer(state, action) {
    switch (action.type) {

        case ADD_ITEM:
            // Копируем объект
            state = Object.assign({}, state)
            state.list = state.list.slice()
            state.list.push(action.payload)
            return state

        default:
            return state

    }
}