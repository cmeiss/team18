"use strict";
exports.__esModule = true;
exports.DisplayTask = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var EditTask_1 = require("../editing-components/EditTask");
require("./DisplayTask.css");
var react_dnd_1 = require("react-dnd");
var EditStatus_1 = require("../editing-components/EditStatus");
function DisplayTask(display) {
    var _a = react_1.useState(true), hideDetails = _a[0], setHideDetails = _a[1];
    var _b = react_dnd_1.useDrag({
        type: "task",
        item: { id: display.task.id },
        collect: function (monitor) { return ({
            isDragging: !!monitor.isDragging()
        }); }
    }), isDragging = _b[0].isDragging, drag = _b[1];
    return (react_1["default"].createElement("div", { ref: drag, className: "Task", style: hideDetails
            ? { border: "" }
            : { border: "5px solid rgb(180, 102, 38)" } },
        react_1["default"].createElement(react_bootstrap_1.Button, { className: "Task-Button", onClick: function () { return setHideDetails(!hideDetails); }, style: {
                border: isDragging ? "0px" : "0px"
            } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h4", null, display.task.name),
                react_1["default"].createElement("img", { src: display.task.image, width: "100px", alt: "" }))),
        react_1["default"].createElement("div", { className: "Task-Desc", hidden: hideDetails, style: { border: "5px solid rgb(255, 239, 195)" } },
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("strong", null,
                    "Task: ",
                    display.task.name),
                react_1["default"].createElement("br", null),
                display.task.description,
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(EditStatus_1.EditStatus, { tasks: display.tasks, updateTasks: display.updateTasks, task: display.task }),
                react_1["default"].createElement("br", null),
                "Difficulty: ",
                display.task.difficulty,
                react_1["default"].createElement("br", null),
                "Time: ",
                display.task.time,
                react_1["default"].createElement("br", null),
                "Steps:",
                " ",
                display.task.steps.map(function (step) { return (react_1["default"].createElement("li", { key: step }, step)); }),
                react_1["default"].createElement("div", null, display.role === "Super" ? (react_1["default"].createElement("div", null,
                    "Number of Users: ",
                    display.task.numUsers)) : (react_1["default"].createElement("div", null, ""))),
                react_1["default"].createElement("div", null, display.role === "Super" ||
                    display.role === "Admin" ? (react_1["default"].createElement(EditTask_1.EditTask, { tasks: display.tasks, updateTasks: display.updateTasks, task: display.task })) : (react_1["default"].createElement(react_1["default"].Fragment, null)))))));
}
exports.DisplayTask = DisplayTask;
//To implement the edit mode, we will have to create and import components
//to edit all the attributes. These components need to be imported
//and called in DisplayView
//We will need an "editMode" state that specifies whether or not
//the edit components are showed
//This "editMode" state is changed when component is clicked, ask if
//this can be a button or if this needs to be throught the drag and
//drop technique
