import { Task } from "./task";
/* Interface for users of the app */
export interface User {
    name: string;
    userList: Task[];
}
