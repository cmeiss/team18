import React from "react";
import { Form } from "react-bootstrap";

interface stepsProps {
    steps: string[];
    setSteps: (newSteps: string[]) => void;
}

export function EditSteps({ steps, setSteps }: stepsProps) {
    function updateSteps(event: React.ChangeEvent<HTMLInputElement>) {
        const newStep = String(event.target.value);
        const newStepArray = createArrayFromString(newStep);
        setSteps(newStepArray);
    }
    function createArrayFromString(oneBigStep: string): string[] {
        const newSteps = oneBigStep.split(",");
        return newSteps;
    }
    return (
        <div>
            <Form.Group data-testid="EditStepsForm">
                <Form.Label
                    data-testid="stepsLabel"
                    style={{ fontWeight: "bold" }}
                >
                    Change Steps:
                </Form.Label>
                <Form.Control
                    value={steps}
                    onChange={updateSteps}
                    data-testid="stepsTextbox"
                />
            </Form.Group>
            <div data-testid="stepsInstructions">
                -To indicate different steps leave a comma symbol in between the
                various steps; example: step1,step2
            </div>
        </div>
    );
}
