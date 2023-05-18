import React from "react";
import { render, screen } from "@testing-library/react";
import { EditStatus } from "./EditStatus";
import userEvent from "@testing-library/user-event";
import { Task } from "../interfaces/task";

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

function setTasks(newTasks: Task[]) {
    TaskList = newTasks;
}
describe("EditMode Component tests", () => {
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
        expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
    test("Initial text should be 'Completion Status: ❌', and after click it should change to 'Completion Status: ✔️'", () => {
        const compCheckBox = screen.getByRole("checkbox");
        expect(screen.getByText(/Completion Status: ❌/i)).toBeInTheDocument();
        compCheckBox.click();
        expect(screen.getByText(/Completion Status: ✔️/i)).toBeInTheDocument();
    });
});
