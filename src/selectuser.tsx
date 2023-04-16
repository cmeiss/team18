import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function ChangeRole(): JSX.Element {
    const [Role, setRole] = useState<string>("User");
    const [roles, setRoles] = useState<string[]>(["Super", "Admin", "User1"]); //learn how to map this and append to this list so we can map it to out dropdown
    const [editmode, seteditmode] = useState<boolean>(false);
    const [newUser, setNewUser] = useState<string>("User2");

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
            <h3>Change Role Son</h3>
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
