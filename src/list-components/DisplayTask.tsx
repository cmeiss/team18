import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Task } from "../interfaces/task";
import { EditTask } from "../editing-components/EditTask";
import "./DisplayTask.css";
import { useDrag } from "react-dnd";
import { EditStatus } from "../editing-components/EditStatus";

export interface displayProps {
    task: Task;
    tasks: Task[];
    updateTasks: (newTasks: Task[]) => void;
    role: string;
}

/* DisplayTask displays each individual task. It is called in all list functions and needs to be 
called on every displayed task. It also holds the edit task button and connects the task to the editing component. */
export function DisplayTask(display: displayProps): JSX.Element {
    const [hideDetails, setHideDetails] = useState<boolean>(true);
    const [{ isDragging }, drag] = useDrag({
        type: "task",
        item: { id: display.task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    function DisplayEditTask(): JSX.Element {
        return (
            <div hidden={false}>
                <EditTask
                    tasks={display.tasks}
                    updateTasks={display.updateTasks}
                    task={display.task}
                ></EditTask>
            </div>
        );
    }

    //this function calls the component to display the status of the task
    function CallEditStatus(): JSX.Element {
        return (
            <EditStatus
                tasks={display.tasks}
                updateTasks={display.updateTasks}
                task={display.task}
            ></EditStatus>
        );
    }

    return (
        <div
            ref={drag}
            className="Task"
            style={
                hideDetails
                    ? { border: "" }
                    : { border: "5px solid rgb(180, 102, 38)" }
            }
        >
            <Button
                className="Task-Button"
                onClick={() => setHideDetails(!hideDetails)}
                style={{
                    border: isDragging ? "0px" : "0px"
                }}
            >
                <div>
                    <h4>{display.task.name}</h4>
                    <img src={display.task.image} width="100px" alt="" />
                </div>
            </Button>
            <div
                className="Task-Desc"
                hidden={hideDetails}
                style={{ border: "5px solid rgb(255, 239, 195)" }}
            >
                {/*Displaying the task's attributes: */}
                <p>
                    <strong>Task: {display.task.name}</strong>
                    <br />
                    {display.task.description}
                    <br />
                    <CallEditStatus></CallEditStatus>
                    <br />
                    Difficulty: {display.task.difficulty}
                    <br />
                    Time: {display.task.time}
                    <br />
                    Steps:
                    <ol style={{ listStyleType: "decimal" }}>
                        {display.task.steps.map(
                            (step: string, index: number) => (
                                <li key={index}>{step}</li>
                            )
                        )}
                    </ol>
                    <div>
                        {display.role === "Super" ? (
                            <div>Number of Users: {display.task.numUsers}</div>
                        ) : (
                            <div>{""}</div>
                        )}
                    </div>
                    {/*Edit Task Button:  */}
                    <div>
                        {display.role === "user-central" ? (
                            <div hidden={true}>
                                <EditTask
                                    tasks={display.tasks}
                                    updateTasks={display.updateTasks}
                                    task={display.task}
                                ></EditTask>
                            </div>
                        ) : (
                            <DisplayEditTask></DisplayEditTask>
                        )}
                    </div>
                </p>
            </div>
        </div>
    );
}
