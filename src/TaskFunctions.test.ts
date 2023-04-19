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
            makeTask(
                "test",
                "taskfunc test task",
                false,
                "blank",
                ["i", "am", "immutable"],
                0,
                0,
                0
            )
        ).toEqual(TESTTASK);
    });
    test("Testing the delTask function", () => {
        expect(delTask(TESTTASK, TASKARR)).toEqual([TASK2, TASK3]);
        expect(delTask(TASK2, TASKARR)).toEqual([TESTTASK, TASK3]);
        expect(delTask({ ...BACKUPTASK, name: "na" }, TASKARR)).toEqual(
            TASKARR
        );
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
    test("Testing the setDifficultly function", () => {
        expect(setDifficulty(2, TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 2,
            numUsers: 0,
            time: 0
        });
        expect(setDifficulty(10, TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 10,
            numUsers: 0,
            time: 0
        });
    });
    test("Testing the setNumUsers function", () => {
        expect(setNumUsers(2, TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 2,
            time: 0
        });
        expect(setNumUsers(10, TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 10,
            time: 0
        });
    });
    test("Testing the setTime function", () => {
        expect(setTime(200, TESTTASK)).toEqual({
            // we may want this to be a string rather than a number so we can do 2:00pm
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 200
        });
        expect(setTime(500, TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 500
        });
    });
    test("Testing the setName function", () => {
        expect(setName("Clarkson", TESTTASK)).toEqual({
            name: "Clarkson",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
        expect(setName("Jeremy", TESTTASK)).toEqual({
            name: "Jeremy",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
    });
    test("Testing the setDiscription function", () => {
        expect(setDescription("A wonderfully delicate meal", TESTTASK)).toEqual(
            {
                name: "test",
                description: "A wonderfully delicate meal",
                status: false,
                image: "blank",
                steps: ["i", "am", "immutable"],
                difficulty: 0,
                numUsers: 0,
                time: 0
            }
        );
        expect(setDescription("A lovely stew", TESTTASK)).toEqual({
            name: "test",
            description: "A lovely stew",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
    });
    test("Testing the setStatus function", () => {
        expect(setStatus(true, TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: true,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
        expect(setStatus(false, TASK2)).toEqual({
            name: "test2",
            description: "taskarr ind 1",
            status: false,
            image: "dog",
            steps: ["walk", "feed"],
            difficulty: 1,
            numUsers: 0,
            time: 1
        });
    });
    test("Testing the setImage function", () => {
        expect(setImage("A picture of despair", TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "A picture of despair",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
        expect(setImage("A quaint city in the woods", TESTTASK)).toEqual({
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "A quaint city in the woods",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: 0
        });
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
