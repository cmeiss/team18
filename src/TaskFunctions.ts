import { Task } from "./interfaces/task";

/*
Modify Name attribute
*/
export function setName(newName: string, task: Task) {
    return (task.name = newName);
}

/**
Modify description attribute
 */
export function setDescription(newDecsription: string, task: Task) {
    return (task.description = newDecsription);
}

/**
Modify status attribute
 */
export function setStatus(newStatus: boolean, task: Task) {
    return (task.status = newStatus);
}

/**
Modify image attribute
 */
export function setImage(newImage: string, task: Task) {
    return (task.image = newImage);
}
