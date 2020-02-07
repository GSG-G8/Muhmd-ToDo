// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
    var state = [
      { id: -3, description: 'first todo' },
      { id: -2, description: 'second todo' },
      { id: -1, description: 'third todo' },
    ]; // this is our initial todoList
  
    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
      // you will need to use addEventListener
  
      // add span holding description
      const todoSpan = document.createElement('span');
      todoSpan.textContent = todo.description;
  
      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.textContent = "Remove";
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      
  
      // add markTodo button

      const markTodoCheck = document.createElement('input');
      markTodoCheck.setAttribute('type','checkbox');
      markTodoCheck.className = "checkbox";
  
      // add classes for css
  

      todoNode.appendChild(todoSpan);
      todoNode.appendChild(markTodoCheck);
      todoNode.appendChild(deleteButtonNode);
      return todoNode;
    };
  
    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        // what does event.preventDefault do?
        // what is inside event.target?
        
        var description = event.preventDefault(); // event.target ....

        var newState = todoFunctions.addTodo(state,addTodoForm.description.value);
        update(newState);
      });
    }
  
    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
  
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });
  
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);
  })();


/* ===============================================*/

/*
const inputName = document.querySelector('#addName');
const inputDetails = document.querySelector('#addDetails');
const inputDate = document.querySelector('#addDate');
const inputDone = document.querySelector('#todoDone');
const addButton = document.querySelector('#addButton');

let dataArray = JSON.parse(localStorage.getItem("dataArray"));

if (!dataArray) {
    dataArray = [];
}

addButton.addEventListener('click', () => {
    dataArray = addTodo(dataArray, {
        id: generateId(),
        Name: inputName.value,
        Details: inputDetails.value,
        Date: inputDate.value,
        Done: inputDone.checked
    });
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    location.reload();
});

for (let i = 0; i < dataArray.length; i++) {
    const showSectionDiv = document.createElement('div');
    showSectionDiv.setAttribute('class', "showSection__div");
    const idLabel = document.createElement('label');
    idLabel.textContent = `${dataArray[i]['id']}`;
    const nameLabel = document.createElement('label');
    nameLabel.textContent = `${dataArray[i]['Name']}`;
    const detailsLabel = document.createElement('label');
    detailsLabel.textContent = `${dataArray[i]['Details']}`;
    const dateLabel = document.createElement('label');
    dateLabel.textContent = `${dataArray[i]['Date']}`;
    const checkboxShow = document.createElement('input');
    checkboxShow.setAttribute('type', "checkbox");
    dataArray[i]['Done'] ? checkboxShow.checked = true : checkboxShow.checked = false;
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";

    const showSection = document.querySelector('.show-section');

    showSection.appendChild(showSectionDiv);
    showSectionDiv.appendChild(idLabel);
    showSectionDiv.appendChild(nameLabel);
    showSectionDiv.appendChild(detailsLabel);
    showSectionDiv.appendChild(dateLabel);
    showSectionDiv.appendChild(checkboxShow);
    showSectionDiv.appendChild(removeButton);


    removeButton.addEventListener('click', () => {
        dataArray = deleteTodo(dataArray, dataArray[i]['id']);
        localStorage.setItem("dataArray", JSON.stringify(dataArray));
        location.reload();
    })

}

*/