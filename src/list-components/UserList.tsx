/* eslint-disable indent */
import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import { DisplayTask } from "./DisplayTask";
import { Button, Form } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";
import { useDrop } from "react-dnd";
import { addTask, makeTask } from "../TaskFunctions";
import { search } from "./search";

interface UserProps {
    user: User;
    setUser: (newUser: User) => void;
    users: User[];
    tasks: Task[]; //this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setTasks: (newTasks: Task[]) => void; ////this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setUsers: (users: User[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// export function UserList(user: UserProps): JSX.Element {

export function UserList({
    user,
    setUser,
    users,
    tasks,
    setTasks,
    setUsers
}: UserProps): JSX.Element {
    const [TaskSearched, setTaskSearched] = useState<string>(
        "hfaodfhqui3q47r543777777777777777777777777777777"
    );
    const [SearchMode, SetSearchMode] = useState<boolean>(false);
    const [SearchedTasks, setSearchedTasks] = useState<Task[]>([]);
    function UpdateTaskSearched(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskSearched(event.target.value);
        setSearchedTasks(search(TaskSearched, user.userList));
    }
    function setSearchMode() {
        SetSearchMode(!SearchMode);
    }
    function sort(type_of_sort: string): void {
        if (type_of_sort == "alphabet") {
            setUser({
                name: user.name,
                userList: filter_by_alphabetical_order(user.userList)
            });
        } else if (type_of_sort == "time") {
            setUser({
                name: user.name,
                userList: filter_by_time_needed(user.userList)
            });
        } else if (type_of_sort == "difficulty") {
            setUser({
                name: user.name,
                userList: filter_by_difficulty(user.userList)
            });
        }
    }

    const [{ isOver }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => addTaskUserList(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addTaskUserList(id: number) {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        console.log({ ...droppedTask });
        console.log("dropping task");
        if (droppedTask) {
            //updating the Role state and add the new task to the currently displayed user list
            setUser({
                name: user.name,
                userList: addTask(droppedTask, user.userList)
            });
            //updating the UserList in the Roles state to keep the correct user list after role changes
            setUsers(updateUserTasks(addTask(droppedTask, user.userList)));
            //updating the number of Users of the dropped task in the central item list
            changeTasks(tasks, droppedTask.id);
        }
    }

    function editUserList(newTasks: Task[]) {
        const newUser = { name: user.name, userList: newTasks };
        setUser({ name: user.name, userList: newTasks });
        const newRoles = users.map((role: User) =>
            role.name === newUser.name
                ? newUser
                : {
                      name: role.name,
                      userList: role.userList.map((T: Task) => ({
                          ...T,
                          steps: [...T.steps]
                      }))
                  }
        );
        setUsers(newRoles);
    }

    function updateUserTasks(newTasks: Task[]) {
        const newUser = { name: user.name, userList: newTasks };
        const newRoles = users.map((role: User) =>
            role.name === newUser.name
                ? newUser
                : {
                      name: role.name,
                      userList: role.userList.map((T: Task) => ({
                          ...T,
                          steps: [...T.steps]
                      }))
                  }
        );
        return newRoles;
    }

    //this function increments the numberOfUsers of the task with the passed in ID
    function changeTasks(tasks: Task[], id: number) {
        const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
        const currentNumUsers = tasks.find((T: Task) =>
            T.id === id ? T : null
        );
        let newNumUsers = -1;
        if (currentNumUsers) {
            newNumUsers = currentNumUsers.numUsers + 1;
        }
        setTasks(
            copy.map((TASK: Task) =>
                TASK.id === id
                    ? makeTask(
                          id,
                          TASK.name,
                          TASK.description,
                          TASK.status,
                          TASK.image,
                          TASK.steps,
                          TASK.difficulty,
                          newNumUsers,
                          TASK.time
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
    }

    if (user.name !== "Super" && user.name !== "Admin") {
        return (
            <div className="UserList">
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                <h3>{user.name}'s Schedule:</h3>
                <div
                    className="userTaskList"
                    ref={drop}
                    style={{
                        backgroundColor: isOver ? "SageGreen" : "white"
                    }}
                >
                    {user.userList.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={user.userList}
                            updateTasks={editUserList}
                            role={user.name}
                        ></DisplayTask>
                    ))}
                    <div>
                        <Button onClick={() => sort("alphabet")}>
                            Sort by Alphabetical Order{" "}
                        </Button>
                        <Button onClick={() => sort("difficulty")}>
                            Sort By Difficulty{" "}
                        </Button>
                        <Button onClick={() => sort("time")}>
                            Sort By Time Needed{" "}
                        </Button>
                        <Button onClick={setSearchMode}>SearchTasks</Button>
                        {SearchMode ? (
                            <Form.Group controlId="ChecKAnswer">
                                <Form.Label>Search Task By Name</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={TaskSearched}
                                    onChange={UpdateTaskSearched}
                                />
                            </Form.Group>
                        ) : null}
                    </div>
                </div>
            </div>
        );
        // {console.log("userList")}
        // {console.log(...user.userList)}
        // {console.log(setTasks)}
    } else {
        return <></>;
    }
}
