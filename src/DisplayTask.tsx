import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
//import { Task } from "../interfaces/task";
//import TASK from "../src/App";
import { editTask } from "../src/EditTask";

interface displayProps {
    name: string;
    description: string;
    status: boolean;
    image: string;
    steps: string[];
    difficulty: number;
    numUsers: number;
    time: number;
    role: string;
}

// interface roleProp {
//     role: string;
// }

export function DisplayTask(display: displayProps): JSX.Element {
    const [done, setDone] = useState<boolean>(display.status); //done = true means task is not done
    return (
        <div>
            <h3>Task: {display.name}</h3>
            <div>{display.description}</div>
            <Row>
                <Col>
                    <ul>
                        <li>
                            <Form.Check
                                type="checkbox"
                                id="is-done-check"
                                label={done ? "✔️" : "❌"}
                                checked={done}
                                onChange={() => setDone(!done)}
                            />
                        </li>
                        <li>{display.image}</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li>Difficulty: {display.difficulty}</li>
                        <li>Time: {display.time}</li>
                    </ul>
                </Col>
                <Col>
                    <div>Necessary Steps:</div>
                    <ul>
                        {display.steps.map((step: string) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <div>
                    {display.role === "super" ? (
                        <div>Number of Users: {display.numUsers}</div>
                    ) : (
                        <div>{""}</div>
                    )}
                </div>
                <Button onClick={editTask}>Edit Task</Button>
            </Row>
        </div>
    );
}
