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
export function deleteTask(user: User, task: Task): Task[] {
    let list = [...user.userList];
    list = list.filter((item: Task): boolean => item != task);
    return list;
}

/**
 * addTask function, adds a task fto the userList
 */
export function makeTask(
    user: User,
    name: string,
    desc: string,
    stat: boolean,
    img: string,
    step: string[],
    diff: number,
    num: number,
    time: number
): Task[] {
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
    const list = [...user.userList];
    list.push(task);
    return list;
}