//import React, { useState } from "react";
//import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";

//function that filters a list and returns a new list in ascending order based off difficulty
export function filter_by_difficulty(list_of_tasks: Task[]): Task[] {
    //lambda function I created to be passed in the sort
    function mycomparator(a: Task, b: Task) {
        return a.difficulty - b.difficulty;
    }
    //sorts the tasks based on comparison function
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}
// the function filter_by_alphabetical_order sorts the task list by the order of the task names in alphabetical order
export function filter_by_alphabetical_order(list_of_tasks: Task[]): Task[] {
    // sort works like map, in js here I am just passing my sorting function found this on stack overflow
    list_of_tasks.sort(function (a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB)
            //sort string ascending
            return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
    });
    return list_of_tasks;
}

export function filter_by_time_needed(list_of_tasks: Task[]): Task[] {
    function mycomparator(a: Task, b: Task) {
        const aTime = parseInt(a.time);
        const bTime = parseInt(b.time);
        return aTime - bTime;
    }
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}

//export {}; //Nothing else to export for now
