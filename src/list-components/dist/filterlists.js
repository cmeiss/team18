"use strict";
exports.__esModule = true;
exports.filter_by_time_needed = exports.filter_by_alphabetical_order = exports.filter_by_difficulty = void 0;
//function that filters a list and returns a new list in ascending order based off difficulty
function filter_by_difficulty(list_of_tasks) {
    //lambda function I created to be passed in the sort
    function mycomparator(a, b) {
        return a.difficulty - b.difficulty;
    }
    //sorts the tasks based on comparison function
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}
exports.filter_by_difficulty = filter_by_difficulty;
// the function filter_by_alphabetical_order sorts the task list by the order of the task names in alphabetical order
function filter_by_alphabetical_order(list_of_tasks) {
    // sort works like map, in js here I am just passing my sorting function found this on stack overflow
    list_of_tasks.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB)
            //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; //default return value (no sorting)
    });
    return list_of_tasks;
}
exports.filter_by_alphabetical_order = filter_by_alphabetical_order;
function filter_by_time_needed(list_of_tasks) {
    function mycomparator(a, b) {
        var aTime = parseInt(a.time);
        var bTime = parseInt(b.time);
        return aTime - bTime;
    }
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}
exports.filter_by_time_needed = filter_by_time_needed;
//export {}; //Nothing else to export for now
