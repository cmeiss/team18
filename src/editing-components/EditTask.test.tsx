import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditTask } from "./EditTask";
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

//testing when edit Task mask is not visible
describe("Testing EditTask", () => {
    beforeEach(() => {
        render(
            <EditTask tasks={TaskList} updateTasks={setTasks} task={testTask} />
        );
    });
    test("There is an edit Task button", () => {
        const editButton = screen.getByRole("button", { name: "Edit ✏️" });
        expect(editButton).toBeInTheDocument();
    });
});

//testing when edit task is visible
describe("Testing EditTask", () => {
    beforeEach(() => {
        render(
            <EditTask tasks={TaskList} updateTasks={setTasks} task={testTask} />
        );
        const editBut = screen.getByRole("button", { name: "Edit Task" }); //this is finding the edit Task button
        fireEvent.click(editBut); //This is clicking the edit Task button so that the other editing components get displayed
    });
    test("There is a button to save changes", () => {
        const savebutton = screen.getByRole("button", { name: "Save Changes" });
        expect(savebutton).toBeInTheDocument();
    });
    test("There is a textbox to change the description", () => {
        const desctext = screen.getByText(/Change Description:/i);
        expect(desctext).toBeInTheDocument();
    });
    test("There is a dropdown to edit the time", () => {
        const editTime = screen.getByRole("select", { name: "Choose Time" });
        expect(editTime).toBeInTheDocument();
    });
    test("The edit difficulty component is displayed", () => {
        const editDiff = screen.getByText(/Task Difficulty:/i);
        expect(editDiff).toBeInTheDocument();
    });
    test("The edit name component is displayed", () => {
        const editName = screen.getByText(/Change Name:/i);
        expect(editName).toBeInTheDocument();
    });
    test("the edit steps component is displayed", () => {
        const editSteps = screen.getByText(/Add Steps:/i);
        expect(editSteps).toBeInTheDocument();
    });
});
