import React from "react";
import { Form } from "react-bootstrap";

interface descriptionProps {
    description: string;
    setDescription: (newDescription: string) => void;
}

/**
 * Nothing too crazy here, just a textbox being used to update the description of
 * a task, it cannot change the user's tasks itself, but will change the shallow state that the
 * EditTask component will save
 */
export function EditDescription({
    description,
    setDescription
}: descriptionProps) {
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        const newDesc = String(event.target.value);
        setDescription(newDesc);
    }
    return (
        <div>
            <Form.Group controlId="formDescriptionName">
                <Form.Label style={{ fontWeight: "bold" }}>
                    Change Description:
                </Form.Label>
                <Form.Control
                    value={description}
                    onChange={updateDescription}
                    data-testid="descriptionTextBox"
                />
            </Form.Group>
        </div>
    );
}
