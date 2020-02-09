const functions = require("./logic");
const addTodo = functions.addTodo;
const deleteTodo = functions.deleteTodo;
const generateId = functions.generateId;
const markTodo = functions.markTodo;
const cloneArrayOfObjects = functions.cloneArrayOfObjects;

const dataArray = [{
    id: 0,
    description: "Playing football with the gang",
    done: false
}];
const todo = {
        id: 1,
        description: "Playing Basketball with the gang",
        done: true
};

const array1 = [{
        id: 0,
        description: "Playing football with the gang",
        done: false
    },
    {
        id: 1,
        description: "Playing Basketball with the gang",
        done: true
    }
];

const array2 = [{
    id: 0,
    description: "Playing football with the gang",
    done: false
},
{
    id: 1,
    description: "Playing Basketball with the gang",
    done: false
}
];

test("id to be increased", () => {
    expect(generateId()).toEqual(1);
});

test("expected new array", () => {
    expect(addTodo(dataArray, todo)).toEqual(array1);
    // console.log(addTodo(dataArray, todo))
});

test("Remove object from an array", () => {
    expect(deleteTodo(array1, 1)).toEqual(dataArray);
});

test("Mark object as done", () => {
    expect(markTodo(array1, 1)).toEqual(array2);
});