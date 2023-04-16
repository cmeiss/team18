import React from "react";
import { render, screen } from "@testing-library/react";
import { CentralItemList } from "./CentralItemList";

const TaskList = [
    {
        name: "test1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: 1345,
        role: "super"
    },
    {
        name: "test2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: 1345,
        role: "admin"
    },
    {
        name: "test3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: 1345,
        role: "user"
    }
];
