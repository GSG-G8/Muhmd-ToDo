let todoId = JSON.parse(localStorage.getItem("todoId"));
if (!todoId) {
    todoId = 0;
}
const generateId = () => {
    todoId++;
    localStorage.setItem("todoId", JSON.stringify(todoId));
    return todoId;
}

const addTodo = (array, todo) => [...array, todo];

const deleteTodo = (array, Id) => array.filter(todo => todo.id !== Id);


if (typeof exports !== "undefined") {
    module.exports = {
        generateId,
        addTodo,
        deleteTodo
    }
}