import React from "react";
import { AddTask } from "./addTask";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const TASK1: Task = {
    name: "task1",
    description: "description",
    status: false,
    image: "image",
    steps: ["one", "two", "three"],
    difficulty: 0,
    numUsers: 0,
    time: 1010
};

const TASK2: Task = {
    name: "task2",
    description: "description",
    status: false,
    image: "image",
    steps: ["four", "five", "six"],
    difficulty: 1,
    numUsers: 1,
    time: 1100
};
