import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import { makeTask } from "../TaskFunctions";

interface editProps {
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
    const [name] = useState<string>(edit.task.name);
    const [desc] = useState<string>(edit.task.description);
    const [status] = useState<boolean>(edit.task.status);
    const [img] = useState<string>(edit.task.image);
    const [steps] = useState<string[]>(edit.task.steps);
    const [diff] = useState<number>(edit.task.difficulty);
    const [numUsers] = useState<number>(edit.task.numUsers);
    const [time, setTime] = useState<number>(edit.task.time);
    const [visible, setVisible] = useState<boolean>(false);
    function updateVisibility() {
        setVisible(!visible);
    }
    //function to change the tasks, produces a copy of the old array, then changes the edited task
    function changeTasks(
        tasks: Task[],
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
                TASK.name === name
                    ? makeTask(name, desc, stat, img, steps, diff, num, time)
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
        console.log(
            tasks.map((TASK: Task) =>
                TASK.name === name
                    ? makeTask(name, desc, stat, img, steps, diff, num, time)
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
                    <Button onClick={() => setTime(1200)}>change time</Button>
                    The current time is {time}
                    <div>
                        <Button
                            onClick={() =>
                                changeTasks(
                                    edit.tasks,
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