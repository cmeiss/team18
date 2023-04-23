import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { AdminList } from "./adminlist";
import { Task } from "../interfaces/task";

const TASK2 = {
    name: "task 2",
    description: "description",
    status: false,
    image: "picture",
    steps: ["d", "e", "f"],
    difficulty: 1,
    numUsers: 0,
    time: 2680
};

const TASK3 = {
    name: "task 3",
    description: "description",
    status: false,
    image: "picture",
    steps: ["g", "h", "i"],
    difficulty: 4,
    numUsers: 1,
    time: 3925
};

//basic tasklists to test
const TASKLIST1 = [TASK2, TASK3];
const TASKLIST3 = [TASK3];
//different roles to test, change view of list based on role
const ROLE1 = "super";
const ROLE2 = "admin";
const ROLE3 = "user";

const [tasks, setTasks] = useState<Task[]>(TASKLIST1);

describe("AdminList with super role", () => {
    beforeEach(() => {
        render(
            <AdminList
                role={ROLE1}
                tasks={tasks}
                setTasks={setTasks}
            ></AdminList>
        ); //makes admin list visible when role is super
    });
    //testing that all tasks in a list have 0 or 1 num of users
    test("All the tasks in the list fit the requiremnet of having being used by 0 or 1 users", () => {
        TASKLIST1.every((task) => {
            const numCorrect = task.numUsers === 0 || task.numUsers === 1;
            expect(numCorrect).toBe(true);
        });
    });
    //testting that all tasks from the admin list are displayed
    test("all tasks are displayed", () => {
        TASKLIST1.every((task) => {
            const taskDisplayed = screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
});

//testing with role being admin
describe("AdminList with admin role", () => {
    beforeEach(() => {
        render(
            <AdminList
                role={ROLE2}
                tasks={TASKLIST3}
                setTasks={setTasks}
            ></AdminList>
        );
    }); //testing that all tasks in a list have 0 or 1 num of users
    test("All the tasks in the list fit the requiremnet of having being used by 0 or 1 users", () => {
        TASKLIST3.every((task) => {
            const numCorrect = task.numUsers === 0 || task.numUsers === 1;
            expect(numCorrect).toBe(true);
        });
    }); //testing that all tasks in admin list are displayed
    test("all tasks are displayed", () => {
        TASKLIST3.every((task) => {
            const taskDisplayed = screen.getByText(task.name);
            expect(taskDisplayed).toBeInTheDocument();
        });
    });
});

//testing with role being user
describe("Testing that admin list is not displayed if role is super", () => {
    test("test for empty DOM element", () => {
        const { container } = render(
            <AdminList
                role={ROLE3}
                tasks={TASKLIST3}
                setTasks={setTasks}
            ></AdminList>
        );
        expect(container).toBeEmptyDOMElement();
    });
});
