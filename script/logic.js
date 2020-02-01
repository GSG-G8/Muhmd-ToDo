const generateId = (() => {
    let idCounter = 0;
    const incrementCounter = () => idCounter++;
    return incrementCounter;
})()

const addTodo = (array, todo) => [...array, todo];

const removeTodo = (array, Id) => array.filter(todo => todo.id !== Id);


if (typeof exports !== "undefined") {
    module.exports = {
        addTodo,
        removeTodo
    }
}