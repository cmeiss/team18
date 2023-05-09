/* eslint-disable indent */
import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import { makeTask } from "../TaskFunctions";
import { EditTime } from "./EditTime";
import { EditDifficulty } from "./edit-difficulty";
import { EditDescription } from "./EditDescription";
import { EditSteps } from "./EditSteps";
//import { EditStatus } from "./EditStatus";

export interface editProps {
    tasks: Task[];
    updateTasks: (newTasks: Task[]) => void;
    //updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    task: Task;
}

export function EditTask(edit: editProps): JSX.Element {
    {
        /* all attribute state needs a setter function too, but it gave me linting errors to do so in  advance
        we need to add the functions whenever we connect a new editing component*/
    }
    const [id] = useState<number>(edit.task.id);
    const [name] = useState<string>(edit.task.name);
    const [desc, setDesc] = useState<string>(edit.task.description);
    const [status] = useState<boolean>(edit.task.status);
    const [img] = useState<string>(edit.task.image);
    const [steps, setSteps] = useState<string[]>(edit.task.steps);
    const [diff, setDifficulty] = useState<number>(edit.task.difficulty);
    const [numUsers] = useState<number>(edit.task.numUsers);
    const [time, setTime] = useState<string>(edit.task.time);
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
        time: string
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
                Edit Task
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
                                    time
                                )
                            }
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

//we probably won't need this file!!, see explanation in display view
//after writing this function, check function call in display task,
//we might need to add some arguments
