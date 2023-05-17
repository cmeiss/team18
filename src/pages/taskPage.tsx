import React from "react";
import "../App.css";
import { CentralItemList } from "../list-components/CentralItemList";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import { UserList } from "../list-components/UserList";
import { ModifyUsers } from "../list-components/ModifyUsers";
import { AdminList } from "../list-components/adminlist";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AddTask } from "../list-components/addTask";
import { DeleteTask } from "../list-components/deleteTask-component";
import { Col, Row } from "react-bootstrap";

interface TaskPageProps {
    role: User;
    setRole: (newRole: User) => void;
    roles: User[];
    setRoles: (newRoles: User[]) => void;
    tasks: Task[];
    setTasks: (newTasks: Task[]) => void;
}

//This function creates our main page, the schedule builder.
function TaskPage({
    role,
    setRole,
    roles,
    setRoles,
    tasks,
    setTasks
}: TaskPageProps): JSX.Element {
    //eslint-disable-next-line prettier/prettier

    //the following function is just calling setTasks but is easier to include in test cases than the setTask function alone
    function updateTasks(tasks: Task[]) {
        setTasks(tasks);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="welcome">
                    Welcome {role.name}, lets reclaim the day!
                </header>
                <div>
                    Team 18 - Members: Cornelia Meiss, Kaitlyn Sullivan, Aaron
                    Oster, William Sharp, Sydni Wright
                </div>
                {/*Adding and Deleting Users: */}
                <Row>
                    <Col>
                        <div>
                            {role.name === "Super" ? (
                                <ModifyUsers
                                    Role={role}
                                    roles={roles}
                                    setRoles={setRoles}
                                ></ModifyUsers>
                            ) : null}
                        </div>
                    </Col>

                    {/*Adding and Deleting Tasks: */}

                    <Col>
                        <div>
                            {role.name === "Super" || role.name === "Admin" ? (
                                <AddTask
                                    tasks={tasks}
                                    //item={task}
                                    setTasks={setTasks}
                                ></AddTask>
                            ) : null}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {role.name === "Super" || role.name === "Admin" ? (
                                <DeleteTask
                                    setRoles={setRoles}
                                    roles={roles} // added the state of all the roles so this can delete from each users list
                                    tasks={tasks}
                                    //item={task}
                                    setTasks={setTasks}
                                ></DeleteTask>
                            ) : null}
                        </div>
                    </Col>
                </Row>

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
