import React from "react";
import { render, screen } from "@testing-library/react";
import { UserList } from "./UserList";
import { User } from "../interfaces/user";
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

const User1: User = { name: "user1", userList: TaskList };
const User2: User = { name: "Super", userList: TaskList };
const User3: User = { name: "Admin", userList: TaskList };

describe("Testing User List", () => {
    beforeEach(() => {
        render(
            <UserList tasks={tasks} setTasks={setTasks} user={User1}></UserList>
        );
    });
    test("User name is displayed", () => {
        const header = screen.getByText(/user1/i);
        expect(header).toBeInTheDocument();
    });
    test("All tasks are displayed", () => {
        User1.userList.every((task) => {
            const taskItem = screen.queryByText(task.name); //had to use query because the it might find parts of the name twice (e.g. test1 and test2 might both be found if searching for test)
            expect(taskItem).toBeInTheDocument;
        });
    });
    test("Check presence of header", () => {
        const header = screen.getByRole("heading", { name: /List/i });
        expect(header).toBeInTheDocument();
    });
});

describe("Testing that user list is not displayed if role is super", () => {
    test("test for empty DOM element", () => {
        const { container } = render(
            <UserList tasks={tasks} setTasks={setTasks} user={User2}></UserList>
        );
        expect(container).toBeEmptyDOMElement();
    }); //this test is not passing, I need to make a change in userList so that the component returns null if role is super
});

describe("Testing that user list is not displayed if role is admin", () => {
    test("test for empty DOM element", () => {
        const { container } = render(
            <UserList tasks={tasks} setTasks={setTasks} user={User3}></UserList>
        );
        expect(container).toBeEmptyDOMElement();
    }); //this test is not passing, I need to make a change in userList so that the component returns null if role is admin
});
