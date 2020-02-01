let todoId = JSON.parse(localStorage.getItem("todoId"));
if (!todoId) {
    todoId = -1;
}
const generateId = () => {
    todoId++;
    localStorage.setItem("todoId", JSON.stringify(todoId));
    return todoId;
}

const addTodo = (array, todo) => [...array, todo];

const removeTodo = (array, Id) => array.filter(todo => todo.id !== Id);


if (typeof exports !== "undefined") {
    module.exports = {
        generateId,
        addTodo,
        removeTodo
    }
}