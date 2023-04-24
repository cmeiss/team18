import React from "react";
import { render, screen } from "@testing-library/react";
import { EditTime } from "./EditTime";
import { Task } from "../interfaces/task";

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
});
