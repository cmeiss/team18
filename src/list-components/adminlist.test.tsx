import React from "react";
import { screen } from "@testing-library/react";
import { AdminList } from "./adminlist";
import { Task } from "../interfaces/task";
import { renderWithDnd } from "../CustomRender";
import { User } from "../interfaces/user";

const TasksAllDis = [
    {
        id: 0,
        name: "btest1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 0,
        time: "1745",
        pendingMode: true
    },
    {
        id: 1,
        name: "ftest2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1915",
        pendingMode: true
    },
    {
        id: 2,
        name: "atest3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 1,
        time: "0945",
        pendingMode: true
    }
];

const TasksPartlyDisplayed = [
    {
        id: 0,
        name: "btest1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 0,
        time: "1745",
        pendingMode: true
    },
    {
        id: 1,
        name: "ftest2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1915",
        pendingMode: false
    },
    {
        id: 2,
        name: "atest3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 1,
        time: "0945",
        pendingMode: true
    }
];

const TaskDisplayed = [
    {
        id: 0,
        name: "btest1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 0,
        time: "1745",
        pendingMode: true
    },
    {
        id: 2,
        name: "atest3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 1,
        time: "0945",
        pendingMode: true
    }
];

//this function does nothing and exists only to be able to call the component
function setTasks(newTasks: Task[]) {
    newTasks;
}

//this function does nothing and exists only to be able to call the component
function setUsers(newUsers: User[]) {
    newUsers;
}

const user1 = { name: "Admin", userList: [] };
const user2 = { name: "Super", userList: [] };
const user3 = { name: "User1", userList: [] };

const ListOfUsers = [user1, user2, user3];

describe("testing adminList with role Admin & only two of three tasks being in pending mode", () => {
    beforeEach(() => {
        renderWithDnd(
            <AdminList
                tasks={TasksPartlyDisplayed}
                users={ListOfUsers}
                setTasks={setTasks}
                user={user1}
                setUsers={setUsers}
            ></AdminList>
        );
    });
    test("only tasks with parsingMode = true are displayed", () => {
        TasksPartlyDisplayed.every((task: Task) => {
            const taskName = screen.getByText(task.name);
            if (task.pendingMode === true) {
                expect(taskName).toBeInTheDocument();
            } else {
                expect(taskName).not.toBeInTheDocument();
            }
            //expect(task.name).toBeFalsy;
        });
    });
});

describe("testing adminList with role Admin & all tasks are in pendingMode", () => {
    beforeEach(() => {
        renderWithDnd(
            <AdminList
                tasks={TasksAllDis}
                users={ListOfUsers}
                setTasks={setTasks}
                user={user1}
                setUsers={setUsers}
            ></AdminList>
        );
    });
    test("Alphabetical Sorting Button is displayed", () => {
        const alphabetButton = screen.getByRole("button", {
            name: "Alphabetical"
        });
        expect(alphabetButton).toBeInTheDocument();
    });
    test("Difficulty Sorting Button is displayed", () => {
        const alphabetButton = screen.getByRole("button", {
            name: "Difficulty"
        });
        expect(alphabetButton).toBeInTheDocument();
    });
    test("Time Sorting Button is displayed", () => {
        const alphabetButton = screen.getByRole("button", {
            name: "Time"
        });
        expect(alphabetButton).toBeInTheDocument();
    });
    test("Reset Sorting Button is displayed", () => {
        const alphabetButton = screen.getByRole("button", {
            name: "Reset"
        });
        expect(alphabetButton).toBeInTheDocument();
    });
});
