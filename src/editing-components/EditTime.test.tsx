import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditTime } from "./EditTime";

const time = "10:00";

function setTime(newTime: string) {
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
    test("there is a message to indicate the currently selected time with colon", () => {
        const displayedTime = screen.getByText(/Selected Time: 10:00/i);
        expect(displayedTime).toBeInTheDocument();
    });
    test("time is updating", () => {
        const chooseTime = screen.getByLabelText("Choose Time");
        fireEvent.click(chooseTime);
        const newTime = screen.getByRole("option", { name: "10:45" });
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
