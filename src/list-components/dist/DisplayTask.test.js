"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var DisplayTask_1 = require("./DisplayTask");
var CustomRender_1 = require("../CustomRender");
var testTask = {
    id: 0,
    name: "test",
    description: "this is the description",
    status: false,
    image: "picture",
    steps: ["a", "b", "c", "GutenTag", "469476"],
    difficulty: 3,
    numUsers: 2,
    time: "1345",
    pendingMode: false
};
var TaskList = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
var testRole1 = "Super";
var testRole2 = "admin";
//testing with role being super
describe("DisplayView Tests", function () {
    beforeEach(function () {
        CustomRender_1.renderWithDnd(react_1["default"].createElement(DisplayTask_1.DisplayTask, { task: testTask, tasks: tasks, updateTasks: setTasks, role: testRole1 }));
    });
    test("Taskname is displayed", function () {
        var taskName = react_2.screen.getByText(testTask.name);
        expect(taskName).toBeInTheDocument();
    });
    test("Num of TaskUsers is there if role is super", function () {
        var num = react_2.screen.getByText("Number of Users: 2");
        expect(num).toBeInTheDocument();
    });
    test("There is a checkbox", function () {
        var doneCheckbox = react_2.screen.getByText(/Completion Status:/);
        expect(doneCheckbox).toBeInTheDocument();
    });
    test("Description of the task is displayed", function () {
        var desc = react_2.screen.getByText(/this is the description/i);
        expect(desc).toBeInTheDocument();
    });
    test("Steps are displayed", function () {
        testTask.steps.every(function (step) {
            var text = react_2.screen.getByText(step);
            expect(text).toBeInTheDocument;
        });
    });
    test("difficulty of task is displayed", function () {
        var diff = react_2.screen.getByText(/Difficulty:/i);
        expect(diff).toBeInTheDocument();
    });
    test("time is displayed", function () {
        var time = react_2.screen.getByText(/1345/i);
        expect(time).toBeInTheDocument();
    });
});
//testing with role being admin
describe("DisplayView Tests", function () {
    beforeEach(function () {
        CustomRender_1.renderWithDnd(react_1["default"].createElement(DisplayTask_1.DisplayTask, { task: testTask, tasks: tasks, updateTasks: setTasks, role: testRole2 }));
    });
    test("Num of TaskUsers is not there if role is admin", function () {
        expect(react_2.screen.queryByText(/Number of User/i)).toBeNull();
    });
});
