import React, { useState } from "react";
import "./App.css";
import { CentralItemList } from "./list-components/CentralItemList";
import { Task } from "./interfaces/task";
//import { ChangeRole } from "./list-components/selectuser";
import { User } from "./interfaces/user";
import { Button, Form } from "react-bootstrap";
import { UserList } from "./list-components/UserList";

const TASK: Task[] =
    //this is a completely random test task array to get something
    //displayed, needs to be deleted once we have an actual task list
    [
        {
            name: "test",
            description: "this is the description",
            status: false,
            image: "picture",
            steps: ["a", "b", "c"],
            difficulty: 3,
            numUsers: 2,
            time: 1345
        },
        {
            name: "test2",
            description: "this is the description",
            status: false,
            image: "picture",
            steps: ["a", "b", "c"],
            difficulty: 3,
            numUsers: 2,
            time: 1345
        }
    ];

function App(): JSX.Element {
    const [role, setRole] = useState<User>({ name: "User1", userList: TASK }); //I set this intial user to make the user list display something
    const [roles, setRoles] = useState<User[]>([
        { name: "Super", userList: [] },
        { name: "Admin", userList: [] },
        { name: "User1", userList: TASK }
    ]); // these are original users these can be changed
    const [editmode, seteditmode] = useState<boolean>(false); //whether the textbox will appear boolean
    const [newUser, setNewUser] = useState<string>("User2"); //the value currently in the text box of edit mode

    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        const NewRole = roles.find(
            (role: User) => role.name === event.target.value
        );
        if (NewRole) {
            setRole(NewRole);
        }
    }

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateUsers(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(event.target.value);
    }

    function AddUsersandEditMode() {
        setRoles([...roles, { name: newUser, userList: [] }]);
        seteditmode(false);
    }

    function DeleteUsersandEditMode() {
        setRoles(
            [...roles].filter((role: User): boolean =>
                role.name !== newUser ? true : false
            )
        );
        seteditmode(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <hgroup>
                    <h1>TimeWise</h1>
                    <i>Never waste another second</i>
                </hgroup>
                <div className="dropdown">
                    <span>Role select</span>
                    <div className="dropdown-content">
                        <Form.Select value={role.name} onChange={updateRole}>
                            {roles.map((role: User) => (
                                // eslint-disable-next-line react/jsx-key
                                <option value={role.name}>{role.name}</option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
            </header>
            <div className="welcome">
                Welcome {role.name}, lets reclaim the day!
            </div>
            <div>
                Team Members: Cornelia Meiss, Kaitlyn Sullivan,Aaron Oster,
                William Sharp, Sydni Wright
            </div>

            {/*Handling state for role selection: */}
            <div>
                <div>
                    {role.name === "Super" ? (
                        <div>
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
                                    <Form.Label>
                                        Enter New User Below:
                                    </Form.Label>
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
                    ) : null}
                </div>
            </div>
            {/*End of role selection part*/}
            <div className="user-list">
                <UserList user={role}></UserList>
            </div>
            <div className="central">
                <CentralItemList
                    tasks={TASK}
                    role={role.name}
                ></CentralItemList>
            </div>
        </div>
    );
}

export default App;
