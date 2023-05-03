"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AddTask = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_2 = require("react");
function AddTask(taskProps) {
    ///states for each attribute
    var _a = react_2.useState(""), newdescription = _a[0], setDescription = _a[1];
    var _b = react_2.useState(false), newstatus = _b[0], setStatus = _b[1];
    var _c = react_2.useState(""), newimage = _c[0], setImage = _c[1];
    var _d = react_2.useState([""]), newsteps = _d[0], setSteps = _d[1];
    var _e = react_2.useState(0), newdifficulty = _e[0], setDifficulty = _e[1];
    var _f = react_2.useState(""), newtime = _f[0], setTime = _f[1];
    var _g = react_2.useState(0), newnumusers = _g[0], setNumUsers = _g[1];
    //states needed for editing functions
    var _h = react_2.useState(false), neweditmode = _h[0], seteditmode = _h[1]; //whether the textbox will appear boolean
    var _j = react_2.useState(""), newTask = _j[0], setNewTask = _j[1];
    var _k = react_2.useState(0), newId = _k[0], setNewId = _k[1];
    //change id
    function updateNewId(event) {
        setNewId(parseInt(event.target.value));
    }
    //change description function
    function updateDescription(event) {
        setDescription(event.target.value);
    }
    //change status function
    function updateStatus(event) {
        setStatus(event.target.checked);
    }
    //change image function
    function updateImage(event) {
        setImage(event.target.value);
    }
    //change steps function
    function updateSteps(event) {
        setSteps([event.target.value]);
    }
    //change difficulty function
    function updateDifficulty(event) {
        setDifficulty(parseInt(event.target.value));
    }
    //change time function
    function updateTime(event) {
        setTime(event.target.value);
    }
    //change num users function
    function updateNumUsers(event) {
        setNumUsers(parseInt(event.target.value));
    }
    //change edit mode
    function updateEditMode(event) {
        seteditmode(event.target.checked);
    }
    //change task function
    function updateNewTask(event) {
        setNewTask(event.target.value);
    }
    //add task
    function addTask() {
        taskProps.setTasks(__spreadArrays(taskProps.tasks, [
            {
                id: newId,
                name: newTask,
                description: newdescription,
                status: newstatus,
                image: newimage,
                steps: newsteps,
                difficulty: newdifficulty,
                time: newtime,
                numUsers: newnumusers
            }
        ]));
        seteditmode(false);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { type: "switch", className: "mx-auto", style: { width: "150px" }, id: "editMode", label: "Add Task", checked: neweditmode, onChange: updateEditMode }),
        neweditmode ? (react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "CheckAnswer" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Name Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: newTask, onChange: updateNewTask }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Id Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "number", value: newId, onChange: updateNewId }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Description Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: newdescription, onChange: updateDescription }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Check New Task Status Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "checbox", checked: newstatus, onChange: updateStatus }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Image Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: newimage, onChange: updateImage }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Steps Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: newsteps, onChange: updateSteps }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Difficulty Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "number", value: newdifficulty, onChange: updateDifficulty }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Time Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: newtime, onChange: updateTime }),
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New Task Num Users Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "number", value: newnumusers, onChange: updateNumUsers }))) : null,
        neweditmode ? (react_1["default"].createElement(react_bootstrap_1.Button, { onClick: addTask }, "Add Task and Leave Edit Mode")) : null));
}
exports.AddTask = AddTask;
