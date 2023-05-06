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
    test("component displays", function () {
        var compDisplayed = react_2.screen.getByText("Change Difficulty: ");
        expect(compDisplayed).toBeInTheDocument();
    });
    test("difficulty is updating", function () {
        var chooseDifficulty = react_2.screen.getByLabelText("Change Difficulty");
        react_2.fireEvent.click(chooseDifficulty);
        var newDifficulty = react_2.screen.getByRole("option", { difficulty: 0 });
        react_2.fireEvent.click(newDifficulty);
        expect(newDifficulty).toBeInTheDocument();
    });
});
