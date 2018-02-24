/*декомпозируем метод добавления в стор*/

let store = {
    list: [
        {id: 1, theme: "React", description: "Complete chapter5", date: new Date(), complete: false},
        {id: 2, theme: "JavaScript", description: "Complete chapter5_2", date: new Date(), complete: false}
    ]
}

/*Чистая функция та, которая не затрагивает внешние объекты и ресурсы, работает только с входными параметрами*/
function addElement(store, id, theme, description, date, complete = false){
    store = Object.assign({}, store)
    store.list = store.list.slice(1, 3);
    store.list.push({id, theme, description, date, complete})
    return store;
}

store = addElement(store, 3, 'scala', 'functionalshina', new Date(), false);
console.log(JSON.stringify(store, null, 4));


/*Object.assign play*/
/*For deep cloning, we need to use other alternatives because Object.assign() copies property values.
If the source value is a reference to an object, it only copies that reference value.*/

const object1 = {
    a: 1,
    b: 2,
    c: {list: 123, id2: '123'},
    d: [{id:3},{id:5}],
    e: store
};

store.list.push(4, 'PHP', 'never give up', new Date(), false);

const object2 = Object.assign({}, object1);

/*ну да, в итоге ссылка скопировалась не в тему*/
console.log(JSON.stringify(object2, null, 4));