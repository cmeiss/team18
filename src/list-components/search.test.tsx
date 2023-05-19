import { search } from "./search";
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
            image: require("./task-images/research.jpg"),
            steps: [
                "Put on lab coat",
                "Review safety modules",
                "Don't spill any chemicals"
            ],
            difficulty: 3,
            numUsers: 0,
            time: "12:00",
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
    test("Testing the search by tasks component", () => {});
});
