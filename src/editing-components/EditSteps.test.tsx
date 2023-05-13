import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditSteps } from "./EditSteps";

const testSteps = ["hello", "this", "is", "a", "test"];

//This function does nothing and is only here to be passed in to the component function
function setSteps(newSteps: string[]) {
    newSteps;
}

describe("test editSteps", () => {
    beforeEach(() =>
        render(<EditSteps steps={testSteps} setSteps={setSteps}></EditSteps>)
    );
    test("editSteps component displays", () => {
        const comp = screen.getByText(/Change Steps/i);
        expect(comp).toBeInTheDocument();
    });
    test("textbox works", () => {
        const textbox = screen.getByTestId("stepsTextbox");
        fireEvent.change(textbox, { target: { value: "new steps" } });
        expect(screen.queryByText("new Steps"));
    });
    test("description for steps is displayed", () => {
        const description = screen.getByTestId("stepsInstructions");
        expect(description).toBeInTheDocument();
    });
    test("The description starts with the correct text", () => {
        //const description = screen.getByTestId("stepsInstructions");
        const firstDescrLet = screen.getByText(/-To indicate different steps/i);
        expect(firstDescrLet).toBeInTheDocument();
    });
    test("change steps header is bold", () => {
        const header = screen.getByTestId("stepsLabel");
        expect(header.style.fontWeight).toBe("bold");
    });
});
