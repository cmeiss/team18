import React from "react";
import { Button, Form } from "react-bootstrap";
import { Task } from "../interfaces/task";
import { useState } from "react";
import "./modifyTasksUsers.css";
import { EditDifficulty } from "../editing-components/edit-difficulty";
import { EditTime } from "../editing-components/EditTime";

interface addTaskProp {
    tasks: Task[];
    setTasks: (newTasks: Task[]) => void;
}

export function AddTask(taskProps: addTaskProp): JSX.Element {
    ///states for each attribute
    const [newdescription, setDescription] = useState<string>("");
    const [newstatus, setStatus] = useState<boolean>(false);
    const [newimage, setImage] = useState<string>("");
    const [newsteps, setSteps] = useState<string[]>([""]);
    const [newdifficulty, setDifficulty] = useState<number>(0);
    const [newtime, setTime] = useState<string>("");
    //states needed for editing functions
    const [neweditmode, seteditmode] = useState<boolean>(false); //whether the textbox will appear boolean
    const [newTask, setNewTask] = useState<string>("");

    function findMax(existingTasks: Task[]) {
        let max = existingTasks[0].id;
        existingTasks.map((TASK: Task) => {
            if (TASK.id > max) {
                max = TASK.id;
            }
        });
        return max;
    }

    //change description function
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }
    //change status function
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }
    //change image function
    function updateImage(event: React.ChangeEvent<HTMLInputElement>) {
        setImage(event.target.value);
    }
    //change steps function
    function updateSteps(event: React.ChangeEvent<HTMLInputElement>) {
        const newSteps = String(event.target.value).split(",");
        setSteps(newSteps);
    }
    //change edit mode
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    //change task function
    function updateNewTask(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    //add task
    function addTask() {
        taskProps.setTasks([
            ...taskProps.tasks,
            {
                id: findMax(taskProps.tasks) + 1, //newId,
                name: newTask,
                description: newdescription,
                status: newstatus,
                image: newimage,
                steps: newsteps,
                difficulty: newdifficulty,
                time: newtime,
                numUsers: 0, //newnumusers,
                pendingMode: false
            }
        ]);
        seteditmode(false);
    }

    return (
        <div className="addTask">
            <div className="addTaskSwitch">
                <Form.Check
                    type={"switch"}
                    className="mx-auto"
                    style={{ width: "150px", fontWeight: "bold" }}
                    id="editMode"
                    label="Add Task"
                    checked={neweditmode}
                    onChange={updateEditMode}
                />
            </div>
            {neweditmode ? (
                <Form.Group controlId="CheckAnswer">
                    <div className="newTaskName">
                        <Form.Label style={{ fontWeight: "bold" }}>
                            New Task Name:
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newTask}
                            onChange={updateNewTask}
                            placeholder="Enter name here"
                        />
                    </div>
                    <div className="newTaskDescription">
                        <Form.Label style={{ fontWeight: "bold" }}>
                            New Task Description:
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newdescription}
                            onChange={updateDescription}
                            placeholder="Enter description here"
                        />
                    </div>
                    <div className="newTaskStatus">
                        <Form.Label style={{ fontWeight: "bold" }}>
                            Check New Task Status Below:
                        </Form.Label>
                        <div>
                            <input
                                type="checkbox"
                                checked={newstatus}
                                onChange={updateStatus}
                            />
                            {newstatus ? "✔️" : "❌"}
                        </div>
                    </div>
                    <div className="newTaskImage">
                        <Form.Label style={{ fontWeight: "bold" }}>
                            New Task Image:
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newimage}
                            onChange={updateImage}
                            placeholder="Enter image URL here"
                        />
                    </div>
                    <div className="newTaskSteps">
                        <Form.Label style={{ fontWeight: "bold" }}>
                            New Task Steps:
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newsteps}
                            onChange={updateSteps}
                            placeholder="Enter steps as a comma seperated list, e.g. step1,step2"
                        />
                    </div>
                    <div className="newTaskDifficulty">
                        <EditDifficulty
                            diff={newdifficulty}
                            setDifficulty={setDifficulty}
                        ></EditDifficulty>
                    </div>
                    <div className="newTaskTime">
                        <EditTime time={newtime} setTime={setTime}></EditTime>
                    </div>
                </Form.Group>
            ) : null}
            {neweditmode ? (
                <Button onClick={addTask}>Add Task and Leave Edit Mode</Button>
            ) : null}
        </div>
    );
}
