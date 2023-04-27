import React from "react";
import { deleteTask } from "./deleteTask-component";
import { Task } from "../interfaces/task";
import { render, screen } from "@testing-library/react";

const TASK1 = {
    name: "task1",
    description: "description",
    status: false,
    image: "image",
    steps: ["one", "two", "three"],
    difficulty: 0,
    numUsers: 0,
    time: 1010
};

const TASK2 = {
    name: "task2",
    description: "description",
    status: false,
    image: "image",
    steps: ["four", "five", "six"],
    difficulty: 1,
    numUsers: 1,
    time: 1100
};

const TASK3 = {
    name: "task3",
    description: "description",
    status: false,
    image: "image",
    steps: ["seven", "eight", "nine"],
    difficulty: 2,
    numUsers: 2,
    time: 1200
};

const TASKLIST1 = [TASK1, TASK2];
const TASKLIST2 = [TASK3];
const TASKLIST3 = [TASK1, TASK2, TASK3];
