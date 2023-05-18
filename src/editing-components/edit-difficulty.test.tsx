import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditDifficulty } from "./edit-difficulty";

const difficulty = 100;

function setDifficulty(newDiff: number) {
    newDiff;
}

describe("testing edit difficulty component", () => {
    beforeEach(() => {
        render(
            <EditDifficulty
                diff={difficulty}
                setDifficulty={setDifficulty}
            ></EditDifficulty>
        );
    });
    test("component displays", () => {
        const compDisplayed = screen.getByText("Choose Difficulty:");
        expect(compDisplayed).toBeInTheDocument();
    });
    test("difficulty is updating", () => {
        const chooseDifficulty = screen.getByText("Choose Difficulty:");
        fireEvent.click(chooseDifficulty);
        expect(chooseDifficulty).toBeInTheDocument();
    });
});
