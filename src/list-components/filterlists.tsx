import React, { useState } from "react";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";

//function that filters a list and returns a new list in ascending order based off difficulty
function filter_by_difficulty(list_of_tasks: Task[]): void {
    const [new_list_of_tasks, set_new_list_of_tasks] =
        useState<Task[]>(list_of_tasks);

    function mycomparator(a: Task, b: Task) {
        return a.difficulty - b.difficulty;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    set_new_list_of_tasks(list_of_tasks.sort(mycomparator));
}
