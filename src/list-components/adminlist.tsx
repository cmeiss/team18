import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";

interface CentralItemProps {
    tasks: Task[];
    role: string;
}

export function AdminList({ role, tasks }: CentralItemProps) {
    const [AdminTasks, SetAdminTask] = useState<Task[]>(tasks);
    const [Tasks] = useState<Task[]>(tasks);
    const [Role] = useState<string>(role);

    SetAdminTask(
        Tasks.filter((task: Task): boolean =>
            task.numUsers < 2 ? true : false
        )
    );
    return (
        <div className="AdminList">
            <div className="Admin">
                <span> Central List </span>
                {AdminTasks.map((TASK: Task) => (
                    <DisplayTask
                        key={5}
                        name={TASK.name}
                        description={TASK.description}
                        status={TASK.status}
                        image={TASK.image}
                        steps={TASK.steps}
                        difficulty={TASK.difficulty}
                        numUsers={TASK.numUsers}
                        time={TASK.time}
                        role={Role}
                    ></DisplayTask>
                ))}
            </div>
        </div>
    );
}
