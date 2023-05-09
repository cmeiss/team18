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
    id: 1,
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
    3,
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
    4,
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
        expect(delTask({ ...BACKUPTASK, name: "na" }, TASKARR)).toEqual(
            TASKARR
        );
    });
    test("Testing the setSteps function", () => {
        expect(setSteps(STEPS, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["1", "2", "3"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
        expect(setSteps(["3", "2", "1"], TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["3", "2", "1"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
    });
    test("Testing the setDifficultly function", () => {
        expect(setDifficulty(2, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 2,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
        expect(setDifficulty(10, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 10,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
    });
    test("Testing the setNumUsers function", () => {
        expect(setNumUsers(2, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 2,
            time: "0",
            pendingMode: false
        });
        expect(setNumUsers(10, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 10,
            time: "0",
            pendingMore: false
        });
    });
    test("Testing the setTime function", () => {
        expect(setTime("200", TESTTASK)).toEqual({
            // we may want this to be a string rather than a number so we can do 2:00pm
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "200",
            pendingMode: false
        });
        expect(setTime("500", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "500",
            pendingMode: false
        });
    });
    test("Testing the setName function", () => {
        expect(setName("Clarkson", TESTTASK)).toEqual({
            id: 0,
            name: "Clarkson",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
        expect(setName("Jeremy", TESTTASK)).toEqual({
            id: 0,
            name: "Jeremy",
            description: "taskfunc test task",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
    });
    test("Testing the setDiscription function", () => {
        expect(setDescription("A wonderfully delicate meal", TESTTASK)).toEqual(
            {
                id: 0,
                name: "test",
                description: "A wonderfully delicate meal",
                status: false,
                image: "blank",
                steps: ["i", "am", "immutable"],
                difficulty: 0,
                numUsers: 0,
                time: "0",
                pendingMode: false
            }
        );
        expect(setDescription("A lovely stew", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "A lovely stew",
            status: false,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
    });
    test("Testing the setStatus function", () => {
        expect(setStatus(true, TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: true,
            image: "blank",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
        expect(setStatus(false, TASK2)).toEqual({
            id: 0,
            name: "test2",
            description: "taskarr ind 1",
            status: false,
            image: "dog",
            steps: ["walk", "feed"],
            difficulty: 1,
            numUsers: 0,
            time: "1",
            pendingMode: false
        });
    });
    test("Testing the setImage function", () => {
        expect(setImage("A picture of despair", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "A picture of despair",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
        });
        expect(setImage("A quaint city in the woods", TESTTASK)).toEqual({
            id: 0,
            name: "test",
            description: "taskfunc test task",
            status: false,
            image: "A quaint city in the woods",
            steps: ["i", "am", "immutable"],
            difficulty: 0,
            numUsers: 0,
            time: "0",
            pendingMode: false
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
