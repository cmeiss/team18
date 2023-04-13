import { User } from "./interfaces/user";
import { Task } from "./interfaces/task";
/**
 * addUser function, adds user to the list of roles
 */
export function makeUser(user: string, tasks: Task[]): User {
    const newUser: User = { name: user, userList: tasks };
    return newUser;
}

/**
 * deleteUser function, deletes a user from the list of roles
 */
export function deleteUser(user: User): void {
    user.name = "";
    user.userList = [];
}

/**
 * deleteTask function, deletes a task from the userList
 */
export function deleteTask(task: Task): void {
    task.name = "";
    task.description = "";
    task.difficulty = 0;
    task.image = "";
    task.numUsers = 0;
    task.status = false;
    task.steps = [];
    task.time = 0;
}

/**
 * addTask function, adds a task fto the userList
 */
export function makeTask(
    name: string,
    desc: string,
    stat: boolean,
    img: string,
    step: string[],
    diff: number,
    num: number,
    time: number
): Task {
    const task: Task = {
        name: name,
        description: desc,
        status: stat,
        image: img,
        steps: step,
        difficulty: diff,
        numUsers: num,
        time: time
    };
    return task;
}
