import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";

interface CentralItemProps {
    tasks: Task[];
    role: string;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function CentralItemList({ role, tasks, setTasks }: CentralItemProps) {
    return (
        <div className="List">
            <div className="central">
                <span> Central List </span>
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
            {console.log("Central Item List")}
            {console.log(...tasks)}
            {/*the purpose of this console.log statement is to display the changes in the tasks in the console because they are not showing in the displayed app right now*/}
        </div>
    );
}
