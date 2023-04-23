import React from "react";
import { render, screen } from "@testing-library/react";
import { ModifyUsers } from "./ModifyUsers";
import userEvent from "@testing-library/user-event";
import { User } from "../interfaces/user";

const ROLE1: User = { name: "user1", userList: [] };
const ROLE2: User = { name: "user2", userList: [] };
const ROLE3: User = { name: "user3", userList: [] };

describe("Modify User tests", () => {
    beforeEach(() =>
        render(
            <ModifyUsers
                Role={ROLE1}
                roles={[ROLE1, ROLE2, ROLE3]}
                setRoles={
                    function (/*newUsers: User[]*/): void {
                        throw new Error("Function not implemented.");
                    }
                }
            />
        )
    );
    test("There is a switch", () => {
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
    });
    test("On switch click, there is a textbox and buttons: ", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const addUser = screen.getByRole("button", {
            name: /Add User and Leave Edit Mode/i
        });
        const delUser = screen.getByRole("button", {
            name: /Delete User and Leave Edit Mode/i
        });
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(addUser).toBeInTheDocument();
        expect(delUser).toBeInTheDocument();
    });
    test("Clicking add user adds a user and leaves edit mode", () => {
        // setting up the scenario
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const addUser = screen.getByRole("button", {
            name: /Add User and Leave Edit Mode/i
        });
        const inputUser = screen.getByRole("textbox");
        userEvent.type(inputUser, "user test");
        // on add user button click
        addUser.click();
        // need help figuring out if it actually adds a user
        // leaves edit mode: no textbox and no buttons
        expect(screen.getByRole("textbox")).toBeNull();
        expect(screen.getByRole("button")).toBeNull();
    });
});
