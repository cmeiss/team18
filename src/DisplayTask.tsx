import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
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
            <Row>
                <Col>
                    <ul>
                        <li>{task.status ? "Done" : "ToDo"}</li>
                        <li>{task.image}</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li>Difficulty: {task.difficulty}</li>
                        <li>Time: {task.time}</li>
                    </ul>
                </Col>
                <Col>
                    <div>Necessary Steps:</div>
                    <ul>
                        {task.steps.map((step: string) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <div>Number of Users: {task.numUsers}</div>
                <Button onClick={editTask}>Edit Task</Button>
            </Row>
        </div>
    );
}
