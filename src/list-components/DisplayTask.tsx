import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
    const [isDescHidden, setIsDescHidden] = useState<boolean>(true);
    const [done, setDone] = useState<boolean>(display.task.status);
    const [{ isDragging }, drag] = useDrag({
        type: "task",
        item: { id: display.task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div ref={drag}>
            <Button
                className="Task-Button"
                onClick={() => setIsDescHidden(!isDescHidden)}
                style={{
                    border: isDragging ? "0px" : "0px"
                }}
            >
                <p>{display.task.name}</p>
                <img src={display.task.image} width="100px" alt="" />
            </Button>
            <div
                className="Food-Desc"
                hidden={isDescHidden}
                style={{ border: "5px solid Black" }}
            >
                <p>
                    <strong>Task: {display.task.name}</strong>
                    <br />
                    {display.task.description}
                    <br />
                    <Form.Check
                        type="checkbox"
                        id="is-done-check"
                        label={
                            done
                                ? "Completion status: ✔️"
                                : "Completion status: ❌"
                        }
                        checked={done}
                        onChange={() => setDone(!done)}
                    />
                    <br />
                    Difficulty: {display.task.difficulty}
                    <br />
                    Time: {display.task.time}
                    <br />
                    Steps:{" "}
                    {display.task.steps.map((step: string) => (
                        <li key={step}>{step}</li>
                    ))}
                    <div>
                        {display.role === "Super" ? (
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
                </p>
            </div>
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
