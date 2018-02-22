/*Минус глобального стора в том, что от него нельзя создать локальные, а в глобальный каждый может бесконтрольного писать всё что угодно
* в результате чего мы не будем знать почему у нас в сторе кривые значения и какого фига они там.*/

let store = {
    list: [
        {id: 1, theme: "React", description: "Complete chapter5", date: new Date(), complete: false},
        {id: 2, theme: "JavaScript", description: "Complete chapter5_2", date: new Date(), complete: false}
    ]
}

store.list.push({id: 3, theme: "CSS3", description: "Complete chapter5_3", date: new Date(), complete: false})

console.log(JSON.stringify(store.list));