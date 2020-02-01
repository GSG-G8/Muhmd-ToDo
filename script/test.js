const functions = require("./logic");
const onePlusOne = functions.onePlusOne;
const addTodo = functions.addTodo;

test("test my file", () => {
    expect(onePlusOne(2)).toBe(3);
})
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

let newArray = [{
    id: 0,
    Name: "Football",
    Details: "Playing football with the gang",
    Done: false
}, {
    id: 1,
    Name: "Basketball",
    Details: "Playing Basketball with the gang",
    Done: true
}]
test("expected new array", () => {
    expect(addTodo(dataArray, todo).toEqual(newArray));
})