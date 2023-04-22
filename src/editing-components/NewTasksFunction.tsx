import { Task } from "../interfaces/task";
import { makeTask } from "../TaskFunctions";

export function newTasks(
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
    const newTask = makeTask(name, desc, stat, img, steps, diff, num, time);
    const newTaskArray = tasks.map((TASK: Task) =>
        TASK.name === name ? newTask : TASK
    );
    return newTaskArray;
}
