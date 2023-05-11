"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var CentralItemList_1 = require("./CentralItemList");
var CustomRender_1 = require("../CustomRender");
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
        time: "1345",
        pendingMode: false
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
        time: "1345",
        pendingMode: false
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
        time: "1345",
        pendingMode: false
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
        CustomRender_1.renderWithDnd(react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: tasks, role: role1, setTasks: setTasks }));
    });
    //test1: check that every task in array is displayed by accessing their name
    test("all tasks are displayed", function () {
        TaskList.every(function (task) {
            var taskDisplayed = react_2.screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
});
//testing with role being admin
describe("CentralItemList with Role admin", function () {
    beforeEach(function () {
        CustomRender_1.renderWithDnd(react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: TaskList, role: role2, setTasks: setTasks }));
    });
    test("all tasks are displayed", function () {
        TaskList.every(function (task) {
            var taskDisplayed = react_2.screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
});
//testing with role being user
describe("CentralItemList with Role user", function () {
    beforeEach(function () {
        CustomRender_1.renderWithDnd(react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: TaskList, role: role3, setTasks: setTasks }));
    });
    test("all tasks are displayed", function () {
        TaskList.every(function (task) {
            var taskDisplayed = react_2.screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
});
