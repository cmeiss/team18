import React from "react";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import { DisplayTask } from "./DisplayTask";
import "./UserList.css";
import { Button } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";

interface UserProps {
    user: User;
    tasks: Task[];
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

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
    }
    return (
        <div>
            {user.user.name === "Super" || user.user.name === "Admin" ? (
                <div></div>
            ) : (
                <div className="userList">
                    <h3>{user.user.name}s List:</h3>
                    {user.tasks.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={user.tasks}
                            updateTasks={user.setTasks}
                            role={user.user.name}
                        ></DisplayTask>
                    ))}
                    <div>
                        <Button
                            onClick={() =>
                                sort("alphabet", user.tasks, user.setTasks)
                            }
                        >
                            Sort by Alphabetical Order{" "}
                        </Button>
                        <Button
                            onClick={() =>
                                sort("difficulty", user.tasks, user.setTasks)
                            }
                        >
                            Sort By Difficulty{" "}
                        </Button>
                        <Button
                            onClick={() =>
                                sort("time", user.tasks, user.setTasks)
                            }
                        >
                            Sort By Time Needed{" "}
                        </Button>
                    </div>
                </div>
            )}
            {console.log("userList")}
            {console.log(...user.tasks)}
        </div>
    );
}
