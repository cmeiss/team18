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
    time: "1010"
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
    time: "1100"
};

const TASKLIST1 = [TASK1, TASK2];

//actual tests
describe("Add tasks tests", () => {
    beforeEach(() =>
        render(
            <AddTask
                item={TASK1}
                tasks={TASKLIST1}
                setTasks={
                    function (/*newTasks: Tasks[]*/): void {
                        throw new Error("Function not implemented.");
                    }
                }
            />
        )
    );
    test("There is a switch", () => {
        const switchButton = screen.getByRole("switch");
        expect(switchButton).toBeInTheDocument();
    });
    test("On switch click, there is a textbox and buttons: ", () => {
        const switchButton = screen.getByRole("switch");
        switchButton.click();
        const addTask = screen.getByRole("button", {
            name: /Add Task and Leave Edit Mode/i
        });
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(addTask).toBeInTheDocument();
    });
    test("Clicking add task adds a task and leaves edit mode", () => {
        // setting up the scenario
        const switchButton = screen.getByRole("switch");
        switchButton.click();
        const addTask = screen.getByRole("button", {
            name: /Add Task and Leave Edit Mode/i
        });
        const inputUser = screen.getByRole("textarea");
        userEvent.type(inputUser, "task test");
        // on add user button click
        addTask.click();
        // need help figuring out if it actually adds a user
        // leaves edit mode: no textbox and no buttons
        expect(screen.getByRole("textarea")).toBeNull();
        expect(screen.getByRole("button")).toBeNull();
        // may need to render the roll select dropdown. At this moment I dont see how we do that without rendering
        //all of App. we will come back to this later
    });
});
