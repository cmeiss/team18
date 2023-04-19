import React from "react";
import { Task } from "./interfaces/task";
import { addTask } from "./TaskFunctions";
import { Button } from "react-bootstrap";
import { displayProps, DisplayTask } from "./DisplayTask";
import { TASK1, TASK2, TASK3 } from "./user-tests";
interface CentralItemProps {
    setTasks: (newTaskList: Task[]) => void;
    tasks: Task[];
    role: string;
}

/**
 * Helper function used to establish which role is populating the list.
 */
function whichRole(role: string): number {
    if (role === "super") {
        return 1;
    } else if (role === "admin") {
        return 2;
    } else {
        return 3;
    }
}

export function CentralItemList({ role, tasks, setTasks }: CentralItemProps) {
    //Place holder for the main item list
    const centralItemList = [TASK1, TASK2, TASK3];
    /**
     * Converting the array of tasks to an array of displayProps interfaces to be able to be used in DisplayTask
     */
    const displayPropList: displayProps[] = list.tasks.map(
        (task: Task): displayProps => ({
            name: task.name,
            description: task.description,
            status: task.status,
            image: task.image,
            steps: [...task.steps],
            difficulty: task.difficulty,
            numUsers: task.numUsers,
            time: task.time,
            role: thisRole
        })
    );

    return (
        <div className="List">
            <div className="central">
                <span> Central List </span>
                {centralItemList.map((item: Task) => (
                    <div></div>
                ))}
            </div>
        </div>
    );
}
