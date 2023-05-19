import { SearchUserByTask, search } from "./search";
import { TASKS } from "../TASKS";
import { User } from "../interfaces/user";

const BillyBob: User = {
    name: "BillyBob",
    userList: [
        {
            id: 8,
            name: "Research",
            description:
                "Whether your deep into the furthest reaches of AI tech, or discovering how much ketchup is the perfect amount for every fry, make time for your undiscovered knowledge!.",
            status: false,
            image: "yes",
            steps: [
                "Put on lab coat",
                "Review safety modules",
                "Don't spill any chemicals"
            ],
            difficulty: 3,
            numUsers: 0,
            time: "12:00",
            pendingMode: false
        },
        {
            id: 10,
            name: "Dance Recital",
            description: "I like to tango.",
            status: false,
            image: "No",
            steps: ["Get dressed up", "Drive to dance", "Have fun!"],
            difficulty: 3,
            numUsers: 0,
            time: "15:30",
            pendingMode: false
        }
    ]
};
const AbbySue: User = {
    name: "AbbySue",
    userList: [
        {
            id: 9,
            name: "Gardening",
            description: "Tend those taters!",
            status: false,
            image: "No",
            steps: [
                "Put on gloves and overalls",
                "Repot that plant.",
                "Get hands dirty"
            ],
            difficulty: 3,
            numUsers: 0,
            time: "08:00",
            pendingMode: false
        },
        {
            id: 10,
            name: "Dance Recital",
            description: "I like to tango.",
            status: false,
            image: "No",
            steps: ["Get dressed up", "Drive to dance", "Have fun!"],
            difficulty: 3,
            numUsers: 0,
            time: "15:30",
            pendingMode: false
        }
    ]
};

const users: User[] = [BillyBob, AbbySue];

describe("Search Component tests", () => {
    test("Testing the search by name component", () => {
        expect(search("Breakfast", TASKS)).toStrictEqual([TASKS[3]]);
        expect(search("Homework", TASKS)).toStrictEqual([TASKS[0]]);
    });
    test("Testing the search for user by task using different tasks in list", () => {
        expect(SearchUserByTask("Research", users)).toStrictEqual([BillyBob]);
        expect(SearchUserByTask("Gardening", users)).toStrictEqual([AbbySue]);
    });
    test("Testing the search for user by task using the same task in each user List", () => {
        expect(SearchUserByTask("Dance Recital", users)).toStrictEqual([
            BillyBob,
            AbbySue
        ]);
    });
});
