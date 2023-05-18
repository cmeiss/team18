import React from "react";
import { Task } from "../interfaces/task";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./modifyTasksUsers.css";
import { User } from "../interfaces/user";

//this component is used to delete a task by entering the task's name in a textbox
export interface delTaskProp {
    tasks: Task[];
    setTasks: (newTasks: Task[]) => void;
    roles: User[]; //these are all of the users which will be used to access their tasks and delete them.
    setRoles: (newRoles: User[]) => void;
    user: User;
    setUser: (newUser: User) => void;
}

export function DeleteTask(taskProps: delTaskProp): JSX.Element {
    const [editMode, seteditmode] = useState<boolean>(false);
    const [deltask, setDelTask] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<string>("Enter Task");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateTasks(event: React.ChangeEvent<HTMLInputElement>) {
        setDelTask(event.target.value);
    }
    function helper_func(User: User): User {
        taskProps.setUser({
            name: User.name,
            userList: [
                ...User.userList.filter((item: Task): boolean =>
                    item.name.toLowerCase() != deltask.toLowerCase()
                        ? true
                        : false
                )
            ]
        });
        return taskProps.user;
    }

    function remTask() {
        const exists = taskProps.tasks.some(
            (TASK: Task) =>
                String(TASK.name).toLowerCase() === deltask.toLowerCase()
        );
        if (exists) {
            taskProps.setTasks(
                [...taskProps.tasks].filter((item: Task): boolean =>
                    item.name.toLowerCase() != deltask.toLowerCase()
                        ? true
                        : false
                )
            );
            let new_roles: User[] = [];
            for (let i = 0; taskProps.roles.length; i++) {
                helper_func(taskProps.roles[i]);
                new_roles = [...new_roles, taskProps.user];
            }
            taskProps.setRoles(new_roles);
            seteditmode(false);
            setDelTask("");
            setPlaceholder("Enter Task");
        } else {
            const newPH =
                deltask + " does not exist, please enter a different task";
            setDelTask("");
            setPlaceholder(newPH);
        }
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
                        Which task do you want to delete?
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={deltask}
                        onChange={updateTasks}
                        placeholder={placeholder}
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
