"use strict";
exports.__esModule = true;
var react_1 = require("react");
var deleteTask_component_1 = require("./deleteTask-component");
var react_2 = require("@testing-library/react");
var user_event_1 = require("@testing-library/user-event");
//basic tasks and task lists to test
var TASK1 = {
    id: 0,
    name: "task1",
    description: "description",
    status: false,
    image: "image",
    steps: ["one", "two", "three"],
    difficulty: 0,
    numUsers: 0,
    time: "1010"
};
var TASK2 = {
    id: 1,
    name: "task2",
    description: "description",
    status: false,
    image: "image",
    steps: ["four", "five", "six"],
    difficulty: 1,
    numUsers: 1,
    time: "1100"
};
/*const TASK3: Task = {
    name: "task3",
    description: "description",
    status: false,
    image: "image",
    steps: ["seven", "eight", "nine"],
    difficulty: 2,
    numUsers: 2,
    time: 1200
}; */
var TASKLIST1 = [TASK1, TASK2];
//const TASKLIST2 = [TASK3];
//const TASKLIST3 = [TASK1, TASK2, TASK3];
//actual tests
describe("Delete task tests", function () {
    beforeEach(function () {
        return react_2.render(react_1["default"].createElement(deleteTask_component_1.DeleteTask
        //item={TASK1}
        , { 
            //item={TASK1}
            tasks: TASKLIST1, setTasks: function ( /*newTasks: Task[]*/) {
                throw new Error("function not implemented");
            } }));
    });
    test("There is a switch", function () {
        var switchButton = react_2.screen.getByRole("switch");
        expect(switchButton).toBeInTheDocument();
    });
    test("On switch click, there is a textbox and buttons: ", function () {
        var switchButton = react_2.screen.getByRole("switch");
        switchButton.click();
        var deltask1 = react_2.screen.getByRole("button", {
            name: /Delete Task and Leave Edit Mode/i
        });
        expect(react_2.screen.getByRole("textarea")).toBeInTheDocument();
        expect(deltask1).toBeInTheDocument();
    });
    test("Clicking delete task deletes from the list and leaves edit mode", function () {
        var switchButton = react_2.screen.getByRole("switch");
        switchButton.click();
        var delTask = react_2.screen.getByRole("button", {
            name: /Delete Task and Leave Edit Mode/i
        });
        var inputUser = react_2.screen.getByRole("textarea");
        user_event_1["default"].type(inputUser, "task test");
        // on delete task button click
        delTask.click();
        expect(react_2.screen.getByRole("textarea")).toBeNull();
        expect(react_2.screen.getByRole("button")).toBeNull();
    });
});
