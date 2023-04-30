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
}
