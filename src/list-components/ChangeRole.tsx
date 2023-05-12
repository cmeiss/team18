import React from "react";
import { Form } from "react-bootstrap";
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
                <Form.Label>Role Select</Form.Label>
                <Form.Select value="Roles" onChange={ChangeRoleProps.setRole}>
                    {ChangeRoleProps.roles.map((role: User, index: number) => (
                        // eslint-disable-next-line react/jsx-key
                        <option value={role.name} role={"option"} key={index}>
                            {role.name}
                        </option>
                    ))}
                </Form.Select>
            </div>
        </div>
    );
}
