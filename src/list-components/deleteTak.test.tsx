import React from "react";
import { DeleteTask } from "./deleteTask-component";
import { Task } from "../interfaces/task";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//basic tasks and task lists to test
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

/*const TASK3: Task = {
    name: "task3",
    description: "description",
    status: false,
    image: "image",
    steps: ["seven", "eight", "nine"],
    difficulty: 2,
    numUsers: 2,
    time: 1200
}; */

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

    test("On switch click, there is a textbox and buttons: ", () => {
        const switchButton = screen.getByRole("switch");
        switchButton.click();
        const deltask1 = screen.getByRole("button", {
            name: /Delete Task and Leave Edit Mode/i
        });
        expect(screen.getByRole("textarea")).toBeInTheDocument();
        expect(deltask1).toBeInTheDocument();
    });

    test("Clicking delete task deletes from the list and leaves edit mode", () => {
        const switchButton = screen.getByRole("switch");
        switchButton.click();
        const delTask = screen.getByRole("button", {
            name: /Delete Task and Leave Edit Mode/i
        });
        const inputUser = screen.getByRole("textarea");
        userEvent.type(inputUser, "task test");
        // on delete task button click
        delTask.click();
        expect(screen.getByRole("textarea")).toBeNull();
        expect(screen.getByRole("button")).toBeNull();
    });
});
