import React from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";
import "./adminList.css";
import { Button } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";

interface AdminItemProps {
    tasks: Task[];
    role: string;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AdminList({ role, tasks, setTasks }: AdminItemProps) {
    const MyArray = ({ tasks }: AdminItemProps) => {
        const NewTasks = tasks.filter((task: Task): boolean =>
            task.numUsers < 2 ? true : false
        );
        return (
            <>
                {NewTasks.map((TASK: Task, index: number) => (
                    <DisplayTask
                        key={index}
                        task={TASK}
                        tasks={tasks}
                        updateTasks={setTasks}
                        role={role}
                    ></DisplayTask>
                ))}
            </>
        );
    };
    const NewTasks = tasks.filter((task: Task): boolean =>
        task.numUsers < 2 ? true : false
    );
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
    if (role === "Admin") {
        return (
            <div className="AdminList">
                <div className="Admin">
                    <span> Admin List </span>
                    {tasks.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={role}
                        ></DisplayTask>
                    ))}
                </div>

                <Button onClick={() => sort("alphabet", tasks, setTasks)}>
                    Sort by Alphabetical Order{" "}
                </Button>
                <Button onClick={() => sort("difficulty", tasks, setTasks)}>
                    Sort By Difficulty{" "}
                </Button>
                <Button onClick={() => sort("time", tasks, setTasks)}>
                    Sort By Time Needed{" "}
                </Button>
            </div>
        );
    } else {
        return <span></span>;
    }
}
