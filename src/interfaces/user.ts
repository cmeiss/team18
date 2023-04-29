import { Task } from "./task";
/* Interface for users of the app */
export interface User {
    tasks(arg0: string, tasks: any, setTasks: any): void;
    setTasks(arg0: string, tasks: any, setTasks: any): void;
    name: string;
    userList: Task[];
}
