import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";

// this function is taking a name presumably from a
// textbox and checking if this name is one of the name of the
//tasks and outputs the list of tasks with this name
export function search(name: string, tasks: Task[]): Task[] {
    const tasks_with_word = tasks.filter((task: Task) =>
        task.name.toLowerCase().includes(name.toLowerCase())
    );
    return tasks_with_word;
}
// the function search user by task is taking a list of users and a taskname. It returns the users that have the task in their userlist
export function SearchUserByTask(taskName: string, users: User[]): User[] {
    function return_if_true(user: User): boolean {
        return user.userList.some(
            (task) => task.name.toLowerCase() === taskName.toLowerCase()
        );
    }
    return users.filter(return_if_true);
}
