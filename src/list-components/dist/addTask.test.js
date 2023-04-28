"use strict";
exports.__esModule = true;
var react_1 = require("react");
var addTask_1 = require("./addTask");
var react_2 = require("@testing-library/react");
var user_event_1 = require("@testing-library/user-event");
//basic tasks/list to test
var TASK1 = {
    name: "task1",
    description: "description",
    status: false,
    image: "image",
    steps: ["one", "two", "three"],
    difficulty: 0,
    numUsers: 0,
    time: 1010
};
var TASK2 = {
    name: "task2",
    description: "description",
    status: false,
    image: "image",
    steps: ["four", "five", "six"],
    difficulty: 1,
    numUsers: 1,
    time: 1100
};
var TASKLIST1 = [TASK1, TASK2];
//actual tests
describe("Add tasks tests", function () {
    beforeEach(function () {
        return react_2.render(react_1["default"].createElement(addTask_1.AddTask, { item: TASK1, tasks: TASKLIST1, setTasks: function ( /*newTasks: Tasks[]*/) {
                throw new Error("Function not implemented.");
            } }));
    });
    test("There is a switch", function () {
        var switchButton = react_2.screen.getByRole("switch");
        expect(switchButton).toBeInTheDocument();
    });
    test("On switch click, there is a textbox and buttons: ", function () {
        var switchButton = react_2.screen.getByRole("switch");
        switchButton.click();
        var addTask = react_2.screen.getByRole("button", {
            name: /Add Task and Leave Edit Mode/i
        });
        expect(react_2.screen.getByRole("textbox")).toBeInTheDocument();
        expect(addTask).toBeInTheDocument();
    });
    test("Clicking add task adds a task and leaves edit mode", function () {
        // setting up the scenario
        var switchButton = react_2.screen.getByRole("switch");
        switchButton.click();
        var addTask = react_2.screen.getByRole("button", {
            name: /Add Task and Leave Edit Mode/i
        });
        var inputUser = react_2.screen.getByRole("textarea");
        user_event_1["default"].type(inputUser, "task test");
        // on add user button click
        addTask.click();
        // need help figuring out if it actually adds a user
        // leaves edit mode: no textbox and no buttons
        expect(react_2.screen.getByRole("textarea")).toBeNull();
        expect(react_2.screen.getByRole("button")).toBeNull();
        // may need to render the roll select dropdown. At this moment I dont see how we do that without rendering
        //all of App. we will come back to this later
    });
});
