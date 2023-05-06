"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.EditDifficulty = void 0;
var react_1 = require("react");
function EditDifficulty(_a) {
    var diff = _a.diff, setDifficulty = _a.setDifficulty;
    //update functions
    function updateDifficulty(newDiff) {
        setDifficulty(newDiff);
    }
    return (react_1["default"].createElement("span", { className: "fs-8" },
        "Difficulty: ",
        react_1["default"].createElement("br", null),
        __spreadArrays(Array(5)).map(function (star, index) {
            index += 1;
            return (react_1["default"].createElement("span", { key: index, style: {
                    color: index <= diff ? "orange" : "gray",
                    cursor: "pointer"
                }, onClick: function () { return updateDifficulty(index); } }, "\u2605"));
        })));
}
exports.EditDifficulty = EditDifficulty;
