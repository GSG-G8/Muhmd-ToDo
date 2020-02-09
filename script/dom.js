// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const addTodoForm = document.getElementById("add-todo");

  let state = [
    { id: -3, description: "first todo" },
    { id: -2, description: "second todo" },
    { id: -1, description: "third todo" }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  const createTodoNode = function(todo) {
    const todoNode = document.createElement("li");
    // you will need to use addEventListener

    // add span holding description
    const todoSpan = document.createElement("span");
    todoSpan.textContent = todo.description;

    // this adds the delete button
    const deleteButtonNode = document.createElement("button");
    deleteButtonNode.textContent = "Remove";
    deleteButtonNode.addEventListener("click", function(event) {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    // add markTodo button

    const markTodoCheck = document.createElement("input");
    markTodoCheck.setAttribute("type", "checkbox");
    markTodoCheck.className = "checkbox";
    todo.done
      ? (markTodoCheck.checked = true)
      : (markTodoCheck.checked = false);
    // todoSpan.classList.toggle('Done');

    markTodoCheck.addEventListener("click", event => {
      const newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    // add classes for css
    todoNode.className = "description__li";
    todoSpan.className = "description__span";
    deleteButtonNode.className = "remove__btn";

    todoNode.appendChild(todoSpan);
    todoNode.appendChild(markTodoCheck);
    todoNode.appendChild(deleteButtonNode);
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      event.preventDefault(); // event.target ....

      const newState = todoFunctions.addTodo(state, {
        id: todoFunctions.generateId(),
        description: addTodoForm.description.value,
        done: false
      });
      update(newState);
    });
  }

  // you should not need to change this function
  const update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  const renderState = function(state) {
    const todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
