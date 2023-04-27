import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Task } from "../interfaces/task";
import { EditTask } from "../editing-components/EditTask";
import "./DisplayTask.css";
import { useDrag } from "react-dnd";

//this is the old interface for the display task function, I am keeping it here as a reference if we need it again
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
    //updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    updateTasks: (newTasks: Task[]) => void;
    role: string;
}

export function DisplayTask(display: displayProps): JSX.Element {
    const [done, setDone] = useState<boolean>(display.task.status);
    const [{ isDragging }, drag] = useDrag({
        type: "task",
        item: { id: display.task.time },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div
            ref={drag}
            style={{
                border: isDragging ? "5px solid Violet" : "0px"
            }}
        >
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
                {/*The Edit Task function is producing the button to open the editing field*/}
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
