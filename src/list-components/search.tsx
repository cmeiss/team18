import { Task } from "../interfaces/task";

// this function is taking a name presumably from a
// textbox and checking if this name is one of the name of the
//tasks and outputs the list of tasks with this name
export function search(name: string, tasks: Task[]): Task[] {
    const tasks_with_word = tasks.filter((task: Task) =>
        task.name.includes(name)
    );
    return tasks_with_word;
}
