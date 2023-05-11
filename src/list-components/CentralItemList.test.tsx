import React from "react";
import { screen } from "@testing-library/react";
import { CentralItemList } from "./CentralItemList";
import { Task } from "../interfaces/task";
import { renderWithDnd } from "../CustomRender";

const TaskList = [
    {
        id: 0,
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
        id: 0,
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
        id: 2,
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
        renderWithDnd(
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
});

//testing with role being admin
describe("CentralItemList with Role admin", () => {
    beforeEach(() => {
        renderWithDnd(
            <CentralItemList
                tasks={TaskList}
                role={role2}
                setTasks={setTasks}
            />
        );
    });
    test("all tasks are displayed", () => {
        TaskList.every((task) => {
            const taskDisplayed = screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
});

//testing with role being user
describe("CentralItemList with Role user", () => {
    beforeEach(() => {
        renderWithDnd(
            <CentralItemList
                tasks={TaskList}
                role={role3}
                setTasks={setTasks}
            />
        );
    });
    test("all tasks are displayed", () => {
        TaskList.every((task) => {
            const taskDisplayed = screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
});
