import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Task } from "../interfaces/task";
//import TASK from "../src/App";
import { EditTask } from "../editing-components/EditTask";
import "./DisplayTask.css";

// export interface displayProps {
//     name: string;
//     description: string;
//     status: boolean;
//     image: string;
//     steps: string[];
//     difficulty: number;
//     numUsers: number;
//     time: number;
//     role: string; //added this in here to be able to pass the role state from app
// }

export interface displayProps {
    task: Task;
    tasks: Task[];
    updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    role: string;
}

// const abc: Task[] = [
//     {
//         name: "test",
//         description: "this is the description",
//         status: false,
//         image: "picture",
//         steps: ["a", "b", "c"],
//         difficulty: 3,
//         numUsers: 2,
//         time: 1345
//     },
//     {
//         name: "test2",
//         description: "this is the description",
//         status: false,
//         image: "picture",
//         steps: ["a", "b", "c"],
//         difficulty: 3,
//         numUsers: 1,
//         time: 1345
//     }
// ];

export function DisplayTask(display: displayProps): JSX.Element {
    const [done, setDone] = useState<boolean>(display.task.status); //done = true means task is not done
    //const [abC] = useState<Task[]>(abc);
    return (
        <div>
            <h3>Task: {display.task.name}</h3>
            <div>{display.task.description}</div>
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
                        <li>{display.task.image}</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li>Difficulty: {display.task.difficulty}</li>
                        <li>Time: {display.task.time}</li>
                    </ul>
                </Col>
                <Col>
                    <div>Necessary Steps:</div>
                    <ul>
                        {display.task.steps.map((step: string) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                {/* The content of this row is only visible if role is super */}
                <div>
                    {display.role === "super" ? (
                        <div>Number of Users: {display.task.numUsers}</div>
                    ) : (
                        <div>{""}</div>
                    )}
                </div>
                <div>
                    <EditTask
                        tasks={display.tasks}
                        updateTasks={display.updateTasks}
                        task={display.task}
                    ></EditTask>
                </div>
                {console.log("DisplayTask is rendered")}
                {/* <Button
                    style={{
                        backgroundColor: "red",
                        width: "100px",
                        height: "40px",
                        display: "inline-block",
                        marginLeft: "220px"
                    }}
                    onClick={editTask}
                >
                    Edit Task
                </Button> */}
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
