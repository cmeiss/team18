import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditTime } from "./EditTime";

const time = 1000;

function setTime(newTime: number) {
    newTime;
}

describe("Testing EditTime", () => {
    beforeEach(() => {
        render(<EditTime time={time} setTime={setTime}></EditTime>);
    });
    test("there is a drop down list", () => {
        const dropDown = screen.getByRole("select");
        expect(dropDown).toBeInTheDocument();
    });
    test("time is displayed in military format", () => {
        const displayedTime = screen.getByText(/10:00/i);
        expect(displayedTime).toBeInTheDocument();
    });
    test("there is a message to indicate the currently selected time", () => {
        const displayedMessage = screen.getByText(/Selected Time:/i);
        expect(displayedMessage).toBeInTheDocument();
    });
    test("time is updating", () => {
        const chooseTime = screen.getByLabelText("Choose Time");
        fireEvent.click(chooseTime);
        const newTime = screen.getByRole("option", { name: "1045" });
        fireEvent.click(newTime);
        expect(newTime).toBeInTheDocument();
    });
    test("first option is choose Time", () => {
        const getComponent = screen.getByLabelText("Choose Time");
        fireEvent.click(getComponent);
        const firstOption = screen.getByRole("option", { name: "Choose Time" });
        expect(firstOption).toBeInTheDocument();
    });
});
