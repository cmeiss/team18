import { Button, Form } from "react-bootstrap";
import { search } from "./search";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import React, { useState } from "react";
interface UserProps {
    user: User;
    setUser: (newUser: User) => void;
    users: User[];
    tasks: Task[]; //this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setTasks: (newTasks: Task[]) => void; ////this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setUsers: (users: User[]) => void;
}
export function searchInSuper(UserProperties: UserProps): JSX.Element {
    const [SearchMode, SetSearchMode] = useState<boolean>(false);
    const [tasktosearch, SetTaskToSearch] = useState<string>("");
    function setSearchMode() {
        SetSearchMode(!SearchMode);
    }
    function updatetasktoSearch(event: React.ChangeEvent<HTMLInputElement>) {
        SetTaskToSearch(event.target.value);
    }
    return (
        <div>
            <Button
                onClick={setSearchMode}
                style={{
                    backgroundColor: "rgb(247, 197, 140)"
                }}
                className="search-button"
            >
                Search:
            </Button>
            {SearchMode ? (
                <Form.Group controlId="ChecKAnswer">
                    <Form.Label style={{ fontWeight: "bold" }}>
                        Which user would you like to edit?
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={tasktosearch}
                        onChange={updatetasktoSearch}
                        placeholder={placeholder}
                        type={"textboxUserInput"}
                    />
                </Form.Group>
            ) : null}
        </div>
    );
}
