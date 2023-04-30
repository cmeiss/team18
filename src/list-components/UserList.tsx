/* eslint-disable indent */
import React from "react";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import { DisplayTask } from "./DisplayTask";
import "./UserList.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";
import { useDrop } from "react-dnd";
import { addTask } from "../TaskFunctions";

interface UserProps {
    user: User;
    setUser: (newUser: User) => void;
    users: User[];
    tasks: Task[]; //this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setTasks: (newTasks: Task[]) => void; ////this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setUsers: (users: User[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

<<<<<<< HEAD
export function UserList(user: UserProps): JSX.Element {
    function sort(
        type_of_sort: string,
        tasks: Task[],
        setTasks: (newTasks: Task[]) => void
    ): void {
        if (type_of_sort == "alphabet") {
            setTasks(filter_by_alphabetical_order(tasks));
        } else if (type_of_sort == "time") {
            setTasks(filter_by_time_needed(tasks));
        } else if (type_of_sort == "difficulty") {
            setTasks(filter_by_difficulty(tasks));
        }

=======
>>>>>>> 5851d3f2227a928749a9efbec68e5176b49c728f
export function UserList({
    user,
    setUser,
    users,
    tasks,
    setTasks,
    setUsers
}: UserProps): JSX.Element {
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
            setUser({
                name: user.name,
                userList: addTask(droppedTask, user.userList)
            });
            setUsers(updateUserTasks(addTask(droppedTask, user.userList)));
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

<<<<<<< HEAD
>>>>>>> 743b011128bfaa3e2211e081da964356c58f5e6e
=======
    function sort(
        type_of_sort: string,
        tasks: Task[],
        setTasks: (newTasks: Task[]) => void
    ): void {
        if (type_of_sort == "alphabet") {
            setTasks(filter_by_alphabetical_order(tasks));
        } else if (type_of_sort == "time") {
            setTasks(filter_by_time_needed(tasks));
        } else if (type_of_sort == "difficulty") {
            setTasks(filter_by_difficulty(tasks));
        }
    }

>>>>>>> 5851d3f2227a928749a9efbec68e5176b49c728f
    return (
        <div
            ref={drop}
            className="UserList"
            style={{
                backgroundColor: isOver ? "MediumSeaGreen" : "white"
            }}
        >
            {user.name === "Super" || user.name === "Admin" ? (
                <div></div>
            ) : (
                <div className="userList">
                    <h3>{user.name}s List:</h3>
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
                        <Button
                            onClick={() => sort("alphabet", tasks, setTasks)}
                        >
                            Sort by Alphabetical Order{" "}
                        </Button>
                        <Button
                            onClick={() => sort("difficulty", tasks, setTasks)}
                        >
                            Sort By Difficulty{" "}
                        </Button>
                        <Button onClick={() => sort("time", tasks, setTasks)}>
                            Sort By Time Needed{" "}
                        </Button>
                    </div>
                </div>
            )}
            {console.log("userList")}
            {console.log(...user.userList)}
            {console.log(setTasks)}
        </div>
    );
}
