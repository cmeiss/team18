import React from "react";
import { Task } from "./interfaces/task";

interface CentralItemProps {
    tasks: Task[];
    role: string;
}

export function CentralItemList(list: CentralItemProps): JSX.Element {
    return (
        <div>The central item list goes here. First item: {list.tasks[1]}</div>
    );
}
