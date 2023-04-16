import { Task } from "./interfaces/task";

/*
Create a task
*/
export function makeTask(
    name: string,
    desc: string,
    stat: boolean,
    img: string,
    steps: string[],
    diff: number,
    num: number,
    time: number
): Task {
    const task: Task = {
        name: name,
        description: desc,
        status: stat,
        image: img,
        steps: steps,
        difficulty: diff,
        numUsers: num,
        time: time
    };
    return task;
}

/*
Add task to a task array. Returns a deep copy of old task array plus the new task
*/
export function addTask(task: Task, tasks: Task[]) {
    return [
        ...tasks.map(
            (task: Task): Task => ({
                ...task,
                steps: [...task.steps]
            })
        ),
        { ...task, steps: [...task.steps] }
    ];
}

/*
Delete task from a task array
*/

/*
Modify Name attribute
*/
export function setName(newName: string, task: Task) {
    return { ...task, name: newName };
}

/**
Modify description attribute
 */
export function setDescription(newDecsription: string, task: Task) {
    return { ...task, description: newDecsription };
}

/**
Modify status attribute
 */
export function setStatus(newStatus: boolean, task: Task) {
    return { ...task, status: newStatus };
}

/**
Modify image attribute
 */
export function setImage(newImage: string, task: Task) {
    return { ...task, image: newImage };
}
