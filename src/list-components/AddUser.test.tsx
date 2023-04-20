//import React from "react";
import { render, screen } from "@testing-library/react";
//import { CentralItemList } from "./CentralItemList";

describe("addUser tests", () => {
    test("There is a switch", () => {
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
    });
    test("Can switch into Edit Mode", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getAllByRole("checkbox")).toHaveLength(2);
    });
});
