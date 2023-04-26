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
exports.EditTask = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var TaskFunctions_1 = require("../TaskFunctions");
var EditTime_1 = require("./EditTime");
var edit_difficulty_1 = require("./edit-difficulty");
function EditTask(edit) {
    {
        /* all attribute state needs a setter function too, but it gave me linting errors to do so in  advance
        we need to add the functions whenever we connect a new editing component*/
    }
    var name = react_1.useState(edit.task.name)[0];
    var desc = react_1.useState(edit.task.description)[0];
    var status = react_1.useState(edit.task.status)[0];
    var img = react_1.useState(edit.task.image)[0];
    var steps = react_1.useState(edit.task.steps)[0];
    var _a = react_1.useState(edit.task.difficulty), diff = _a[0], setDifficulty = _a[1];
    var numUsers = react_1.useState(edit.task.numUsers)[0];
    var _b = react_1.useState(edit.task.time), time = _b[0], setTime = _b[1];
    var _c = react_1.useState(false), visible = _c[0], setVisible = _c[1];
    function updateVisibility() {
        setVisible(!visible);
    }
    //function to change the tasks, produces a copy of the old array, then changes the edited task
    function changeTasks(tasks, name, desc, stat, img, steps, diff, num, time) {
        var copy = tasks.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); });
        edit.updateTasks(copy.map(function (TASK) {
            return TASK.name === name
                ? TaskFunctions_1.makeTask(name, desc, stat, img, steps, diff, num, time)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
        console.log(tasks.map(function (TASK) {
            return TASK.name === name
                ? TaskFunctions_1.makeTask(name, desc, stat, img, steps, diff, num, time)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_bootstrap_1.Button, { style: {
                backgroundColor: "red",
                width: "100px",
                height: "40px",
                display: "inline-block",
                marginLeft: "220px"
            }, onClick: updateVisibility }, "Edit Task"),
        !visible ? null : (react_1["default"].createElement("div", null,
            react_1["default"].createElement(EditTime_1.EditTime, { time: time, setTime: setTime }),
            react_1["default"].createElement(edit_difficulty_1.EditDifficulty, { diff: diff, setDifficulty: setDifficulty }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_bootstrap_1.Button, { onClick: function () {
                        return changeTasks(edit.tasks, name, desc, status, img, steps, diff, numUsers, time);
                    } }, "Save Changes"))))));
}
exports.EditTask = EditTask;
//we probably won't need this file!!, see explanation in display view
//after writing this function, check function call in display task,
//we might need to add some arguments
