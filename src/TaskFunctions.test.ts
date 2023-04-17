import { Task } from "./interfaces/task";

import {
    makeTask,
    addTask,
    /*deleteTask,*/
    setName,
    setDescription,
    setStatus,
    setImage /*, 
    setSteps, 
    setDiff, 
    setNumUsers, 
    setTime*/
} from "./TaskFunctions";

// Creating a test task to use as a immuatable object in all tests
const TESTTASK: Task = {
    name: "test",
    description: "taskfunc test task",
    status: false,
    image: "blank",
    steps: [],
    difficulty: 0,
    numUsers: 0,
    time: 0
};

// Backup task, to ensure changes are immutable
const BACKUPTASK: Task = TESTTASK;

// Immutable task array
const TASKARR: Task[] = [
    TESTTASK,
    makeTask("test2", "taskarr ind 1", true, "dog", ["walk", "feed"], 1, 0, 1),
    makeTask(
        "task3",
        "taskarr ind 2",
        false,
        "cat",
        ["pet", "love", "feed"],
        3,
        1,
        2
    )
];

// Use to ensure immutable
const BACKUPTASKARR: Task[] = TASKARR;

describe("Testing the task functions", () => {
    test("Testing the makeTask function", () => {
        expect(
            makeTask("test", "taskfunc test task", false, "blank", [], 0, 0, 0)
        ).toEqual(TESTTASK);
    });

    test("Testing the delete task function"), () => 
});
