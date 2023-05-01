"use strict";
exports.__esModule = true;
exports.EditTime = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Times_1 = require("./Times");
var times = Times_1.TIMES;
function EditTime(_a) {
    var time = _a.time, setTime = _a.setTime;
    function updateTime(event) {
        var newT = event.target.value;
        setTime(newT);
    }
    function printTime(time) {
        var display = "time";
        if (parseInt(time) < 100) {
            display = "00:" + time.toString();
        }
        else if (parseInt(time) < 1000 && parseInt(time) % 100 === 0) {
            display = "0" + Math.trunc(parseInt(time) / 100) + ":00";
        }
        else if (parseInt(time) < 1000) {
            "0" +
                Math.trunc(parseInt(time) / 100) +
                ":" +
                (parseInt(time) % 100).toString();
        }
        else {
            display =
                Math.trunc(parseInt(time) / 100) +
                    ":" +
                    (parseInt(time) % 100).toString();
        }
        return display;
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "editTime" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Choose Time"),
            react_1["default"].createElement(react_bootstrap_1.Form.Select, { value: time.toString(), onChange: updateTime, role: "select" }, times.map(function (newTime, index) { return (react_1["default"].createElement("option", { key: index, role: "option", value: newTime.toString() }, newTime)); }))),
        "Selected Time: ",
        printTime(time)));
}
exports.EditTime = EditTime;
