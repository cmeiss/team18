import React, { useState } from "react";
import "./App.css";
import { CentralItemList } from "./list-components/CentralItemList";
import { Task } from "./interfaces/task";
//import { ChangeRole } from "./list-components/selectuser";
import { User } from "./interfaces/user";
//import { Button, Form } from "react-bootstrap";
import { UserList } from "./list-components/UserList";
import { ChangeRole } from "./list-components/ChangeRole";
import { ModifyUsers } from "./list-components/ModifyUsers";
import { AdminList } from "./list-components/adminlist";
import { TASKS } from "./TASKS";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    const [role, setRole] = useState<User>({
        name: "User1",
        userList: [
            {
                id: 0,
                name: "do Homework",
                description: "description",
                status: false,
                image: "picture",
                steps: ["Class 1", "Class 2"],
                difficulty: 0,
                numUsers: 2,
                time: 1800
            }
        ]
    }); //I set this intial user to make the user list display something
    const [roles, setRoles] = useState<User[]>([
        { name: "Please Select: ", userList: [] }, //Please select is necessary because the first item in drop down list is not selectable
        { name: "Super", userList: [] },
        { name: "Admin", userList: [] },
        { name: "User1", userList: TASKS }
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
                    </hgroup>

                    {/*Role Selection, DropDown Menu: */}
                    <div className="dropdown">
                        <span>Role select</span>
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

                {/* Displaying the Lists: */}
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
                <div className="central">
                    <CentralItemList
                        tasks={tasks}
                        role={role.name}
                        setTasks={updateTasks}
                    ></CentralItemList>
                    <div>
                        <AdminList
                            tasks={tasks}
                            role={role.name}
                            setTasks={updateTasks}
                        ></AdminList>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
