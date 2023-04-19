import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";

interface CentralItemProps {
    tasks: Task[];
    role: string;
}

export function CentralItemList({ role, tasks }: CentralItemProps) {
    const [Tasks] = useState<Task[]>(tasks);
    const [Role] = useState<string>(role);

    return (
        <div className="List">
            <div className="central">
                <span> Central List </span>
                {Tasks.map((TASK: Task) => (
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
