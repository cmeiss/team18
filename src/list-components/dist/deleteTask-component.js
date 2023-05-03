"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.DeleteTask = void 0;
var react_1 = require("react");
var react_2 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
function DeleteTask(taskProps) {
    var _a = react_2.useState(false), editMode = _a[0], seteditmode = _a[1];
    var _b = react_2.useState(""), deltask = _b[0], setDelTask = _b[1];
    function updateEditMode(event) {
        seteditmode(event.target.checked);
    }
    function updateTasks(event) {
        setDelTask(event.target.value);
    }
    function remTask() {
        __spreadArrays(taskProps.tasks).filter(function (item) {
            return item.name != deltask ? true : false;
        });
        seteditmode(false);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { type: "switch", id: "editMode", label: "Delete Task", className: "mx-auto", style: { width: "150px" }, checked: editMode, onChange: updateEditMode }),
        editMode ? (react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "CheckAnswer" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter Task Below: "),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: deltask, onChange: updateTasks }))) : null,
        editMode ? (react_1["default"].createElement(react_bootstrap_1.Button, { onClick: remTask }, "Delete Task and Leave Edit Mode")) : null));
}
exports.DeleteTask = DeleteTask;
