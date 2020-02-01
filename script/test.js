const functions = require("./logic");
const addTodo = functions.addTodo;
const removeTodo = functions.removeTodo;

let dataArray = [{
    id: 0,
    Name: "Football",
    Details: "Playing football with the gang",
    Done: false
}];
let todo = {
    id: 1,
    Name: "Basketball",
    Details: "Playing Basketball with the gang",
    Done: true
};

let newArray = [{
        id: 0,
        Name: "Football",
        Details: "Playing football with the gang",
        Done: false
    },
    {
        id: 1,
        Name: "Basketball",
        Details: "Playing Basketball with the gang",
        Done: true
    }
];
test("expected new array", () => {
    expect(addTodo(dataArray, todo)).toEqual(newArray);
});

test("Remove object from an array", () => {
    expect(removeTodo(newArray, 1)).toEqual(dataArray);
});