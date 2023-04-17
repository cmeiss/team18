import { Task } from "./interfaces/task";

import {
    makeTask,
    addTask,
    delTask,
    setName,
    setDescription,
    setStatus,
    setImage,
    setSteps,
    setDifficulty,
    setNumUsers,
    setTime
} from "./TaskFunctions";
import { deleteTask } from "./user-functions";

// Creating a test task to use as a immuatable object in all tests
const TESTTASK: Task = {
    name: "test",
    description: "taskfunc test task",
    status: false,
    image: "blank",
    steps: ["i", "am", "immutable"],
    difficulty: 0,
    numUsers: 0,
    time: 0
};

// Backup task, to ensure changes are immutable
const BACKUPTASK: Task = {
    name: "test",
    description: "taskfunc test task",
    status: false,
    image: "blank",
    steps: ["i", "am", "immutable"],
    difficulty: 0,
    numUsers: 0,
    time: 0
};

const STEPS: string[] = ["1", "2", "3"];
const BACKUPSTEPS: string[] = ["1", "2", "3"];

// some more tasks
const TASK2: Task = makeTask(
    "test2",
    "taskarr ind 1",
    true,
    "dog",
    ["walk", "feed"],
    1,
    0,
    1
);
const TASK3: Task = makeTask(
    "task3",
    "taskarr ind 2",
    false,
    "cat",
    ["pet", "love", "feed"],
    3,
    1,
    2
);
// Immutable task array
const TASKARR: Task[] = [TESTTASK, TASK2, TASK3];

// Use to ensure immutable
const BACKUPTASKARR: Task[] = [TESTTASK, TASK2, TASK3];

describe("Testing the task functions", () => {
    test("Testing the makeTask function", () => {
        expect(
            makeTask("test", "taskfunc test task", false, "blank", [], 0, 0, 0)
        ).toEqual(TESTTASK);
    });
    test("Testing the delTask function", () => {
        expect(delTask(TESTTASK, TASKARR)).toEqual([TASK2, TASK3]);
        expect(delTask(TASK2, TASKARR)).toEqual([TESTTASK, TASK3]);
        expect(delTask(BACKUPTASK, TASKARR)).toEqual([TASKARR]);
    });
    test("Testing the setSteps function", () => {
        expect(setSteps(STEPS, TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["1", "2", "3"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
        expect(setSteps(["3", "2", "1"], TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["3", "2", "1"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
    });
    afterEach(() => {
        expect(TESTTASK).toEqual(BACKUPTASK);
        expect(TASKARR).toEqual(BACKUPTASKARR);
        expect(STEPS).toEqual(BACKUPSTEPS);
    });
});
