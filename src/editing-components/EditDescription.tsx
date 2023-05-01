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
            <Form.Check
                type="checkbox"
                id="emotion-check-happy"
                label="Happy"
                name="emotions"
                value="happy"
                checked={emotions.includes("happy")}
                onChange={updateEmotion}
            />
        </div>
    );
}
