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
exports.UserList = void 0;
/* eslint-disable indent */
var react_1 = require("react");
var DisplayTask_1 = require("./DisplayTask");
require("./UserList.css");
var react_bootstrap_1 = require("react-bootstrap");
var filterlists_1 = require("./filterlists");
var filterlists_2 = require("./filterlists");
var filterlists_3 = require("./filterlists");
var react_dnd_1 = require("react-dnd");
var TaskFunctions_1 = require("../TaskFunctions");
// export function UserList(user: UserProps): JSX.Element {
function sort(type_of_sort, tasks, setTasks) {
    if (type_of_sort == "alphabet") {
        setTasks(filterlists_1.filter_by_alphabetical_order(tasks));
    }
    else if (type_of_sort == "time") {
        setTasks(filterlists_3.filter_by_time_needed(tasks));
    }
    else if (type_of_sort == "difficulty") {
        setTasks(filterlists_2.filter_by_difficulty(tasks));
    }
}
function UserList(_a) {
    var user = _a.user, setUser = _a.setUser, users = _a.users, tasks = _a.tasks, setTasks = _a.setTasks, setUsers = _a.setUsers;
    var _b = react_dnd_1.useDrop({
        accept: "task",
        drop: function (item) { return addTaskUserList(item.id); },
        collect: function (monitor) { return ({
            isOver: !!monitor.isOver()
        }); }
    }), isOver = _b[0].isOver, drop = _b[1];
    function addTaskUserList(id) {
        var droppedTask = tasks.find(function (task) { return task.id === id; });
        console.log(__assign({}, droppedTask));
        console.log("dropping task");
        if (droppedTask) {
            //updating the Role state and add the new task to the currently displayed user list
            setUser({
                name: user.name,
                userList: TaskFunctions_1.addTask(droppedTask, user.userList)
            });
            //updating the UserList in the Roles state to keep the correct user list after role changes
            setUsers(updateUserTasks(TaskFunctions_1.addTask(droppedTask, user.userList)));
            //updating the number of Users of the dropped task in the central item list
            changeTasks(tasks, droppedTask.id);
        }
    }
    function editUserList(newTasks) {
        var newUser = { name: user.name, userList: newTasks };
        setUser({ name: user.name, userList: newTasks });
        var newRoles = users.map(function (role) {
            return role.name === newUser.name
                ? newUser
                : {
                    name: role.name,
                    userList: role.userList.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); })
                };
        });
        setUsers(newRoles);
    }
    function updateUserTasks(newTasks) {
        var newUser = { name: user.name, userList: newTasks };
        var newRoles = users.map(function (role) {
            return role.name === newUser.name
                ? newUser
                : {
                    name: role.name,
                    userList: role.userList.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); })
                };
        });
        return newRoles;
    }
    //this function increments the numberOfUsers of the task with the passed in ID
    function changeTasks(tasks, id) {
        var copy = tasks.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); });
        var currentNumUsers = tasks.find(function (T) {
            return T.id === id ? T : null;
        });
        var newNumUsers = -1;
        if (currentNumUsers) {
            newNumUsers = currentNumUsers.numUsers + 1;
        }
        setTasks(copy.map(function (TASK) {
            return TASK.id === id
                ? TaskFunctions_1.makeTask(id, TASK.name, TASK.description, TASK.status, TASK.image, TASK.steps, TASK.difficulty, newNumUsers, TASK.time)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
    }
    return (react_1["default"].createElement("div", { ref: drop, className: "UserList", style: {
            backgroundColor: isOver ? "MediumSeaGreen" : "white"
        } },
        user.name === "Super" || user.name === "Admin" ? (react_1["default"].createElement("div", null)) : (react_1["default"].createElement("div", { className: "userList" },
            react_1["default"].createElement("h3", null,
                user.name,
                "s List:"),
            user.userList.map(function (TASK, index) { return (react_1["default"].createElement(DisplayTask_1.DisplayTask, { key: index, task: TASK, tasks: user.userList, updateTasks: editUserList, role: user.name })); }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_bootstrap_1.Button, { onClick: function () { return sort("alphabet", tasks, setTasks); } },
                    "Sort by Alphabetical Order",
                    " "),
                react_1["default"].createElement(react_bootstrap_1.Button, { onClick: function () { return sort("difficulty", tasks, setTasks); } },
                    "Sort By Difficulty",
                    " "),
                react_1["default"].createElement(react_bootstrap_1.Button, { onClick: function () { return sort("time", tasks, setTasks); } },
                    "Sort By Time Needed",
                    " ")))),
        console.log("userList"),
        console.log.apply(console, user.userList),
        console.log(setTasks)));
}
exports.UserList = UserList;
