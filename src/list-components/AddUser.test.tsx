import React from "react";
import { render, screen } from "@testing-library/react";
import { ModifyUsers } from "./ModifyUsers";
import userEvent from "@testing-library/user-event";
import { User } from "../interfaces/user";

const ROLE1: User = { name: "user1", userList: [] };
const ROLE2: User = { name: "user2", userList: [] };
const ROLE3: User = { name: "user3", userList: [] };

describe("Modify user tests", () => {
    beforeEach(() =>
        render(
            <ModifyUsers
                Role={ROLE1}
                roles={[ROLE1, ROLE2, ROLE3]}
                setRoles={function (newUsers: User[]): void {
                    throw new Error("Function not implemented.");
                }}
            />
        )
    );
    test("There is a switch", () => {
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
    });
    test("On switch click, there is a textbox and buttons: ", () => {
        const switchButton = screen.getByRole("checkbox");
        const addUser = screen.getByRole("button", {
            name: /Add User and Leave Edit Mode/i
        });
        const delUser = screen.getByRole("button", {
            name: /Delete User and Leave Edit Mode/i
        });
        switchButton.click();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(addUser).toBeInTheDocument();
        expect(delUser).toBeInTheDocument();
    });
    test("There is a add user button", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getByRole("button"));
    });
});
