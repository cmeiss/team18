import React, { useState } from "react";
import "./App.css";

import { Link, Navigate, Route, Routes } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import TaskPage from "./pages/taskPage";
import { User } from "./interfaces/user";
import { Task } from "./interfaces/task";
import { TASKS } from "./TASKS";
import { Col, Row } from "react-bootstrap";
import { ChangeRole } from "./list-components/ChangeRole";

//this function creates our navigation bar and header and enables switchig between pages.
//The header and navigation bar is displayed on all pages.
function App(): JSX.Element {
    //state needs to be defined here to keep changes after switching between pages
    //role state holds the currently selected user
    const [role, setRole] = useState<User>({ name: "User1", userList: [] }); //I set this intial user to make the user list display something

    //roles state holds all available users
    const [roles, setRoles] = useState<User[]>([
        { name: "Please Select: ", userList: [] }, //Please select is necessary because the first item in drop down list is not selectable
        { name: "Super", userList: [] },
        {
            name: "Admin",
            userList: []
        },
        { name: "User1", userList: [] }
    ]);
    //tasks state holds the current list of tasks
    const [tasks, setTasks] = useState<Task[]>(TASKS);

    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        const NewRole = roles.find(
            (role: User) => role.name === event.target.value
        );
        if (NewRole) {
            setRole(NewRole);
        }
    }

    return (
        <div className="App">
            <nav
                className="navbar
                        "
            >
                <div>
                    <Row>
                        <Col>
                            <Link to="/about">About</Link>
                        </Col>
                        <Col>
                            <Link to="/taskpage">Schedule Builder</Link>
                        </Col>
                        <Col className="role-select-pos">
                            <div className="dropdown">
                                <span style={{ fontWeight: "bold" }}>
                                    Choose Role
                                </span>
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
                        </Col>
                    </Row>
                </div>
            </nav>
            <header className="App-header">
                <hgroup>
                    <h1>TimeWise</h1>
                    <i>Never waste another second</i>
                    <p></p>
                </hgroup>
            </header>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route
                    path="/taskpage"
                    element={
                        <TaskPage
                            role={role}
                            setRole={setRole}
                            roles={roles}
                            setRoles={setRoles}
                            tasks={tasks}
                            setTasks={setTasks}
                        ></TaskPage>
                    }
                ></Route>
                <Route
                    path="/team18/"
                    element={
                        <TaskPage
                            role={role}
                            setRole={setRole}
                            roles={roles}
                            setRoles={setRoles}
                            tasks={tasks}
                            setTasks={setTasks}
                        ></TaskPage>
                    }
                ></Route>
                <Route path="/" element={"/taskPage"}></Route>
                <Route path="/homepage" element={<Navigate to="/taskpage" />} />
            </Routes>
        </div>
    );
}

export default App;
