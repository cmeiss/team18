import React from "react";
import { render, screen } from "@testing-library/react";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";

const testTask = {
    id: 0,
    name: "test",
    description: "this is the description",
    status: false,
    image: "picture",
    steps: ["a", "b", "c", "GutenTag", "469476"],
    difficulty: 3,
    numUsers: 2,
    time: 1345
};

const TaskList = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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

const testRole1 = "super";
const testRole2 = "admin";

//testing with role being super
describe("DisplayView Tests", () => {
    beforeEach(() => {
        render(
            <DisplayTask
                task={testTask}
                tasks={tasks}
                updateTasks={setTasks}
                role={testRole1}
            />
        );
    });
    test("Taskname is displayed", () => {
        const taskName = screen.getByText(/test/i);
        expect(taskName).toBeInTheDocument();
    });
    test("Num of TaskUsers is there if role is super", () => {
        const UserNum = screen.getByText(/Number of Users/i);
        expect(UserNum).toBeInTheDocument();
    });
    test("There is a checkbox", () => {
        const doneCheckbox = screen.getByRole("checkbox", {
            name: /❌/i || /✔️/i
        });
        expect(doneCheckbox).toBeInTheDocument();
    });
    test("Description of the task is displayed", () => {
        const desc = screen.getByText(testTask.description);
        expect(desc).toBeInTheDocument();
    });
    test("Steps are displayed", () => {
        testTask.steps.every((step) => {
            const text = screen.getByText(step);
            expect(text).toBeInTheDocument;
        });
    });
    test("difficulty of task is displayed", () => {
        const diff = screen.getByText(/Difficulty:/i);
        expect(diff).toBeInTheDocument();
    });
    test("time is displayed", () => {
        const time = screen.getByText(/1345/i);
        expect(time).toBeInTheDocument();
    });
});

//testing with role being admin
describe("DisplayView Tests", () => {
    beforeEach(() => {
        render(
            <DisplayTask
                task={testTask}
                tasks={tasks}
                updateTasks={setTasks}
                role={testRole2}
            />
        );
    });
    test("Num of TaskUsers is not there if role is admin", () => {
        expect(screen.queryByText(/Number of User/i)).toBeNull();
    });
});
