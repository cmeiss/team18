//import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TASKS } from "./TASKS";
import { CentralItemList } from "./list-components/CentralItemList";
import { Task } from "./interfaces/task";
import { UserList } from "./list-components/UserList";
import { User } from "./interfaces/user";
import { AdminList } from "./list-components/adminlist";
import { DeleteTask } from "./list-components/deleteTask-component";
import { AddTask } from "./list-components/addTask";
import { EditTask } from "./editing-components/EditTask";
import { renderWithDnd } from "./CustomRender";

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

const role1 = "Super";
//const role2 = "Admin";
//const role3 = "User1";

const User1: User = { name: "user1", userList: TASKS };
const User2: User = { name: "Super", userList: TASKS };
const User3: User = { name: "Admin", userList: TASKS };
const users = [User1, User2, User3];

function setTasks(newTasks: Task[]) {
    newTasks;
}
function setUser(newUser: User) {
    newUser;
}
function setUsers(newUsers: User[]) {
    newUsers;
}

//test that components are displayed
//super: central list, add/delete task, add/delete user, edit task
//admin: admin list, central item list, edit task
//user: central item list, user list, edit task

describe("Tesing Central Item List in App", () => {
    beforeEach(() => {
        renderWithDnd(
            <CentralItemList
                tasks={TASKS}
                role={role1}
                setTasks={setTasks}
            ></CentralItemList>
        );
    });
    test("list is displayed", () => {
        const listDisplayed = screen.getByText("Sample Tasks");
        expect(listDisplayed).toBeInTheDocument();
    });
});

describe("Tesing User List in App", () => {
    beforeEach(() => {
        renderWithDnd(
            <UserList
                users={users}
                setUsers={setUsers}
                tasks={TASKS}
                setTasks={setTasks}
                user={User1}
                setUser={setUser}
            ></UserList>
        );
    });
    test("list is displayed", () => {
        const listDisplayed = screen.getByText(User1.name + "'s Schedule");
        expect(listDisplayed).toBeInTheDocument();
    });
    test("list not seen by super", () => {
        const { container } = renderWithDnd(
            <UserList
                users={users}
                setUsers={setUsers}
                tasks={TASKS}
                setTasks={setTasks}
                user={User2}
                setUser={setUser}
            ></UserList>
        );
        expect(container).toBeEmptyDOMElement();
    });
    test("list not seen by admin", () => {
        const { container } = renderWithDnd(
            <UserList
                users={users}
                setUsers={setUsers}
                tasks={TASKS}
                setTasks={setTasks}
                user={User3}
                setUser={setUser}
            ></UserList>
        );
        expect(container).toBeEmptyDOMElement();
    });
});

describe("Tesing Admin List in App", () => {
    beforeEach(() => {
        renderWithDnd(
            <AdminList
                users={users}
                setUsers={setUsers}
                tasks={TASKS}
                user={User3}
                setTasks={setTasks}
            ></AdminList>
        );
    });
    test("list is displayed", () => {
        const listDisplayed = screen.getByText("Pending List");
        expect(listDisplayed).toBeInTheDocument();
    });
    test("list not seen by user", () => {
        const { container } = renderWithDnd(
            <AdminList
                users={users}
                setUsers={setUsers}
                tasks={TASKS}
                user={User1}
                setTasks={setTasks}
            ></AdminList>
        );
        expect(container).toBeEmptyDOMElement();
    });
});
describe("Testing Delete task in App", () => {
    beforeEach(() =>
        renderWithDnd(
            <DeleteTask
                tasks={TASKS}
                setTasks={function (): void {
                    throw new Error("function not implemented");
                }}
            />
        )
    );
    test("delete task is displayed", () => {
        const compDisplayed = screen.getByText("Delete Task");
        expect(compDisplayed).toBeInTheDocument();
    });
});

describe("Add tasks tests", () => {
    beforeEach(() =>
        render(
            <AddTask
                tasks={TASKS}
                setTasks={
                    function (/*newTasks: Tasks[]*/): void {
                        throw new Error("Function not implemented.");
                    }
                }
            />
        )
    );
    test("add task is displayed", () => {
        const compDisplayed = screen.getByText("Add Task");
        expect(compDisplayed).toBeInTheDocument();
    });
});

describe("Testing EditTask", () => {
    beforeEach(() => {
        render(
            <EditTask tasks={TASKS} updateTasks={setTasks} task={testTask} />
        );
    });
    test("edit Task button appears", () => {
        const editButton = screen.getByRole("button", { name: "Edit ✏️" });
        expect(editButton).toBeInTheDocument();
    });
});
