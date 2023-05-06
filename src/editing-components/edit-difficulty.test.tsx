import React from "react";
import { render, screen } from "@testing-library/react";
import { EditDifficulty } from "./edit-difficulty";

const difficulty = 100;

function setDifficulty(newDiff: number) {
    newDiff;
}

describe("testing edit difficulty component", () => {
    beforeEach(() => {
        render(<EditDifficulty></EditDifficulty>);
    });
});
