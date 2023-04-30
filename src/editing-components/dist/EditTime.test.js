"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var EditTime_1 = require("./EditTime");
var time = "1000";
function setTime(newTime) {
    newTime;
}
describe("Testing EditTime", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(EditTime_1.EditTime, { time: time, setTime: setTime }));
    });
    test("there is a drop down list", function () {
        var dropDown = react_2.screen.getByRole("select");
        expect(dropDown).toBeInTheDocument();
    });
    test("time is displayed in military format", function () {
        var displayedTime = react_2.screen.getByText(/10:00/i);
        expect(displayedTime).toBeInTheDocument();
    });
    test("there is a message to indicate the currently selected time", function () {
        var displayedMessage = react_2.screen.getByText(/Selected Time:/i);
        expect(displayedMessage).toBeInTheDocument();
    });
    test("time is updating", function () {
        var chooseTime = react_2.screen.getByLabelText("Choose Time");
        react_2.fireEvent.click(chooseTime);
        var newTime = react_2.screen.getByRole("option", { name: "1045" });
        react_2.fireEvent.click(newTime);
        expect(newTime).toBeInTheDocument();
    });
    test("first option is choose Time", function () {
        var getComponent = react_2.screen.getByLabelText("Choose Time");
        react_2.fireEvent.click(getComponent);
        var firstOption = react_2.screen.getByRole("option", { name: "Choose Time" });
        expect(firstOption).toBeInTheDocument();
    });
});
