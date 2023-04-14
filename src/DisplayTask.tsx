import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { Task } from "../interfaces/task";
//import TASK from "../src/App";
import { editTask } from "../src/EditTask";

interface taskProps {
    name: string;
    description: string;
    status: boolean;
    image: string;
    steps: string[];
    difficulty: number;
    numUsers: number;
    time: number;
}

export function DisplayTask(task: taskProps): JSX.Element {
    return (
        <div>
            <h3>Task: {task.name}</h3>
            <div>{task.description}</div>
            <div>
                {task.status ? "Done" : "ToDo"}
                {"     "} difficulty: {task.difficulty}
                {"     "}
                do at {task.time}
            </div>
            <div>{task.steps}</div>
            <div>{task.numUsers}</div>
            <div>{task.image}</div>
            <Button onClick={editTask}>Edit Task</Button>
        </div>
    );
}
