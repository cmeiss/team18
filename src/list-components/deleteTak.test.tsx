import React from "react";
import { DeleteTask } from "./deleteTask-component";
import { Task } from "../interfaces/task";
import { fireEvent, render, screen } from "@testing-library/react";

//basic tasks and task lists to test
const TASK1: Task = {
    id: 1,
    name: "Task 1",
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
    id: 2,
    name: "Task 2",
    description: "description",
    status: false,
    image: "image",
    steps: ["four", "five", "six"],
    difficulty: 1,
    numUsers: 1,
    time: "1100",
    pendingMode: false
};

const TASK3: Task = {
    name: "Task 3",
    description: "description",
    status: false,
    image: "image",
    steps: ["seven", "eight", "nine"],
    difficulty: 2,
    numUsers: 2,
    time: "1200",
    id: 3,
    pendingMode: false
};

const TASKLIST1 = [TASK1, TASK2];
//const TASKLIST2 = [TASK3];
//const TASKLIST3 = [TASK1, TASK2, TASK3];

//actual tests

describe("Delete task tests", () => {
    beforeEach(() =>
        render(
            <DeleteTask
                //item={TASK1}
                tasks={TASKLIST1}
                setTasks={
                    function (/*newTasks: Task[]*/): void {
                        throw new Error("function not implemented");
                    }
                }
            />
        )
    );
    test("There is a switch", () => {
        const switchButton = screen.getByRole("switch");
        expect(switchButton).toBeInTheDocument();
    });
    test("renders switch component", () => {
        render(<DeleteTask tasks={[]} setTasks={() => {}} />);
        const switchElement = screen.getByLabelText("Delete Task");
        expect(switchElement).toBeInTheDocument();
    });
    test("renders textarea component when switch is toggled", () => {
        render(<DeleteTask tasks={[]} setTasks={() => {}} />);
        const switchElement = screen.getByLabelText("Delete Task");
        fireEvent.click(switchElement);
        const textareaElement = screen.getByLabelText("Enter Task Below:");
        expect(textareaElement).toBeInTheDocument();
    });
    test("renders delete button when switch is toggled", () => {
        render(<DeleteTask tasks={[]} setTasks={() => {}} />);
        const switchElement = screen.getByLabelText("Delete Task");
        fireEvent.click(switchElement);
        const buttonElement = screen.getByRole("button", {
            name: "Delete Task and Leave Edit Mode"
        });
        expect(buttonElement).toBeInTheDocument();
    });
    test("removes task from list of tasks on delete button click", () => {
        const tasks = [TASK1, TASK2, TASK3];
        const setTasks = jest.fn();
        render(<DeleteTask tasks={tasks} setTasks={setTasks} />);
        const switchElement = screen.getByLabelText("Delete Task");
        fireEvent.click(switchElement);
        const textareaElement = screen.getByLabelText("Enter Task Below:");
        fireEvent.change(textareaElement, { target: { value: "Task 2" } });
        const buttonElement = screen.getByRole("button", {
            name: "Delete Task and Leave Edit Mode"
        });
        fireEvent.click(buttonElement);
        expect(setTasks).toHaveBeenCalledWith([TASK1, TASK2, TASK3]);
    });
    test("disables edit mode after deleting a task", () => {
        const tasks = [TASK1, TASK2, TASK3];
        const setTasks = jest.fn();
        render(<DeleteTask tasks={tasks} setTasks={setTasks} />);
        const switchElement = screen.getByLabelText("Delete Task");
        fireEvent.click(switchElement);
        const textareaElement = screen.getByLabelText("Enter Task Below:");
        fireEvent.change(textareaElement, { target: { value: "Task 2" } });
        const buttonElement = screen.getByRole("button", {
            name: "Delete Task and Leave Edit Mode"
        });
        fireEvent.click(buttonElement);
        const switchElement2: HTMLInputElement =
            screen.getByLabelText("Delete Task");
        expect(switchElement2.checked).toBe(true);
    });
});
