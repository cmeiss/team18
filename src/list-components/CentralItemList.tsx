import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";

interface CentralItemProps {
    tasks: Task[];
    role: string;
    //setTasks: (newTasks: Task[]) => void;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function CentralItemList({ role, tasks, setTasks }: CentralItemProps) {
    const [Tasks] = useState<Task[]>(tasks);
    const [Role] = useState<string>(role);

    return (
        <div className="List">
            <div className="central">
                <span> Central List </span>
                {Tasks.map((TASK: Task, index: number) => (
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
}
