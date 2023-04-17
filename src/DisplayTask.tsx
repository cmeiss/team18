import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
//import { Task } from "../interfaces/task";
//import TASK from "../src/App";
import { editTask } from "../src/EditTask";
import "./DisplayTask.css";

export interface displayProps {
    name: string;
    description: string;
    status: boolean;
    image: string;
    steps: string[];
    difficulty: number;
    numUsers: number;
    time: number;
    role: string; //added this in here to be able to pass the role state from app
}

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
                {/* The content of this row is only visible if role is super */}
                <div>
                    {display.role === "super" ? (
                        <div>Number of Users: {display.numUsers}</div>
                    ) : (
                        <div>{""}</div>
                    )}
                </div>
                <Button onClick={editTask}>Edit Task</Button>
                {/*EditTask will probably not be an own file, but we will rather
                have multiple editing components that are going to be called in here,
                we might also have to switch the editMode by clicking anywhere on
                the task and not on a specific button, but we should ask the professor 
                about that*/}
            </Row>
        </div>
    );
}

//To implement the edit mode, we will have to create and import components
//to edit all the attributes. These components need to be imported
//and called in DisplayView
//We will need an "editMode" state that specifies whether or not
//the edit components are showed
//This "editMode" state is changed when component is clicked, ask if
//this can be a button or if this needs to be throught the drag and
//drop technique
