import React from "react";
import { render, screen } from "@testing-library/react";
import { CentralItemList } from "./CentralItemList";
import { Task } from "../interfaces/task";

const TaskList = [
    {
        name: "test1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: 1345
    },
    {
        name: "test2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: 1345
    },
    {
        name: "test3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: 1345
    }
];

const tasks = TaskList;

//this function does nothing and exists only to be able to call the component
function setTasks(newTasks: Task[]) {
    newTasks;
}

const role1 = "super";
const role2 = "admin";
const role3 = "user";

//testing with role being super
describe("CentralItemList with Role super", () => {
    beforeEach(() => {
        render(
            <CentralItemList tasks={tasks} role={role1} setTasks={setTasks} />
        );
    });
    //test1: check that every task in array is displayed by accessing their name
    test("all tasks are displayed", () => {
        TaskList.every((task) => {
            const taskDisplayed = screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
    //test2: check that there is a button to add a task if role is super
    test("There is a button to add tasks if role is super", () => {
        const addTButton = screen.getByRole("button", { name: /Add Task/i });
        expect(addTButton).toBeInTheDocument();
    });
    //test3: there is a button to add a user if the role is super
    test("There is a button to add a user", () => {
        const addUButton = screen.getByRole("button", { name: /Add User/i });
        expect(addUButton).toBeInTheDocument();
    });
    //
});

//testing with role being admin
describe("CentralItemList with Role admin", () => {
    beforeEach(() => {
        render(
            <CentralItemList
                tasks={TaskList}
                role={role2}
                setTasks={setTasks}
            />
        );
    });
    //testing that there is a button to addTasks if role is admin
    test("There is a button to addTasks if role is admin", () => {
        const addTButton = screen.getByRole("button", { name: /Add Task/i });
        expect(addTButton).toBeInTheDocument();
    });
    //testing that there isn't an addUserButton if role is admin
    test("There isn't a button to add a user", () => {
        const addUButton = screen.queryByRole("button", { name: /Add User/i });
        expect(addUButton).toBeNull();
    });
});

//testing with role being user
describe("CentralItemList with Role user", () => {
    beforeEach(() => {
        render(
            <CentralItemList
                tasks={TaskList}
                role={role3}
                setTasks={setTasks}
            />
        );
    });
    //testing that there is no addTasks button if role is user (not admin or super)
    test("There isn't a button to addTasks if role is user", () => {
        const addTButton = screen.queryByRole("button", { name: /Add Task/i });
        expect(addTButton).toBeNull();
    });
});
