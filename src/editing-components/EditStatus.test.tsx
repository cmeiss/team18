import React from "react";
import { render, screen } from "@testing-library/react";
import { EditStatus } from "./EditStatus";
import userEvent from "@testing-library/user-event";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";

const testTask = {
    id: 1,
    name: "test1",
    description: "description a",
    status: false,
    image: "picture",
    steps: ["a", "b", "c", "GutenTag", "469476"],
    difficulty: 3,
    numUsers: 2,
    time: "1345",
    pendingMode: false
};

let TaskList = [
    {
        id: 1,
        name: "test1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345",
        pendingMode: false
    },
    {
        id: 2,
        name: "test2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345",
        pendingMode: false
    },
    {
        id: 3,
        name: "test3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345",
        pendingMode: false
    }
];

const User1: User = { name: "user1", userList: TaskList };

function setTasks(newTasks: Task[]) {
    TaskList = newTasks;
}
describe("EditStatus Component tests", () => {
    beforeEach(() =>
        render(
            <EditStatus
                tasks={TaskList}
                updateTasks={setTasks}
                task={testTask}
            />
        )
    );
    test("There is a checkbox and no button to confirm", () => {
        const compCheckBox = screen.getByRole("checkbox");
        expect(compCheckBox).toBeInTheDocument();
        expect(
            screen.queryByRole("button", { name: "Confirm" })
        ).not.toBeInTheDocument();
    });
    test("Initial text should be 'Completion Status: ❌', and after click it should change to 'Completion Status: ✔️'", () => {
        const compCheckBox = screen.getByRole("checkbox");
        expect(screen.getByText(/Completion Status: ❌/i)).toBeInTheDocument();
        compCheckBox.click();
        expect(screen.getByText(/Completion Status: ✔️/i)).toBeInTheDocument();
    });
    test("After initial click of checkbox a button should appear and should say confirm, the state of the user's task's status should not be changed", () => {
        const compCheckBox = screen.getByRole("checkbox");
        compCheckBox.click();
        expect(screen.queryByRole("button")).toBeInTheDocument();
        expect(screen.getByText(/Confirm/i)).toBeInTheDocument();
        expect(User1.userList[0].status).toBeFalsy();
    });
    test("After Confirm Button is clicked, the button will dissapear, and the user's task status should now be changed in state", () => {
        const compCheckBox = screen.getByRole("checkbox");
        userEvent.click(compCheckBox);
        expect(screen.getByText(/Completion Status: ✔️/i)).toBeInTheDocument();
        const confirmButton = screen.getByRole("button", { name: "Confirm" });
        confirmButton.click();
        expect(
            screen.queryByRole("button", { name: "Confirm" })
        ).not.toBeInTheDocument();
    });
});
