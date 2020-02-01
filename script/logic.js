const onePlusOne = (num) => {
    return num + 1;
}

const addTodo = (array, todo) => {
    return [...array, todo]
}

let dataArray = [{
    id: 0,
    Name: "Football",
    Details: "Playing football with the gang",
    Done: false
}]
let todo = {
    id: 1,
    Name: "Basketball",
    Details: "Playing Basketball with the gang",
    Done: true
}

console.log(addTodo(dataArray, todo))



if (typeof exports !== "undefined") {
    module.exports = {
        onePlusOne,
        addTodo
    }
}