import React from "react";
import { AddTask } from "./addTask";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Task } from "../interfaces/task";

//basic tasks/list to test
const TASK1: Task = {
    id: 0,
    name: "task1",
    description: "description",
    status: false,
    image: "image",
    steps: ["one", "two", "three"],
    difficulty: 0,
    numUsers: 0,
    time: "1010",
    pendingMode: false
};

const TASK2: Task = {
    id: 1,
    name: "task2",
    description: "description",
    status: false,
    image: "image",
    steps: ["four", "five", "six"],
    difficulty: 1,
    numUsers: 1,
    time: "1100",
    pendingMode: false
};

const TASKLIST1 = [TASK1, TASK2];

//actual tests
describe("Add tasks tests", () => {
    beforeEach(() =>
        render(
            <AddTask
                //item={TASK1}
                tasks={TASKLIST1}
                setTasks={function (newTasks: Task[]): void {
                    newTasks;
                }}
            />
        )
    );
    test("There is a switch", () => {
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
    });
    test("On switch click, is an add task button: ", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const addTask = screen.getByRole("button", {
            name: /Add Task and Leave Edit Mode/i
        });
        expect(addTask).toBeInTheDocument();
    });
    test("Clicking add task adds a task and leaves edit mode", () => {
        // setting up the scenario
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const addTask = screen.getByRole("button", {
            name: /Add Task and Leave Edit Mode/i
        });
        const inputUser = screen.getByRole("textboxName");
        userEvent.type(inputUser, "task test");
        // on add user button click
        addTask.click();

        expect(screen.queryByRole("textbox")).toBeNull();
        expect(screen.queryByRole("button")).toBeNull();
    });
    test("On switch click, there is a textbox for name, description, image and steps: ", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.queryByRole("textboxName")).toBeInTheDocument();
        expect(screen.queryByRole("textboxDesc")).toBeInTheDocument();
        expect(screen.queryByRole("textboxImg")).toBeInTheDocument();
        expect(screen.queryByRole("textboxSteps")).toBeInTheDocument();
    });
    test("On switch click there is a checkbox for status", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getByRole("checkboxStatus")).toBeInTheDocument();
    });
    test("On switch click, there is a dropdown for time", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getByRole("select")).toBeInTheDocument();
    });
    test("On switch click, there is a field for difficulty", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getByText(/Choose Difficulty:/i)).toBeInTheDocument();
    });
});
