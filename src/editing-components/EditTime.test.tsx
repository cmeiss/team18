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
});
