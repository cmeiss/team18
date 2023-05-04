import React from "react";
import { Task } from "../interfaces/task";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
        [...taskProps.tasks].filter((item: Task): boolean =>
            item.name != deltask ? true : false
        );
        seteditmode(false);
    }

    return (
        <div>
            <Form.Check
                type={"switch"}
                id="editMode"
                label="Delete Task"
                className="mx-auto"
                style={{ width: "150px" }}
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <Form.Group controlId="CheckAnswer">
                    <Form.Label>Enter Task Below: </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={deltask}
                        onChange={updateTasks}
                    />
                </Form.Group>
            ) : null}
            {editMode ? (
                <Button onClick={remTask}>
                    Delete Task and Leave Edit Mode
                </Button>
            ) : null}
        </div>
    );
}
