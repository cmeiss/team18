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
        const newSteps = oneBigStep.split("$");
        return newSteps;
    }
    return (
        <div>
            <Form.Group controlId="form">
                <Form.Label>Change Description:</Form.Label>
                <Form.Control value={steps} onChange={updateSteps} />
            </Form.Group>
            <div>
                To Indicate Different Steps leave a $ symbol in between the
                various steps; example: step1$step2
            </div>
        </div>
    );
}
