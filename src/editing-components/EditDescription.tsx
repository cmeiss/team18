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
                <Form.Label>Change Description:</Form.Label>
                <Form.Control
                    value={description}
                    onChange={updateDescription}
                />
            </Form.Group>
            <div>Current Description: {description}</div>
        </div>
    );
}
