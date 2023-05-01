"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.setTime = exports.setNumUsers = exports.setDifficulty = exports.setSteps = exports.setImage = exports.setStatus = exports.setDescription = exports.setName = exports.delTask = exports.addTask = exports.makeTask = void 0;
/*
Create a task
*/
function makeTask(id, name, desc, stat, img, steps, diff, num, time) {
    var task = {
        id: id,
        name: name,
        description: desc,
        status: stat,
        image: img,
        steps: steps,
        difficulty: diff,
        numUsers: num,
        time: time
    };
    return task;
}
exports.makeTask = makeTask;
/*
Add task to a task array. Returns a deep copy of old task array plus the new task
*/
function addTask(task, tasks) {
    return __spreadArrays(tasks.map(function (task) { return (__assign(__assign({}, task), { steps: __spreadArrays(task.steps) })); }), [
        __assign(__assign({}, task), { steps: __spreadArrays(task.steps) })
    ]);
}
exports.addTask = addTask;
/*
Delete task from a task array by receiving the task to be removed
accessing it's name and filtering the list of tasks by not including the task with that name,
Ids for each task would work better just in case tasks would have the same name.
So this may need amendment later on.
*/
function delTask(task, tasks) {
    var taskToRemove = task.id;
    var newTasks = tasks.filter(function (task) { return task.id !== taskToRemove; });
    return newTasks;
}
exports.delTask = delTask;
/*
Modify Name attribute
*/
function setName(newName, task) {
    return __assign(__assign({}, task), { name: newName });
}
exports.setName = setName;
/**
Modify description attribute
 */
function setDescription(newDecsription, task) {
    return __assign(__assign({}, task), { description: newDecsription });
}
exports.setDescription = setDescription;
/**
Modify status attribute
 */
function setStatus(newStatus, task) {
    return __assign(__assign({}, task), { status: newStatus });
}
exports.setStatus = setStatus;
/**
Modify image attribute
 */
function setImage(newImage, task) {
    return __assign(__assign({}, task), { image: newImage });
}
exports.setImage = setImage;
/**
 function to modify the steps attribute
 */
function setSteps(newSteps, task) {
    return __assign(__assign({}, task), { steps: newSteps });
}
exports.setSteps = setSteps;
/**
 function to modify the difficulty attribute
 */
function setDifficulty(newDifficulty, task) {
    return __assign(__assign({}, task), { difficulty: newDifficulty });
}
exports.setDifficulty = setDifficulty;
/**
 function to modify the number of users attribute
 */
function setNumUsers(newNumUsers, task) {
    return __assign(__assign({}, task), { numUsers: newNumUsers });
}
exports.setNumUsers = setNumUsers;
/**
 * function to modify the time attribute
 */
function setTime(newTime, task) {
    return __assign(__assign({}, task), { time: newTime });
}
exports.setTime = setTime;
