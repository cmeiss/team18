"use strict";
exports.__esModule = true;
exports.CentralItemList = void 0;
var react_1 = require("react");
//import { Button } from "react-bootstrap";
var DisplayTask_1 = require("./DisplayTask");
var filterlists_1 = require("./filterlists");
var react_bootstrap_1 = require("react-bootstrap");
function CentralItemList(_a) {
    var role = _a.role, tasks = _a.tasks, setTasks = _a.setTasks;
    var _b = react_1.useState(false), sorted = _b[0], setSorted = _b[1]; //indicated whether the adminList is sorted right now
    var _c = react_1.useState(false), alphabetic = _c[0], setAlphabetic = _c[1];
    var _d = react_1.useState(false), byTime = _d[0], setByTime = _d[1];
    var _e = react_1.useState(false), byDifficulty = _e[0], setByDifficulty = _e[1];
    var _f = react_1.useState(false), byNumUsers = _f[0], setByNumUsers = _f[1];
    function newCentralList(taskList) {
        return taskList.map(function (TASK) { return TASK; });
    }
    function updateAlphabetic() {
        setSorted(true);
        setAlphabetic(true);
        setByTime(false);
        setByDifficulty(false);
        setByNumUsers(false);
    }
    function updateByTime() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(true);
        setByDifficulty(false);
        setByNumUsers(false);
    }
    function updateByDifficulty() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(true);
        setByNumUsers(false);
    }
    function updateByNumUsers() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(false);
        setByNumUsers(true);
    }
    function displayList(taskList) {
        return (react_1["default"].createElement("div", { className: "central-tasks" }, taskList.map(function (TASK, index) { return (react_1["default"].createElement(DisplayTask_1.DisplayTask, { key: index, task: TASK, tasks: tasks, updateTasks: setTasks, role: role })); })));
    }
    function DisplayCorrectList() {
        //this function checks if we are displaying the adminList sorted or unsorted.
        //If we display it unsorted, we directly pull it out of the central item list.
        //If we display it sorted, we create a new sorted temporary list and display that.
        if (!sorted) {
            return displayList(newCentralList(tasks));
        }
        else if (alphabetic) {
            var SortedList = filterlists_1.filter_by_alphabetical_order(newCentralList(tasks));
            return displayList(SortedList);
        }
        else if (byTime) {
            var SortedList = filterlists_1.filter_by_time_needed(newCentralList(tasks));
            return displayList(SortedList);
        }
        else if (byDifficulty) {
            var SortedList = filterlists_1.filter_by_difficulty(newCentralList(tasks));
            return displayList(SortedList);
        }
        else if (byNumUsers) {
            var SortedList = filterlists_1.filter_by_numUsers(newCentralList(tasks));
            return displayList(SortedList);
        }
        else {
            return react_1["default"].createElement("div", null, "AdminList failed to load.");
        }
    }
    if (role !== "Super") {
        return (react_1["default"].createElement("div", { className: "central-list" },
            react_1["default"].createElement("h2", null, " Sample Tasks "),
            react_1["default"].createElement("div", { className: "central-tasks" }, tasks.map(function (TASK, index) { return (react_1["default"].createElement(DisplayTask_1.DisplayTask, { key: index, task: TASK, tasks: tasks, updateTasks: setTasks, role: role })); })),
            console.log("Central Item List"),
            console.log.apply(console, tasks)));
    }
    else {
        return (react_1["default"].createElement("div", { className: "central-list" },
            react_1["default"].createElement(react_bootstrap_1.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, null,
                    react_1["default"].createElement("h2", null, " Central Item List ")),
                react_1["default"].createElement(react_bootstrap_1.Col, null,
                    react_1["default"].createElement("div", { className: "Centralsort-dropdown" },
                        react_1["default"].createElement("button", { className: "Centralsort-dropbtn" }, "Sort by \u25BE"),
                        react_1["default"].createElement("div", { className: "Centralsort-options" },
                            react_1["default"].createElement(react_bootstrap_1.Button, { onClick: updateAlphabetic },
                                "Alphabetical",
                                " "),
                            react_1["default"].createElement(react_bootstrap_1.Button, { onClick: updateByDifficulty },
                                "Difficulty",
                                " "),
                            react_1["default"].createElement(react_bootstrap_1.Button, { onClick: updateByTime }, "Time "),
                            react_1["default"].createElement(react_bootstrap_1.Button, { onClick: updateByNumUsers },
                                "Number of Users",
                                " "),
                            react_1["default"].createElement(react_bootstrap_1.Button, { onClick: function () { return setSorted(false); } }, "Reset"))))),
            react_1["default"].createElement(DisplayCorrectList, null)));
    }
}
exports.CentralItemList = CentralItemList;
