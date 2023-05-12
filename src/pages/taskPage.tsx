import React, { useState } from "react";
import "../App.css";
import { CentralItemList } from "../list-components/CentralItemList";
import { Task } from "../interfaces/task";
//import { ChangeRole } from "./list-components/selectuser";
import { User } from "../interfaces/user";
//import { Button, Form } from "react-bootstrap";
import { UserList } from "../list-components/UserList";
import { ChangeRole } from "../list-components/ChangeRole";
import { ModifyUsers } from "../list-components/ModifyUsers";
import { AdminList } from "../list-components/adminlist";
import { TASKS } from "../TASKS";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AddTask } from "../list-components/addTask";
import { DeleteTask } from "../list-components/deleteTask-component";
import { Col, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";

import { AboutPage } from "./AboutPage";
import App from "../App";

function TaskPage(): JSX.Element {
    // eslint-disable-next-line prettier/prettier
    const [role, setRole] = useState<User>({ name: "User1", userList: [] }); //I set this intial user to make the user list display something

    const [roles, setRoles] = useState<User[]>([
        { name: "Please Select: ", userList: [] }, //Please select is necessary because the first item in drop down list is not selectable
        { name: "Super", userList: [] },
        {
            name: "Admin",
            userList: []
        },
        { name: "User1", userList: [] }
    ]); // these are original users these can be changed
    const [tasks, setTasks] = useState<Task[]>(TASKS);

    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        const NewRole = roles.find(
            (role: User) => role.name === event.target.value
        );
        if (NewRole) {
            setRole(NewRole);
        }
    }

    //the following function is just calling setTasks but is easier to include in test cases than the setTask function alone
    function updateTasks(tasks: Task[]) {
        setTasks(tasks);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="App-header">
                    <hgroup>
                        <h1>TimeWise</h1>
                        <i>Never waste another second</i>
                        <nav
                            className="navbar
                        "
                        >
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/taskpage">Schedule Builder</Link>
                                </li>
                                <li>
                                    <Link to="/homepage">Homepage</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/homepage" element={<App />} />
                        </Routes>
                    </hgroup>

                    <div className="dropdown">
                        <div className="dropdown-content">
                            <div>
                                <ChangeRole
                                    Role={role}
                                    roles={roles}
                                    setRole={updateRole}
                                ></ChangeRole>
                            </div>
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
                {/*Adding and Deleting Users: */}
                <div>
                    <div>
                        {role.name === "Super" ? (
                            <ModifyUsers
                                Role={role}
                                roles={roles}
                                setRoles={setRoles}
                            ></ModifyUsers>
                        ) : null}
                    </div>
                </div>

                {/*Adding and Deleting Tasks: */}
                <div>
                    <div>
                        {role.name === "Super" || role.name === "Admin" ? (
                            <AddTask
                                tasks={tasks}
                                //item={task}
                                setTasks={setTasks}
                            ></AddTask>
                        ) : null}
                    </div>

                    <div>
                        {role.name === "Super" || role.name === "Admin" ? (
                            <DeleteTask
                                tasks={tasks}
                                //item={task}
                                setTasks={setTasks}
                            ></DeleteTask>
                        ) : null}
                    </div>
                </div>

                {/* Displaying the Lists: */}

                <Row>
                    <Col>
                        <div className="central">
                            <CentralItemList
                                tasks={tasks}
                                role={role.name}
                                setTasks={updateTasks}
                            ></CentralItemList>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <UserList
                                user={role}
                                setUser={setRole}
                                users={roles}
                                tasks={tasks}
                                setTasks={updateTasks}
                                setUsers={setRoles}
                            ></UserList>
                        </div>
                        <div>
                            <AdminList
                                users={roles}
                                setUsers={setRoles}
                                tasks={tasks}
                                user={role}
                                setTasks={updateTasks}
                            ></AdminList>
                        </div>
                    </Col>
                </Row>
            </div>
        </DndProvider>
    );
}

export default TaskPage;
