import { Task } from "./interfaces/task";

import { makeTask, addTask, delTask } from "./TaskFunctions";

// Creating a test task to use as a immuatable object in all tests
const TESTTASK: Task = {
    id: 0,
    name: "test",
    description: "taskfunc test task",
    status: false,
    image: "blank",
    steps: ["i", "am", "immutable"],
    difficulty: 0,
    numUsers: 0,
    time: "0",
    pendingMode: false
};

// Backup task, to ensure changes are immutable
const BACKUPTASK: Task = {
    id: 0,
    name: "test",
    description: "taskfunc test task",
    status: false,
    image: "blank",
    steps: ["i", "am", "immutable"],
    difficulty: 0,
    numUsers: 0,
    time: "0",
    pendingMode: false
};

const STEPS: string[] = ["1", "2", "3"];
const BACKUPSTEPS: string[] = ["1", "2", "3"];

// some more tasks
const TASK2: Task = makeTask(
    1,
    "test2",
    "taskarr ind 1",
    true,
    "dog",
    ["walk", "feed"],
    1,
    0,
    "1",
    false
);
const TASK3: Task = makeTask(
    2,
    "task3",
    "taskarr ind 2",
    false,
    "cat",
    ["pet", "love", "feed"],
    3,
    1,
    "2",
    false
);
// Immutable task array
const TASKARR: Task[] = [TESTTASK, TASK2, TASK3];

// Use to ensure immutable
const BACKUPTASKARR: Task[] = [TESTTASK, TASK2, TASK3];

describe("Testing the task functions", () => {
    test("Testing the makeTask function", () => {
        expect(
            makeTask(
                0,
                "test",
                "taskfunc test task",
                false,
                "blank",
                ["i", "am", "immutable"],
                0,
                0,
                "0",
                false
            )
        ).toEqual(TESTTASK);
    });
    test("Testing the delTask function", () => {
        expect(delTask(TESTTASK, TASKARR)).toEqual([TASK2, TASK3]);
        expect(delTask(TASK2, TASKARR)).toEqual([TESTTASK, TASK3]);
        expect(delTask({ ...BACKUPTASK, id: 9999 }, TASKARR)).toEqual(TASKARR);
    });
    test("Testing the addTask function", () => {
        expect(addTask(TASK2, TASKARR)).toEqual([
            TESTTASK,
            TASK2,
            TASK3,
            TASK2
        ]);
        expect(addTask(TASK3, TASKARR)).toEqual([
            TESTTASK,
            TASK2,
            TASK3,
            TASK3
        ]);
    });
    afterEach(() => {
        expect(TESTTASK).toEqual(BACKUPTASK);
        expect(TASKARR).toEqual(BACKUPTASKARR);
        expect(STEPS).toEqual(BACKUPSTEPS);
    });
});
