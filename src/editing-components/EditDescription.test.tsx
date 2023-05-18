import React from "react";
import { render, screen } from "@testing-library/react";
import { EditDescription } from "./EditDescription";
import userEvent from "@testing-library/user-event";

let testDescription =
    "Hi My name is Alan, I am your personal guide to the unknown";

function setDescription(newDescription: string) {
    testDescription = newDescription;
}

describe("EditDescription Component tests", () => {
    beforeEach(() =>
        render(
            <EditDescription
                description={testDescription}
                setDescription={setDescription}
            />
        )
    );
    test("There is a text box for user to input new description", () => {
        const descBox = screen.getByTestId("descriptionTextBox");
        expect(descBox).toBeInTheDocument();
    });
    test("The inital text in the text box should be what is within the testDescription variable", () => {
        expect(
            screen.getByText(
                /Hi My name is Alan, I am your personal guide to the unknown/i
            )
        ).toBeInTheDocument();
    });
    test("Checking to make sure the text can be changed", () => {
        const descBox = screen.getByTestId("descriptionTextBox");
        userEvent.type(descBox, "Luke I am your father");
        expect(screen.queryByText("Luke I am your father"));
    });
    test("Making sure the description for the textbox is posting", () => {
        expect(screen.queryByText("Change Description:"));
    });
});
