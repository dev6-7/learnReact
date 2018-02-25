let assert = require('assert')
let myStore

describe('Store', function() {
    before(function() {
        Store = require('../src/main')
        myStore = new Store({list: []})
    });

    describe('addElementAction', function(){
        it('should save element and length return 3', function () {
            myStore.dispath({type: 'ADD_ITEM', payload: {id: 1, text: 'addTest', done: false}})
            assert.equal(myStore.store.list.length, 1)
        });
    });

    describe('changeStatusAction', function(){
       it('should change status of first element to true', function(){
           myStore.dispath({type: 'CHANGE_STATUS', payload: {id: 1, done: true}})
           assert.equal(myStore.store.list.find( el => el.id == 1).done, true)
       });
    });

    describe('deleteElementAction', function(){
       it('should change status of first element to true', function(){
           myStore.dispath({type: 'DELETE_ITEM', payload: {id: 1}})
           assert.equal(myStore.store.list.length, 0)
       });
    });
});