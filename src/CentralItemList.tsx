import React from "react";
import { Task } from "./interfaces/task";
//import { addTask } from "./TaskFunctions";
//import { displayProps, DisplayTask } from "./DisplayTask";

interface CentralItemProps {
    tasks: Task[];
    role: string;
}

/**
 * Helper function used to establish which role is populating the list.
 
function whichRole(role: string): number {
    if (role === "super") {
        return 1;
    } else if (role === "admin") {
        return 2;
    } else {
        return 3;
    }
}
*/
export function CentralItemList(list: CentralItemProps): JSX.Element {
    //const thisRole = list.role;
    /**
     * Converting the array of tasks to an array of displayProps to be able to be used in DisplayTask
     
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
    */
    /** 
    const convertedDisplay: JSX.Element = displayPropList.map(
        (prop: displayProps): JSX.Element => ({
            DisplayTask(prop);
        })
    );
    */
    return <div>The central item list:{list} </div>;
}
