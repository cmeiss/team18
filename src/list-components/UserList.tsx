/* eslint-disable indent */
import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import { DisplayTask } from "./DisplayTask";
import { Button, Col, Form, Row } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";
import { useDrop } from "react-dnd";
import { addTask, delTask, makeTask } from "../TaskFunctions";
import { search } from "./search";

//Question for Lab: do we need one unchangable id?

interface UserProps {
    user: User;
    setUser: (newUser: User) => void;
    users: User[];
    tasks: Task[]; //this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setTasks: (newTasks: Task[]) => void; ////this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setUsers: (users: User[]) => void;
}

export function UserList({
    user,
    setUser,
    users,
    tasks,
    setTasks,
    setUsers
}: UserProps): JSX.Element {
    const [TaskSearched, setTaskSearched] = useState<string>("");
    const [SearchMode, SetSearchMode] = useState<boolean>(false);
    const [SearchedTasks, setSearchedTasks] = useState<Task[]>([]);

    //this function copies the userList to ensure immutability
    function copyUL() {
        return user.userList.map((TASK: Task) => ({
            ...TASK,
            steps: [...TASK.steps]
        }));
    }

    //The next three functions are for sorting and searching in the list
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
                userList: filter_by_alphabetical_order(copyUL())
            });
        } else if (type_of_sort == "time") {
            setUser({
                name: user.name,
                userList: filter_by_time_needed(copyUL())
            });
        } else if (type_of_sort == "difficulty") {
            setUser({
                name: user.name,
                userList: filter_by_difficulty(copyUL())
            });
        }
    }

    //This function enables dropping tasks in the list and adds them to the UserList
    const [{ isOver }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => adddroppedTask(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    //This function updates the id of the task to the userListId to be able to find tasks individually
    function setULid(task: Task) {
        //this function changes the id of a task to be the userList id
        let max = -1;
        if (user.userList[0]) {
            user.userList.map((TASK: Task) => {
                if (TASK.id > max) {
                    max = TASK.id;
                }
            });
        }
        const newTask = makeTask(
            max + 1,
            task.name,
            task.description,
            task.status,
            task.image,
            task.steps,
            task.difficulty,
            task.numUsers,
            task.time,
            task.pendingMode
        );
        return newTask;
    }

    //This function adds a dropped task to the userList
    function adddroppedTask(id: number) {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        if (droppedTask) {
            setUser({
                name: user.name,
                userList: addTask(setULid(droppedTask), copyUL())
            });
            setUsers(updateUserTasks(addTask(setULid(droppedTask), copyUL())));
            const repeats = user.userList.reduce(
                (currentTotal: number, task: Task) =>
                    task.id === droppedTask.id
                        ? currentTotal + 1
                        : currentTotal + 0,
                0
            );
            if (repeats === 0) changeTasks(tasks, droppedTask.id, true);
        }
    }

    //This function deletes a dropped task from the userList
    function deleteTask(ULid: number) {
        const droppedTask: Task | undefined = user.userList.find(
            (task: Task) => task.id === ULid
        );
        if (droppedTask) {
            setUser({
                name: user.name,
                userList: delTask(droppedTask, copyUL())
            });
            setUsers(updateUserTasks(delTask(droppedTask, copyUL())));
            const repeats = user.userList.reduce(
                (currentTotal: number, task: Task) =>
                    task.id === droppedTask.id
                        ? currentTotal + 1
                        : currentTotal + 0,
                0
            );
            if (repeats === 1) changeTasks(tasks, droppedTask.id, false);
        }
    }

    //This function sets Role and Roles state with a new UserList
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

    //This function returns a new roles array with a changed userList
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
    function changeTasks(tasks: Task[], id: number, incrOrDec: boolean) {
        const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
        const currentNumUsers = tasks.find((T: Task) =>
            T.id === id ? T : null
        );
        let newNumUsers = -1;
        if (currentNumUsers && incrOrDec) {
            newNumUsers = currentNumUsers.numUsers + 1;
        }
        if (currentNumUsers && !incrOrDec) {
            newNumUsers = currentNumUsers.numUsers - 1;
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
                          TASK.time,
                          TASK.pendingMode
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
    }

    //This function implements the trashcan to delete individual tasks via drag and drop
    function TrashCan(): JSX.Element {
        const [{ isOver, canDrop }, drop] = useDrop({
            accept: "task",
            drop: (item: Task) => deleteTask(item.id),
            canDrop: (item: Task) => canDel(item),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        });
        if (isOver && canDrop) {
            return (
                <div ref={drop} className="trashOpen" data-testid="trashCan">
                    <img src={require("../trashCanOpen.jpg")} width="100px" />
                </div>
            );
        } else {
            return (
                <div ref={drop} className="trashClosed" data-testid="trashCan">
                    <img src={require("../trashCanClosed.jpg")} width="100px" />
                </div>
            );
        }
    }

    //This function actually deletes a task dropped on the trashcan
    function canDel(dropTask: Task): boolean {
        const droppedTask: Task | undefined = user.userList.find(
            (task: Task) => task.id === dropTask.id
        );
        return droppedTask ? true : false;
    }

    if (user.name !== "Super" && user.name !== "Admin") {
        return (
            <div className="UserList">
                <Row>
                    <Col>
                        <TrashCan></TrashCan>
                    </Col>
                    <Col>
                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                        <h2>{user.name}'s Schedule</h2>
                    </Col>
                    <Col>
                        <div className="Usersort-dropdown">
                            <button className="Usersort-dropbtn">
                                {/*eslint-disable-next-line prettier/prettier*/}
                                Sort by ▾
                            </button>
                            <div className="Usersort-options">
                                <Button
                                    onClick={() => sort("alphabet")}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Alphabetical{" "}
                                </Button>
                                <Button
                                    onClick={() => sort("difficulty")}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Difficulty{" "}
                                </Button>
                                <Button
                                    onClick={() => sort("time")}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Time Needed{" "}
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
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
                        <Form.Group controlId="CheckAnswer">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={TaskSearched}
                                onChange={UpdateTaskSearched}
                                placeholder="Which task are you looking for?"
                            />
                        </Form.Group>
                    ) : null}
                    {SearchMode
                        ? SearchedTasks.map((TASK: Task, index: number) => (
                              <DisplayTask
                                  key={index}
                                  task={TASK}
                                  tasks={user.userList}
                                  updateTasks={editUserList}
                                  role={user.name}
                              ></DisplayTask>
                          ))
                        : null}
                </Row>

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
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}
