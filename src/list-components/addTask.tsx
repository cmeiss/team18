import React from "react";
import { Button, Form } from "react-bootstrap";
import { Task } from "../interfaces/task";
import { useState } from "react";
//import the task state once it gets created

interface addTaskProp {
    tasks: Task[];
    item: Task;
    setTasks: (newTasks: Task[]) => void;
}

export function editNew(taskProps: addTaskProp): JSX.Element {
    ///states for each attribute
    const [newdescription, setDescription] = useState<string>("");
    const [newstatus, setStatus] = useState<boolean>(false);
    const [newimage, setImage] = useState<string>("");
    const [newsteps, setSteps] = useState<string[]>([""]);
    const [newdifficulty, setDifficulty] = useState<number>(0);
    const [newtime, setTime] = useState<number>(0);
    const [newnumusers, setNumUsers] = useState<number>(0);
    //states needed for editing functions
    const [neweditmode, seteditmode] = useState<boolean>(false); //whether the textbox will appear boolean
    const [newTask, setNewTask] = useState<string>("");

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
        setSteps([event.target.value]);
    }
    //change difficulty function
    function updateDifficulty(event: React.ChangeEvent<HTMLInputElement>) {
        setDifficulty(parseInt(event.target.value));
    }
    //change time function
    function updateTime(event: React.ChangeEvent<HTMLInputElement>) {
        setTime(parseInt(event.target.value));
    }
    //change num users function
    function updateNumUsers(event: React.ChangeEvent<HTMLInputElement>) {
        setNumUsers(parseInt(event.target.value));
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
                name: newTask,
                description: newdescription,
                status: newstatus,
                image: newimage,
                steps: newsteps,
                difficulty: newdifficulty,
                time: newtime,
                numUsers: newnumusers
            }
        ]);
        seteditmode(false);
    }

    return (
        <div>
            <Form.Check
                type={"switch"}
                id="editMode"
                label=""
                checked={neweditmode}
                onChange={updateEditMode}
            />
            {neweditmode ? (
                <Form.Group controlId="ChecKAnswer">
                    <Form.Label>Enter New Task Below:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newTask}
                        onChange={updateNewTask}
                    />
                </Form.Group>
            ) : null}
            {neweditmode ? (
                <Button onClick={addTask}>Add User and Leave Edit Mode</Button>
            ) : null}
        </div>
    );
}