"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var edit_difficulty_1 = require("./edit-difficulty");
var difficulty = 100;
function setDifficulty(newDiff) {
    newDiff;
}
describe("testing edit difficulty component", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(edit_difficulty_1.EditDifficulty, null));
    });
});
