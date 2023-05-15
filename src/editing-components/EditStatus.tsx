/* eslint-disable indent */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Task } from "../interfaces/task";
import { makeTask } from "../TaskFunctions";
import { editProps } from "./EditTask";
/**
interface statusProps {
    status: boolean;
    setStatus: (newStatus: boolean) => void;
}
*/
export function EditStatus(edit: editProps): JSX.Element {
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }
    const [status, setStatus] = useState<boolean>(edit.task.status);
    const [saved, setSaved] = useState<boolean>(true);

    function flipSaved(): void {
        setSaved(!saved);
    }

    function changeTasks(
        tasks: Task[],
        id: number,
        name: string,
        desc: string,
        stat: boolean,
        img: string,
        steps: string[],
        diff: number,
        num: number,
        time: string,
        pend: boolean,
        ULid: number
    ) {
        const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
        edit.updateTasks(
            copy.map((TASK: Task) =>
                TASK.id === id
                    ? makeTask(
                          id,
                          name,
                          desc,
                          stat,
                          img,
                          steps,
                          diff,
                          num,
                          time,
                          pend,
                          ULid
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
    }
    return (
        <div>
            <Form.Check
                type="checkbox"
                id="is-done-check"
                label={
                    status ? "Completion Status: ✔️" : "Completion Status: ❌"
                }
                checked={status}
                onChange={updateStatus}
                onClick={flipSaved}
            />
            <div>
                <Button
                    onClick={() => {
                        changeTasks(
                            edit.tasks,
                            edit.task.id,
                            edit.task.name,
                            edit.task.description,
                            status,
                            edit.task.image,
                            edit.task.steps,
                            edit.task.difficulty,
                            edit.task.numUsers,
                            edit.task.time,
                            edit.task.pendingMode,
                            edit.task.userListId
                        );
                        flipSaved();
                    }}
                    hidden={saved}
                >
                    Confirm
                </Button>
            </div>
        </div>
    );
}
