import React from "react";
import { ChangeRole } from "./ChangeRole";
import { screen, render, fireEvent } from "@testing-library/react";
import { User } from "../interfaces/user";

const ROLE1: User = { name: "user1", userList: [] };
const ROLE2: User = { name: "user2", userList: [] };
const ROLE3: User = { name: "user3", userList: [] };

const roleList = [ROLE1, ROLE2, ROLE3];

describe("Change role test", () => {
    beforeEach(() =>
        render(
            <ChangeRole
                Role={ROLE1}
                roles={roleList}
                setRole={
                    function (/*newUsers: User[]*/): void {
                        throw new Error("Function not implemented.");
                    }
                }
            ></ChangeRole>
        )
    );
    test("change role component displays", () => {
        const comp = screen.getByText(/Select your role:/i);
        expect(comp).toBeInTheDocument;
    });
    test("component opens dropdown menu", () => {
        const chooseRole = screen.getByText("Select your role:");
        fireEvent.click(chooseRole);
        const firstOption = screen.getByRole("option", { name: "user1" });
        expect(firstOption).toBeInTheDocument();
    });
});
