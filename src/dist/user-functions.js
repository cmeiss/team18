"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.addTasktoUserList = exports.deleteTask = exports.deleteUser = exports.makeUser = void 0;
/**
 * addUser function, adds user to the list of roles
 */
function makeUser(user, tasks, roles) {
    var newUser = { name: user, userList: tasks };
    roles.push(newUser);
    return roles;
}
exports.makeUser = makeUser;
/**
 * deleteUser function, deletes a user from the list of roles
 */
function deleteUser(user, roles) {
    user.name = "";
    user.userList = [];
    var list = __spreadArrays(roles);
    list = list.filter(function (item) { return item != user; });
    return list;
}
exports.deleteUser = deleteUser;
/**
 * deleteTask function, deletes a task from the userList
 */
function deleteTask(user, task) {
    var list = __spreadArrays(user.userList);
    list = list.filter(function (item) { return item != task; });
    return list;
}
exports.deleteTask = deleteTask;
/**
 * addTask function, adds a task fto the userList
 */
function addTasktoUserList(user, id, name, desc, stat, img, step, diff, num, time, pend) {
    var task = {
        id: id,
        name: name,
        description: desc,
        status: stat,
        image: img,
        steps: step,
        difficulty: diff,
        numUsers: num,
        time: time,
        pendingMode: pend
    };
    var list = __spreadArrays(user.userList);
    list.push(task);
    return list;
}
exports.addTasktoUserList = addTasktoUserList;
