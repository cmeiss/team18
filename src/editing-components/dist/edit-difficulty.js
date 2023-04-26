"use strict";
exports.__esModule = true;
exports.EditDifficulty = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
function EditDifficulty(_a) {
    var diff = _a.diff, setDifficulty = _a.setDifficulty;
    //update functions
    function updateDifficulty(event) {
        setDifficulty(parseInt(event.target.value));
    }
    return (react_1["default"].createElement("div", { className: "difficulty-edit" },
        "Task Difficulty: ",
        diff,
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { inline: true, label: "star-1", type: "radio", name: "difficulty", value: "1", onChange: updateDifficulty, id: "poor", checked: diff === 1 }),
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { inline: true, label: "star-2", type: "radio", name: "difficulty", value: "2", onChange: updateDifficulty, id: "not good", checked: diff === 2 }),
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { inline: true, label: "star-3", type: "radio", name: "difficulty", value: "3", onChange: updateDifficulty, id: "neutral", checked: diff === 3 }),
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { inline: true, label: "star-4", type: "radio", name: "difficulty", value: "4", onChange: updateDifficulty, id: "pretty good", checked: diff === 4 }),
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { inline: true, label: "star-5", type: "radio", name: "difficulty", value: "5", onChange: updateDifficulty, id: "great", checked: diff === 5 })));
}
exports.EditDifficulty = EditDifficulty;
