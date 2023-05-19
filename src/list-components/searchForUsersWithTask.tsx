import { Button, Form } from "react-bootstrap";
import { SearchUserByTask } from "./search";
import { User } from "../interfaces/user";
import React, { useState } from "react";
interface UserProps {
    user: User;
    users: User[];
}
export function SearchInSuper(UserProperties: UserProps): JSX.Element {
    const [SearchMode, SetSearchMode] = useState<boolean>(false); // this is uses to decide whether we should render the textbox and users etc.
    const [tasktosearch, SetTaskToSearch] = useState<string>(""); // this is the value the user has entered into the textbox
    const [placeholder] = useState<string>("Enter User"); //holds the current placeholder text to ask for input

    const [NamesOfUsers, SetNamesOfUsers] = useState<string>(""); // these are the names of all the users that have this task
    function setSearchMode() {
        //an onclick function that activates when we click the search user button renders textbox
        SetSearchMode(!SearchMode);
    }
    // this function below executes whenever you types something in the textbox it updates the value to search
    function updatetasktoSearch(event: React.ChangeEvent<HTMLInputElement>) {
        SetTaskToSearch(event.target.value);
    }
    function UpdateUsersWithTask() {
        const Users = SearchUserByTask(tasktosearch, UserProperties.users);
        SetNamesOfUsers(ConvertListToString(Users));
    }
    function ConvertListToString(usersWithTask: User[]) {
        const new_array_of_names = usersWithTask.map((user: User) => {
            return user.name;
        });
        return new_array_of_names.join(", ");
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
                Search For Users With Task Name:
            </Button>

            {SearchMode ? (
                <div>
                    <Button
                        onClick={UpdateUsersWithTask}
                        style={{
                            backgroundColor: "rgb(247, 197, 140)"
                        }}
                        className="search-button2"
                    >
                        Check If Users With Task Exist
                    </Button>
                    {NamesOfUsers !== ""
                        ? "Users With Task: " + NamesOfUsers
                        : "No users have this task "}
                    <Form.Group controlId="ChecKForUser">
                        <Form.Label style={{ fontWeight: "bold" }}></Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={tasktosearch}
                            onChange={updatetasktoSearch}
                            placeholder={placeholder}
                        />
                    </Form.Group>
                </div>
            ) : null}
        </div>
    );
}
