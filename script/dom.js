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