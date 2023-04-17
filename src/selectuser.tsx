import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//this is a function that returns a jsx element in our app.tsx file
interface ChangeRoleProperties {
    Role: string;
    roles: string[];
}

export function ChangeRole(ChangeRoleProps: ChangeRoleProperties): JSX.Element {
    // creating 4 states here that will be used by our components to add and delete users
    const [Role, setRole] = useState<string>(ChangeRoleProps.Role); //Starting role default set to user
    const [roles, setRoles] = useState<string[]>(ChangeRoleProps.roles); // these are original users these can be changed
    const [editmode, seteditmode] = useState<boolean>(false); //whether the textbox will appear boolean
    const [newUser, setNewUser] = useState<string>("User2"); //the value currently in the text box of edit mode
    // function that sets role based on the role clicked
    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        setRole(event.target.value);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateUsers(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(event.target.value);
    }

    function AddUsersandEditMode() {
        setRoles([...roles, newUser]);
        seteditmode(false);
    }
    function DeleteUsersandEditMode() {
        setRoles(
            [...roles].filter((role: string): boolean =>
                role !== newUser ? true : false
            )
        );
        seteditmode(false);
    }
    return (
        <div>
            <h3>Change Role</h3>
            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>Select Your Role</Form.Label>
                    <Form.Select value={Role} onChange={updateRole}>
                        {roles.map((role: string) => (
                            // eslint-disable-next-line react/jsx-key
                            <option value={role}>{role}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                The user Chose {Role}
            </div>
            <h3>Click Switch to add or delete users</h3>
            <Form.Check
                type={"switch"}
                id="editMode"
                label=""
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
