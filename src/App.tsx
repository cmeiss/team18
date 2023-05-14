import React, { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import TaskPage from "./pages/taskPage";
import { User } from "./interfaces/user";
import { Task } from "./interfaces/task";
import { TASKS } from "./TASKS";

function App(): JSX.Element {
    //state needs to be defined here to keep changes after switching between pages
    const [role, setRole] = useState<User>({ name: "User1", userList: [] }); //I set this intial user to make the user list display something

    const [roles, setRoles] = useState<User[]>([
        { name: "Please Select: ", userList: [] }, //Please select is necessary because the first item in drop down list is not selectable
        { name: "Super", userList: [] },
        {
            name: "Admin",
            userList: []
        },
        { name: "User1", userList: [] }
    ]);
    const [tasks, setTasks] = useState<Task[]>(TASKS);

    return (
        <div className="App">
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
                        <Link to="/hompage">Home Page</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route
                    path="/about"
                    element={
                        <AboutPage
                            role={role}
                            setRole={setRole}
                            roles={roles}
                            setRoles={setRoles}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    }
                />
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
                <Route path="/" element={App}></Route>
            </Routes>
            <header className="App-header">
                <hgroup>
                    <h1>TimeWise</h1>
                    <i>Never waste another second</i>
                    <p>
                        Build your dream schedule today by clicking the Schedule
                        Builder Link in the top right corner
                    </p>
                </hgroup>
            </header>
        </div>
    );
}

export default App;
