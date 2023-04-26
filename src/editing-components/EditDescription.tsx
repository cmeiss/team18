import React from "react";
import { Form } from "react-bootstrap";

interface descriptionProps {
    description: string;
    setDescription: (newDescription: string) => void;
}

export function EditTime({ description, setDescription }: descriptionProps) {
    function updateDescription(event: React.ChangeEvent<HTMLSelectElement>) {
        const newDesc = String(event.target.value);
        setDescription(newDesc);
    }
    return (
        <div>
            <Form.Group controlId="formDescriptionName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={description}
                    onChange={updateDescription}
                />
            </Form.Group>
            <div>The movie is "{description}".</div>
        </div>
    );
}
