import React from "react";
import { Task } from "../interfaces/task";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./modifyTasksUsers.css";

export interface delTaskProp {
    tasks: Task[];
    //item: Task;
    setTasks: (newTasks: Task[]) => void;
}

export function DeleteTask(taskProps: delTaskProp): JSX.Element {
    const [editMode, seteditmode] = useState<boolean>(false);
    const [deltask, setDelTask] = useState<string>("");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateTasks(event: React.ChangeEvent<HTMLInputElement>) {
        setDelTask(event.target.value);
    }

    function remTask() {
        taskProps.setTasks(
            [...taskProps.tasks].filter((item: Task): boolean =>
                item.name.toLowerCase() != deltask.toLowerCase() ? true : false
            )
        );
        seteditmode(false);
    }

    return (
        <div className="deleteTask">
            <Form.Check
                type={"switch"}
                role="switch"
                id="editMode"
                label="Delete Task"
                className="mx-auto"
                style={{ width: "150px", fontWeight: "bold" }}
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <Form.Group controlId="CheckAnswer">
                    <Form.Label style={{ fontWeight: "bold" }}>
                        Enter Task Below:{" "}
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={deltask}
                        onChange={updateTasks}
                    />
                </Form.Group>
            ) : null}
            {editMode ? (
                <Button
                    onClick={remTask}
                    style={{
                        backgroundColor: "rgb(247, 197, 140)"
                    }}
                >
                    Delete Task and Leave Edit Mode
                </Button>
            ) : null}
        </div>
    );
}
