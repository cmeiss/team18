/* eslint-disable indent */
import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import { makeTask } from "../TaskFunctions";
import { EditTime } from "./EditTime";
import { EditDifficulty } from "./edit-difficulty";
import { EditDescription } from "./EditDescription";
import { EditSteps } from "./EditSteps";

export interface editProps {
    tasks: Task[];
    updateTasks: (newTasks: Task[]) => void;
    task: Task;
}

/*
This component allows the editing of tasks. It calls other components to get the new values
for a task, combines them into a new task and replaces the old task in that tasks state with 
the new task.
 */
export function EditTask(edit: editProps): JSX.Element {
    //the state variables below hold the new values for each task field
    const [id] = useState<number>(edit.task.id);
    const [name] = useState<string>(edit.task.name);
    const [desc, setDesc] = useState<string>(edit.task.description);
    const [status] = useState<boolean>(edit.task.status);
    const [img] = useState<string>(edit.task.image);
    const [pending] = useState<boolean>(edit.task.pendingMode);
    const [steps, setSteps] = useState<string[]>(edit.task.steps);
    const [diff, setDifficulty] = useState<number>(edit.task.difficulty);
    const [numUsers] = useState<number>(edit.task.numUsers);
    const [time, setTime] = useState<string>(edit.task.time);
    //the visible state determines whether the editing fields are visible
    const [visible, setVisible] = useState<boolean>(false);
    function updateVisibility() {
        setVisible(!visible);
    }
    //function to change the tasks, produces a copy of the old array, then changes the edited task
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
        pend: boolean
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
                          pend
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
    }
    return (
        <div>
            <Button
                style={{
                    backgroundColor: "red",
                    width: "100px",
                    height: "40px",
                    display: "inline-block",
                    marginLeft: "220px"
                }}
                onClick={updateVisibility}
            >
                Edit ✏️
            </Button>
            {!visible ? null : (
                <div>
                    <EditDescription
                        description={desc}
                        setDescription={setDesc}
                    ></EditDescription>
                    <EditSteps steps={steps} setSteps={setSteps}></EditSteps>
                    <EditTime time={time} setTime={setTime}></EditTime>
                    <EditDifficulty
                        diff={diff}
                        setDifficulty={setDifficulty}
                    ></EditDifficulty>
                    <div>
                        <Button
                            onClick={() =>
                                changeTasks(
                                    edit.tasks,
                                    id,
                                    name,
                                    desc,
                                    status,
                                    img,
                                    steps,
                                    diff,
                                    numUsers,
                                    time,
                                    pending
                                )
                            }
                            style={{
                                backgroundColor: "rgb(247, 197, 140)"
                            }}
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
