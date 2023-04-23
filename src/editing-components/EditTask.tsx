import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import { makeTask } from "../TaskFunctions";
//import { newTasks } from "./NewTasksFunction";

interface editProps {
    tasks: Task[];
    //updateTasks: (newTasks: Task[]) => void;
    updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    task: Task;
}

const abc: Task[] = [
    {
        name: "test",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c"],
        difficulty: 3,
        numUsers: 2,
        time: 1345
    },
    {
        name: "test2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c"],
        difficulty: 3,
        numUsers: 1,
        time: 1345
    }
];

function newTasks(
    tasks: Task[],
    name: string,
    desc: string,
    stat: boolean,
    img: string,
    steps: string[],
    diff: number,
    num: number,
    time: number
): Task[] {
    const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
    const newTask = makeTask(name, desc, stat, img, steps, diff, num, time);
    const newTaskArray = copy.map((TASK: Task) =>
        TASK.name === name ? newTask : { ...TASK, steps: [...TASK.steps] }
    );
    return newTaskArray;
}

export function EditTask(edit: editProps): JSX.Element {
    {
        /* all attribute state goes here */
    }
    const [name, setName] = useState<string>(edit.task.name);
    const [desc, setDesc] = useState<string>(edit.task.description);
    const [status, setStatus] = useState<boolean>(edit.task.status);
    const [img, setImg] = useState<string>(edit.task.image);
    const [steps, setSteps] = useState<string[]>(edit.task.steps);
    const [diff, setDiff] = useState<number>(edit.task.difficulty);
    const [numUsers, setNumUsers] = useState<number>(edit.task.numUsers);
    const [time, setTime] = useState<number>(edit.task.time);
    const [visible, setVisible] = useState<boolean>(false);
    function updateVisibility() {
        setVisible(!visible);
    }

    //for now this is only a testing function adding a new task to the end, in the future we need a function to just replace the old task
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
        // edit.updateTasks([
        //     {
        //         name: "test",
        //         description: "this is the description",
        //         status: false,
        //         image: "picture",
        //         steps: ["a", "b", "c"],
        //         difficulty: 3,
        //         numUsers: 2,
        //         time: 1345
        //     },
        //     {
        //         name: "test2",
        //         description: "this is the description",
        //         status: false,
        //         image: "picture",
        //         steps: ["a", "b", "c"],
        //         difficulty: 3,
        //         numUsers: 1,
        //         time: 1345
        //     }
        // ]);
        // const NewT: Task[] = newTasks(
        //     tasks,
        //     name,
        //     desc,
        //     stat,
        //     img,
        //     steps,
        //     diff,
        //     num,
        //     time
        // );
        //const newTask = makeTask(name, desc, stat, img, steps, diff, num, time);
        const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
        //console.log(...NewT);
        //edit.updateTasks([...copy, newTask]);
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
        // const copy = edit.tasks.map((oTask: Task) => ({
        //     ...oTask,
        //     steps: [...oTask.steps]
        // }));
        // edit.updateTasks([
        //     ...copy,
        //     {
        //         name: "test",
        //         description: "this is the description",
        //         status: false,
        //         image: "picture",
        //         steps: ["a", "b", "c"],
        //         difficulty: 3,
        //         numUsers: 2,
        //         time: 1345
        //     }
        // ]);
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
