import { Task } from "./interfaces/task";

/*
Create a task
*/
export function makeTask(
    id: number,
    name: string,
    desc: string,
    stat: boolean,
    img: string,
    steps: string[],
    diff: number,
    num: number,
    time: string,
    pending: boolean
): Task {
    const task: Task = {
        id: id,
        name: name,
        description: desc,
        status: stat,
        image: img,
        steps: steps,
        difficulty: diff,
        numUsers: num,
        time: time,
        pendingMode: pending
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
Delete task from a task array by receiving the task to be removed
accessing it's name and filtering the list of tasks by not including the task with that name,
Ids for each task would work better just in case tasks would have the same name.
So this may need amendment later on.
*/
export function delTask(task: Task, tasks: Task[]) {
    const taskToRemove = makeTask(
        task.id,
        task.name,
        task.description,
        task.status,
        task.image,
        task.steps,
        task.difficulty,
        task.numUsers,
        task.time,
        task.pendingMode
    );
    const newTasks = tasks.filter(
        (task: Task): boolean => task.id !== taskToRemove.id /*&&
            task.description !== taskToRemove.description &&
            task.time !== taskToRemove.time &&
            task.difficulty !== taskToRemove.difficulty*/
    );
    return newTasks;
}
