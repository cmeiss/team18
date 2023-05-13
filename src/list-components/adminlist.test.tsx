import React from "react";
import { fireEvent, screen } from "@testing-library/react";
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
        difficulty: 2,
        numUsers: 2,
        time: "0915",
        pendingMode: true
    },
    {
        id: 2,
        name: "atest3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 1,
        numUsers: 1,
        time: "0945",
        pendingMode: true
    }
];

const TasksPartlyDisplayed = [
    {
        id: 0,
        name: "test1",
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
        name: "test2",
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
        name: "test3",
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
    test("Alphabetical Sorting in AdminList", () => {
        //testing the existance of the alphabetical sorting button
        const alphabetButton = screen.getByRole("button", {
            name: "Alphabetical"
        });
        expect(alphabetButton).toBeInTheDocument();
        //testing functionality of alphabetical sorting button
        fireEvent.click(alphabetButton);
        const aTask = screen.getByText("atest3");
        const bTask = screen.getByText("btest1");
        const fTask = screen.getByText("ftest2");
        expect(bTask.compareDocumentPosition(aTask)).toBe(2); //this tests if firstT comes before secondT
        expect(fTask.compareDocumentPosition(bTask)).toBe(2);
    });

    test("Difficulty Sorting Button", () => {
        //testing existance of difficulty button
        const difficultyButton = screen.getByRole("button", {
            name: "Difficulty"
        });
        expect(difficultyButton).toBeInTheDocument();
        //testing functionality of difficulty button
        fireEvent.click(difficultyButton);
        const aTask = screen.getByText("atest3");
        const bTask = screen.getByText("btest1");
        const fTask = screen.getByText("ftest2");
        expect(fTask.compareDocumentPosition(aTask)).toBe(2); //this tests if firstT comes before secondT
        expect(bTask.compareDocumentPosition(fTask)).toBe(2);
    });

    test("Time Sorting Button", () => {
        //Testing existance of time Button
        const timeButton = screen.getByRole("button", {
            name: "Time"
        });
        expect(timeButton).toBeInTheDocument();
        //testing functionality of time button
        fireEvent.click(timeButton);
        const aTask = screen.getByText("atest3");
        const bTask = screen.getByText("btest1");
        const fTask = screen.getByText("ftest2");
        expect(aTask.compareDocumentPosition(fTask)).toBe(2); //this tests if firstT comes before secondT
        expect(bTask.compareDocumentPosition(aTask)).toBe(2);
    });
    test("Reset Sorting Button is displayed", () => {
        //testing existance of reset Button
        const resetButton = screen.getByRole("button", {
            name: "Reset"
        });
        expect(resetButton).toBeInTheDocument();
        //testing functionality of reset button
        fireEvent.click(resetButton);
        const aTask = screen.getByText("atest3");
        const bTask = screen.getByText("btest1");
        const fTask = screen.getByText("ftest2");
        expect(fTask.compareDocumentPosition(bTask)).toBe(2); //this tests if firstT comes before secondT
        expect(aTask.compareDocumentPosition(fTask)).toBe(2);
    });
});
