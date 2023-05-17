"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var EditSteps_1 = require("./EditSteps");
var testSteps = ["hello", "this", "is", "a", "test"];
//This function does nothing and is only here to be passed in to the component function
function setSteps(newSteps) {
    newSteps;
}
describe("test editSteps", function () {
    beforeEach(function () {
        return react_2.render(react_1["default"].createElement(EditSteps_1.EditSteps, { steps: testSteps, setSteps: setSteps }));
    });
    test("editSteps component displays", function () {
        var comp = react_2.screen.getByText(/Change Steps/i);
        expect(comp).toBeInTheDocument();
    });
    test("textbox works", function () {
        var textbox = react_2.screen.getByTestId("stepsTextbox");
        react_2.fireEvent.change(textbox, { target: { value: "new steps" } });
        expect(react_2.screen.queryByText("new Steps"));
    });
    test("description for steps is displayed", function () {
        var description = react_2.screen.getByTestId("stepsInstructions");
        expect(description).toBeInTheDocument();
    });
    test("The description starts with the correct text", function () {
        var firstDescrLet = react_2.screen.getByText(/-To indicate different steps/i);
        expect(firstDescrLet).toBeInTheDocument();
    });
    test("change steps header is bold", function () {
        var header = react_2.screen.getByTestId("stepsLabel");
        expect(header.style.fontWeight).toBe("bold");
    });
});
