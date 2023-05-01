"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var CentralItemList_1 = require("./list-components/CentralItemList");
//import { Button, Form } from "react-bootstrap";
var UserList_1 = require("./list-components/UserList");
var ChangeRole_1 = require("./list-components/ChangeRole");
var ModifyUsers_1 = require("./list-components/ModifyUsers");
var adminlist_1 = require("./list-components/adminlist");
var TASKS_1 = require("./TASKS");
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var addTask_1 = require("./list-components/addTask");
var deleteTask_component_1 = require("./list-components/deleteTask-component");
function App() {
    // eslint-disable-next-line prettier/prettier
    var _a = react_1.useState({ name: "User1", userList: [] }), role = _a[0], setRole = _a[1]; //I set this intial user to make the user list display something
    var _b = react_1.useState({
        id: 0,
        name: "test",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345"
    }), task = _b[0], setTask = _b[1];
    var _c = react_1.useState([
        { name: "Please Select: ", userList: [] },
        { name: "Super", userList: [] },
        { name: "Admin", userList: [] },
        { name: "User1", userList: [] }
    ]), roles = _c[0], setRoles = _c[1]; // these are original users these can be changed
    var _d = react_1.useState(TASKS_1.TASKS), tasks = _d[0], setTasks = _d[1];
    function updateRole(event) {
        var NewRole = roles.find(function (role) { return role.name === event.target.value; });
        if (NewRole) {
            setRole(NewRole);
        }
    }
    //the following function is just calling setTasks but is easier to include in test cases than the setTask function alone
    function updateTasks(tasks) {
        setTasks(tasks);
    }
    function updateTask(event) {
        var NewTask = tasks.find(function (task) { return task.name === event.target.value; });
        if (NewTask) {
            setTask(NewTask);
        }
    }
    return (react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend },
        react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement("header", { className: "App-header" },
                react_1["default"].createElement("hgroup", null,
                    react_1["default"].createElement("h1", null, "TimeWise"),
                    react_1["default"].createElement("i", null, "Never waste another second")),
                react_1["default"].createElement("div", { className: "dropdown" },
                    react_1["default"].createElement("span", null, "Role select"),
                    react_1["default"].createElement("div", { className: "dropdown-content" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(ChangeRole_1.ChangeRole, { Role: role, roles: roles, setRole: updateRole }))))),
            react_1["default"].createElement("div", { className: "welcome" },
                "Welcome ",
                role.name,
                ", lets reclaim the day!"),
            react_1["default"].createElement("div", null, "Team Members: Cornelia Meiss, Kaitlyn Sullivan,Aaron Oster, William Sharp, Sydni Wright"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", null, role.name === "Super" ? (react_1["default"].createElement(ModifyUsers_1.ModifyUsers, { Role: role, roles: roles, setRoles: setRoles })) : null)),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", null, role.name === "Super" || role.name === "Admin" ? (react_1["default"].createElement(addTask_1.AddTask, { tasks: tasks, item: task, setTasks: setTasks })) : null),
                react_1["default"].createElement("div", null, role.name === "Super" || role.name === "Admin" ? (react_1["default"].createElement(deleteTask_component_1.DeleteTask, { tasks: tasks, item: task, setTasks: setTasks })) : null)),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(UserList_1.UserList, { user: role, setUser: setRole, users: roles, tasks: tasks, setTasks: updateTasks, setUsers: setRoles })),
            react_1["default"].createElement("div", { className: "central" },
                react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: tasks, role: role.name, setTasks: updateTasks }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(adminlist_1.AdminList, { tasks: tasks, user: role, setTasks: updateTasks, setUser: setRole }))))));
}
exports["default"] = App;
