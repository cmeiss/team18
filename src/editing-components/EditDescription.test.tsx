import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditDescription } from "./EditDescription";

let testDescription =
    "Hi My name is Alan, I am your personal guide to the unknown";

function setDescription(newDescription: string) {
    testDescription = newDescription;
}

describe("EditStatus Component tests", () => {
    beforeEach(() =>
        render(
            <EditDescription
                description={testDescription}
                setDescription={setDescription}
            />
        )
    );
});
