/***
 * Task object for calendar.
 */
export interface Task {
    id: number;
    name: string;
    description: string;
    status: boolean; // if a task has been completed
    image: string; // need to fix image type
    steps: string[];
    difficulty: number;
    numUsers: number;
    time: string;
    pendingMode: boolean;
    userListId: number; //this id is assigned when a task is added to the user list and used to delete tasks individually from the user list
}
