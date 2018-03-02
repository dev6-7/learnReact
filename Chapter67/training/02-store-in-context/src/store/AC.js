import { ADD_ITEM } from './constants'

export function addItem(id, text, done = false) {
    return {
        type: ADD_ITEM,
        payload: { id, text, done }
    }
}