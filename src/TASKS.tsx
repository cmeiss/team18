import { Task } from "./interfaces/task";

export const TASKS: Task[] = [
    {
        name: "do Homework",
        description: "description",
        status: false,
        image: "picture",
        steps: ["Class 1", "Class 2"],
        difficulty: 0,
        numUsers: 2,
        time: 8000
    },
    {
        name: "get gas",
        description: "description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c"],
        difficulty: 3,
        numUsers: 1,
        time: 1345
    },
    {
        name: "cook dinner",
        description: "description",
        status: false,
        image: "picture",
        steps: ["get ingredients", "find receipe", "cook", "clean"],
        difficulty: 3,
        numUsers: 2,
        time: 1745
    },
    {
        name: "get breakfast",
        description: "description",
        status: false,
        image: "picture",
        steps: ["order online", "pick up"],
        difficulty: 3,
        numUsers: 2,
        time: 7000
    },
    {
        name: "go to class",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: [],
        difficulty: 3,
        numUsers: 2,
        time: 1130
    }
];
