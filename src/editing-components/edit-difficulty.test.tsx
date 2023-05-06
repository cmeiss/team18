import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditDifficulty } from "./edit-difficulty";

//const difficulty = 100;

//function setDifficulty(newDiff: number) {
//newDiff;
//}

describe("testing edit difficulty component", () => {
    beforeEach(() => {
        render(<EditDifficulty></EditDifficulty>);
    });
    test("component displays", () => {
        const compDisplayed = screen.getByText("Change Difficulty: ");
        expect(compDisplayed).toBeInTheDocument();
    });
    test("difficulty is updating", () => {
        const chooseDifficulty = screen.getByLabelText("Change Difficulty:");
        fireEvent.click(chooseDifficulty);
        const newDifficulty = screen.getByText("Difficulty: ");
        fireEvent.click(newDifficulty);
        expect(newDifficulty).toBeInTheDocument();
    });
    //not sure how to test for the value as of right now, placeholder for now
});