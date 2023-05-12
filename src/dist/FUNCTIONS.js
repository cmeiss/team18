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
exports.EditStatus = exports.EditDescription = exports.EditDifficulty = void 0;
var react_1 = require("react");
function EditDifficulty(_a) {
    var diff = _a.diff, setDifficulty = _a.setDifficulty;
    //update functions
    function updateDifficulty(newDiff) {
        setDifficulty(newDiff);
    }
}
exports.EditDifficulty = EditDifficulty;
function EditDescription(_a) {
    var description = _a.description, setDescription = _a.setDescription;
    function updateDescription(event) {
        var newDesc = String(event.target.value);
        setDescription(newDesc);
    }
}
exports.EditDescription = EditDescription;
//edit status *****************************************************************************************************************
function EditStatus(edit) {
    function updateStatus(event) {
        setStatus(event.target.checked);
    }
    var _a = react_1.useState(edit.task.status), status = _a[0], setStatus = _a[1];
    var _b = react_1.useState(true), saved = _b[0], setSaved = _b[1];
    function flipSaved() {
        setSaved(!saved);
    }
    function changeTasks(tasks, id, name, desc, stat, img, steps, diff, num, time, pend) {
        var copy = tasks.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); });
        edit.updateTasks(copy.map(function (TASK) {
            return TASK.id === id
                ? makeTask(id, name, desc, stat, img, steps, diff, num, time, pend)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
    }
    export function EditSteps(_a) {
        var steps = _a.steps, setSteps = _a.setSteps;
        function updateSteps(event) {
            var newStep = String(event.target.value);
            var newStepArray = createArrayFromString(newStep);
            setSteps(newStepArray);
        }
        function createArrayFromString(oneBigStep) {
            var newSteps = oneBigStep.split(",");
            return newSteps;
        }
    }
}
exports.EditStatus = EditStatus;
