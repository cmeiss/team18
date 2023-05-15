import React from "react";
import { screen } from "@testing-library/react";
import { UserList } from "./UserList";
import { User } from "../interfaces/user";
import { Task } from "../interfaces/task";
import { renderWithDnd } from "../CustomRender";

const TaskList = [
    {
        id: 0,
        name: "btest1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1545",
        pendingMode: false
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
        time: "1345",
        pendingMode: false
    },
    {
        id: 2,
        name: "atest3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 1,
        numUsers: 2,
        time: "1445",
        pendingMode: false
    }
];

const tasks = TaskList;

//these functions do nothing and exist only to be able to call the component
function setTasks(newTasks: Task[]) {
    newTasks;
}

function setUsers(newUsers: User[]) {
    newUsers;
}

function setUser(newUser: User) {
    newUser;
}

const User1: User = { name: "user1", userList: TaskList };
const User2: User = { name: "Super", userList: TaskList };
const User3: User = { name: "Admin", userList: TaskList };

const users = [User1, User2, User3];

describe("Testing User List", () => {
    beforeEach(() => {
        renderWithDnd(
            <UserList
                users={users}
                setUsers={setUsers}
                tasks={tasks}
                setTasks={setTasks}
                user={User1}
                setUser={setUser}
            ></UserList>
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
        const header = screen.getByRole("heading", { name: /Schedule/i });
        expect(header).toBeInTheDocument();
    });
    test("Alphabetical Sorting in UserList", () => {
        //testing the existance of the alphabetical sorting button
        const alphabetButton = screen.getByRole("button", {
            name: "Alphabetical"
        });
        expect(alphabetButton).toBeInTheDocument();
    });

    test("Difficulty Sorting Button", () => {
        //testing existance of difficulty button
        const difficultyButton = screen.getByRole("button", {
            name: "Difficulty"
        });
        expect(difficultyButton).toBeInTheDocument();
    });

    test("Time Sorting Button", () => {
        //Testing existance of time Button
        const timeButton = screen.getByRole("button", {
            name: "Time Needed"
        });
        expect(timeButton).toBeInTheDocument();
    });
    test("TrashCan is displayed", () => {
        const trashCan = screen.getByTestId("trashCan");
        expect(trashCan).toBeInTheDocument();
    });
});

describe("Testing that user list is not displayed if role is super", () => {
    test("test for empty DOM element", () => {
        const { container } = renderWithDnd(
            <UserList
                users={users}
                setUsers={setUsers}
                tasks={tasks}
                setTasks={setTasks}
                user={User2}
                setUser={setUser}
            ></UserList>
        );
        expect(container).toBeEmptyDOMElement();
    }); //this test is not passing, I need to make a change in userList so that the component returns null if role is super
});

describe("Testing that user list is not displayed if role is admin", () => {
    test("test for empty DOM element", () => {
        const { container } = renderWithDnd(
            <UserList
                users={users}
                setUsers={setUsers}
                tasks={tasks}
                setTasks={setTasks}
                user={User3}
                setUser={setUser}
            ></UserList>
        );
        expect(container).toBeEmptyDOMElement();
    }); //this test is not passing, I need to make a change in userList so that the component returns null if role is admin
});
