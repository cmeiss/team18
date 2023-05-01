"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var CentralItemList_1 = require("./CentralItemList");
var TaskList = [
    {
        id: 0,
        name: "test1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345"
    },
    {
        id: 0,
        name: "test2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345"
    },
    {
        id: 2,
        name: "test3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345"
    }
];
var tasks = TaskList;
//this function does nothing and exists only to be able to call the component
function setTasks(newTasks) {
    newTasks;
}
var role1 = "super";
var role2 = "admin";
var role3 = "user";
//testing with role being super
describe("CentralItemList with Role super", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: tasks, role: role1, setTasks: setTasks }));
    });
    //test1: check that every task in array is displayed by accessing their name
    test("all tasks are displayed", function () {
        TaskList.every(function (task) {
            var taskDisplayed = react_2.screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
    //test2: check that there is a button to add a task if role is super
    test("There is a button to add tasks if role is super", function () {
        var addTButton = react_2.screen.getByRole("button", { name: /Add Task/i });
        expect(addTButton).toBeInTheDocument();
    });
    //test3: there is a button to add a user if the role is super
    test("There is a button to add a user", function () {
        var addUButton = react_2.screen.getByRole("button", { name: /Add User/i });
        expect(addUButton).toBeInTheDocument();
    });
    //
});
//testing with role being admin
describe("CentralItemList with Role admin", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: TaskList, role: role2, setTasks: setTasks }));
    });
    //testing that there is a button to addTasks if role is admin
    test("There is a button to addTasks if role is admin", function () {
        var addTButton = react_2.screen.getByRole("button", { name: /Add Task/i });
        expect(addTButton).toBeInTheDocument();
    });
    //testing that there isn't an addUserButton if role is admin
    test("There isn't a button to add a user", function () {
        var addUButton = react_2.screen.queryByRole("button", { name: /Add User/i });
        expect(addUButton).toBeNull();
    });
});
//testing with role being user
describe("CentralItemList with Role user", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: TaskList, role: role3, setTasks: setTasks }));
    });
    //testing that there is no addTasks button if role is user (not admin or super)
    test("There isn't a button to addTasks if role is user", function () {
        var addTButton = react_2.screen.queryByRole("button", { name: /Add Task/i });
        expect(addTButton).toBeNull();
    });
});
