import React from "react";
import { Form } from "react-bootstrap";

interface descriptionProps {
    description: string;
    setDescription: (newDescription: string) => void;
}

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
