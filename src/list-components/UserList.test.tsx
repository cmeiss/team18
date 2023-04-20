import React from "react";
import { render, screen } from "@testing-library/react";
import { UserList } from "./UserList";
import { User } from "../interfaces/user";

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

const User1: User = { name: "user1", userList: TaskList };

describe("Testing User List", () => {
    beforeEach(() => {
        render(<UserList user={User1}></UserList>);
    });
    test("Header is displayed", () => {
        const header = screen.getByRole("header");
        expect(header).toBeInTheDocument();
    });
});
