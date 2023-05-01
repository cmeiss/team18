import React from "react";
import { Form } from "react-bootstrap";
import { Task } from "../interfaces/task";
import { makeTask } from "../TaskFunctions";
import { editProps } from "./EditTask";

interface statusProps {
    status: boolean;
    setStatus: (newStatus: boolean) => void;
}

export function EditStatus({ status, setStatus }: statusProps) {
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
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
        time: number
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
                          time
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
        console.log(
            tasks.map((TASK: Task) =>
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
                          time
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
                label={status ? "✔️" : "❌"}
                checked={status}
                onChange={() => changeTasks(edit.tasks, status)}
            />
        </div>
    );
}
