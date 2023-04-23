import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";
import "./adminList.css";

export interface AdminItemProps {
    tasks: Task[];
    role: string;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AdminList({ role, tasks, setTasks }: AdminItemProps) {
    const [Tasks] = useState<Task[]>(tasks);
    const [Role] = useState<string>(role);

    const NewTasks = Tasks.filter((task: Task): boolean =>
        task.numUsers < 2 ? true : false
    );
    if (role === "Admin") {
        return (
            <div className="AdminList">
                <div className="Admin">
                    <span> Admin List </span>
                    {NewTasks.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={Role}
                        ></DisplayTask>
                    ))}
                </div>
            </div>
        );
    } else {
        return <span></span>;
    }
}
