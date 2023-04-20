import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { User } from "../interfaces/user";
//this is a function that returns a jsx element in our app.tsx file
interface ChangeRoleProperties {
    Role: User;
    roles: User[];
    setRole: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function ChangeRole(ChangeRoleProps: ChangeRoleProperties): JSX.Element {
    return (
        <div>
            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>Select Your Role</Form.Label>
                    <Form.Select
                        value="Roles"
                        onChange={ChangeRoleProps.setRole}
                    >
                        {ChangeRoleProps.roles.map((role: User) => (
                            // eslint-disable-next-line react/jsx-key
                            <option value={role.name}>{role.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                The user Chose {ChangeRoleProps.Role.name}
            </div>
        </div>
    );
}
