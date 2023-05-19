import {
    filter_by_alphabetical_order,
    filter_by_numUsers
} from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";
// here  for the tests I am just creating a mock list and apply the filter functions and testing if the output is equal to what it would be sorted
const TaskList = [
    {
        name: "test1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 8,
        numUsers: 3,
        time: "1346",
        id: 1,
        pendingMode: false
    },
    {
        name: "test2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 4,
        numUsers: 0,
        time: "1300",
        id: 1,
        pendingMode: false
    },
    {
        name: "test3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 5,
        numUsers: 1,
        time: "875",
        id: 12,
        pendingMode: false
    }
];
describe("filter", () => {
    test("Testing the filter by time needed function", () => {
        expect(filter_by_time_needed(TaskList)).toEqual([
            {
                name: "test3",
                description: "a good description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 5,
                numUsers: 1,
                time: "875",
                id: 12,
                pendingMode: false
            },
            {
                name: "test2",
                description: "this is the description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 4,
                numUsers: 0,
                time: "1300",
                id: 1,
                pendingMode: false
            },
            {
                name: "test1",
                description: "description a",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 8,
                numUsers: 3,
                time: "1346",
                id: 1,
                pendingMode: false
            }
        ]);
    });
    test("Testing the filter by alphabetical order function", () => {
        expect(filter_by_alphabetical_order(TaskList)).toEqual([
            {
                name: "test1",
                description: "description a",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 8,
                numUsers: 3,
                time: "1346",
                id: 1,
                pendingMode: false
            },
            {
                name: "test2",
                description: "this is the description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 4,
                numUsers: 0,
                time: "1300",
                id: 1,
                pendingMode: false
            },
            {
                name: "test3",
                description: "a good description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 5,
                numUsers: 1,
                time: "875",
                id: 12,
                pendingMode: false
            }
        ]);
    });
    test("Testing the filter by dificulty function", () => {
        expect(filter_by_difficulty(TaskList)).toEqual([
            {
                name: "test2",
                description: "this is the description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 4,
                numUsers: 0,
                time: "1300",
                id: 1,
                pendingMode: false
            },
            {
                name: "test3",
                description: "a good description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 5,
                numUsers: 1,
                time: "875",
                id: 12,
                pendingMode: false
            },
            {
                name: "test1",
                description: "description a",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 8,
                numUsers: 3,
                time: "1346",
                id: 1,
                pendingMode: false
            }
        ]);
    });
    test("Testing the filter by NumUser function", () => {
        expect(filter_by_numUsers(TaskList)).toEqual([
            {
                name: "test2",
                description: "this is the description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 4,
                numUsers: 0,
                time: "1300",
                id: 1,
                pendingMode: false
            },
            {
                name: "test3",
                description: "a good description",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 5,
                numUsers: 1,
                time: "875",
                id: 12,
                pendingMode: false
            },
            {
                name: "test1",
                description: "description a",
                status: false,
                image: "picture",
                steps: ["a", "b", "c", "GutenTag", "469476"],
                difficulty: 8,
                numUsers: 3,
                time: "1346",
                id: 1,
                pendingMode: false
            }
        ]);
    });
});
