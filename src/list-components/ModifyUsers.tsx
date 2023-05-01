import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { User } from "../interfaces/user";
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
    const [newUser, setNewUser] = useState<string>("User2"); //the value currently in the text box of edit mode
    //function that sets role based on the role clicked
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateUsers(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(event.target.value);
    }

    function AddUsersandEditMode() {
        ChangeRoleProps.setRoles([
            ...ChangeRoleProps.roles,
            { name: newUser, userList: [] }
        ]);
        seteditmode(false);
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
        <div>
            <Form.Check
                type={"switch"}
                id="editMode"
                label="Edit Users"
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
                    />
                </Form.Group>
            ) : null}
            {editmode ? (
                <Button onClick={AddUsersandEditMode}>
                    Add User and Leave Edit Mode
                </Button>
            ) : null}
            {editmode ? (
                <Button onClick={DeleteUsersandEditMode}>
                    Delete User and Leave Edit Mode
                </Button>
            ) : null}
        </div>
    );
}
