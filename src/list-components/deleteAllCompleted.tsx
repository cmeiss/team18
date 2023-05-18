import { Button } from "react-bootstrap";
import { Task } from "../interfaces/task";
import React from "react";

export interface delCompletedTaskProp {
    tasks: Task[];
    setTasks: (newTasks: Task[]) => void;
}

export function deleteAllCompleted(
    tasksProp: delCompletedTaskProp
): JSX.Element {
    const newTasks = tasksProp.tasks.filter(
        (task: Task): boolean => !task.status
    );

    function updatedTasks(tasks: Task[]) {
        tasksProp.setTasks(
            tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }))
        );
    }

    return (
        <div>
            <Button onClick={() => updatedTasks(newTasks)}>
                Delete All Completed
            </Button>
        </div>
    );
}
