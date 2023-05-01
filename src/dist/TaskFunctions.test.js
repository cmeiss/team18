"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var TaskFunctions_1 = require("./TaskFunctions");
// Creating a test task to use as a immuatable object in all tests
var TESTTASK = {
    id: 0,
    name: "test",
    description: "taskfunc test task",
    status: false,
    image: "blank",
    steps: ["i", "am", "immutable"],
    difficulty: 0,
    numUsers: 0,
    time: "0"
};
// Backup task, to ensure changes are immutable
var BACKUPTASK = {
    id: 1,
    name: "test",
    description: "taskfunc test task",
    status: false,
    image: "blank",
    steps: ["i", "am", "immutable"],
    difficulty: 0,
    numUsers: 0,
    time: "0"
};
var STEPS = ["1", "2", "3"];
var BACKUPSTEPS = ["1", "2", "3"];
// some more tasks
var TASK2 = TaskFunctions_1.makeTask(3, "test2", "taskarr ind 1", true, "dog", ["walk", "feed"], 1, 0, "1");
var TASK3 = TaskFunctions_1.makeTask(4, "task3", "taskarr ind 2", false, "cat", ["pet", "love", "feed"], 3, 1, "2");
// Immutable task array
var TASKARR = [TESTTASK, TASK2, TASK3];
// Use to ensure immutable
var BACKUPTASKARR = [TESTTASK, TASK2, TASK3];
describe("Testing the task functions", function () {
    test("Testing the makeTask function", function () {
        expect(TaskFunctions_1.makeTask(0, "test", "taskfunc test task", false, "blank", ["i", "am", "immutable"], 0, 0, "0")).toEqual(TESTTASK);
    });
    test("Testing the delTask function", function () {
        expect(TaskFunctions_1.delTask(TESTTASK, TASKARR)).toEqual([TASK2, TASK3]);
        expect(TaskFunctions_1.delTask(TASK2, TASKARR)).toEqual([TESTTASK, TASK3]);
        expect(TaskFunctions_1.delTask(__assign(__assign({}, BACKUPTASK), { name: "na" }), TASKARR)).toEqual(TASKARR);
    });
    test("Testing the setSteps function", function () {
        expect(TaskFunctions_1.setSteps(STEPS, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["1", "2", "3"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
        expect(TaskFunctions_1.setSteps(["3", "2", "1"], TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["3", "2", "1"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
    });
    test("Testing the setDifficultly function", function () {
        expect(TaskFunctions_1.setDifficulty(2, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 2,
            numUsers: 0,
            time: "0"
        });
        expect(TaskFunctions_1.setDifficulty(10, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 10,
            numUsers: 0,
            time: "0"
        });
    });
    test("Testing the setNumUsers function", function () {
        expect(TaskFunctions_1.setNumUsers(2, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 2,
            time: "0"
        });
        expect(TaskFunctions_1.setNumUsers(10, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 10,
            time: "0"
        });
    });
    test("Testing the setTime function", function () {
        expect(TaskFunctions_1.setTime("200", TESTTASK)).toEqual({
            // we may want this to be a string rather than a number so we can do 2:00pm
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "200"
        });
        expect(TaskFunctions_1.setTime("500", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "500"
        });
    });
    test("Testing the setName function", function () {
        expect(TaskFunctions_1.setName("Clarkson", TESTTASK)).toEqual({
            id: 0,
            name: "Clarkson",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
        expect(TaskFunctions_1.setName("Jeremy", TESTTASK)).toEqual({
            id: 0,
            name: "Jeremy",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
    });
    test("Testing the setDiscription function", function () {
        expect(TaskFunctions_1.setDescription("A wonderfully delicate meal", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "A wonderfully delicate meal",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
        expect(TaskFunctions_1.setDescription("A lovely stew", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "A lovely stew",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
    });
    test("Testing the setStatus function", function () {
        expect(TaskFunctions_1.setStatus(true, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: true,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
        expect(TaskFunctions_1.setStatus(false, TASK2)).toEqual({
            id: 0,
            name: "test2",
            description: "taskarr ind 1",
            status: false,
            image: "dog",
            steps: ["walk", "feed"],
            difficulty: 1,
            numUsers: 0,
            time: "1"
        });
    });
    test("Testing the setImage function", function () {
        expect(TaskFunctions_1.setImage("A picture of despair", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "A picture of despair",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
        expect(TaskFunctions_1.setImage("A quaint city in the woods", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "A quaint city in the woods",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0"
        });
    });
    test("Testing the addTask function", function () {
        expect(TaskFunctions_1.addTask(TASK2, TASKARR)).toEqual([
            TESTTASK,
            TASK2,
            TASK3,
            TASK2
        ]);
        expect(TaskFunctions_1.addTask(TASK3, TASKARR)).toEqual([
            TESTTASK,
            TASK2,
            TASK3,
            TASK3
        ]);
    });
    afterEach(function () {
        expect(TESTTASK).toEqual(BACKUPTASK);
        expect(TASKARR).toEqual(BACKUPTASKARR);
        expect(STEPS).toEqual(BACKUPSTEPS);
    });
});
