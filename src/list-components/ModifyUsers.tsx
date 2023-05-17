import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { User } from "../interfaces/user";
import "./modifyTasksUsers.css";
//this is a function that returns a jsx element in our app.tsx file
interface ChangeRoleProperties {
    Role: User;
    roles: User[];
    setRoles: (newUsers: User[]) => void;
}

export function ModifyUsers(
    ChangeRoleProps: ChangeRoleProperties
): JSX.Element {
    const [editmode, seteditmode] = useState<boolean>(false); //whether the textbox will appear boolean
    const [newUser, setNewUser] = useState<string>(""); //the value currently in the text box of edit mode
    const [placeholder, setPlaceholder] = useState<string>("Enter User"); //holds the current placeholder text to ask for input
    //function that sets role based on the role clicked
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateUsers(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(event.target.value);
    }

    function AddUsersandEditMode() {
        const duplicate = ChangeRoleProps.roles.some(
            (user: User) => String(user.name) === newUser
        );
        console.log("duplicate:");
        console.log(duplicate);
        if (!duplicate) {
            ChangeRoleProps.setRoles([
                ...ChangeRoleProps.roles,
                { name: newUser, userList: [] }
            ]);
            seteditmode(false);
            setNewUser("");
            setPlaceholder("Enter User");
        } else {
            const newPH =
                newUser + " already exists, please enter a different name";
            setPlaceholder(newPH);
            setNewUser("");
        }
    }
    function DeleteUsersandEditMode() {
        ChangeRoleProps.setRoles(
            [...ChangeRoleProps.roles].filter((role: User): boolean =>
                role.name !== newUser ? true : false
            )
        );
        seteditmode(false);
    }
    return (
        <div className="modifyUsers">
            <Form.Check
                type={"switch"}
                id="editMode"
                label="Edit Users"
                className="mx-auto"
                style={{ width: "150px", fontWeight: "bold" }}
                checked={editmode}
                onChange={updateEditMode}
            />
            {editmode ? (
                <Form.Group controlId="ChecKAnswer">
                    <Form.Label>Enter New User Below:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newUser}
                        onChange={updateUsers}
                        placeholder={placeholder}
                    />
                </Form.Group>
            ) : null}
            {editmode ? (
                <Button
                    onClick={AddUsersandEditMode}
                    style={{
                        backgroundColor: "rgb(247, 197, 140)"
                    }}
                >
                    Add User and Leave Edit Mode
                </Button>
            ) : null}
            {editmode ? (
                <Button
                    onClick={DeleteUsersandEditMode}
                    style={{
                        backgroundColor: "rgb(247, 197, 140)"
                    }}
                >
                    Delete User and Leave Edit Mode
                </Button>
            ) : null}
        </div>
    );
}
