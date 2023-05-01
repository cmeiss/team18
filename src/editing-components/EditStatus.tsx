import React from "react";
import { Form } from "react-bootstrap";

interface statusProps {
    status: boolean;
    setStatus: (newStatus: boolean) => void;
}

export function EditStatus({ status, setStatus }: statusProps) {
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="checkbox"
                id="is-done-check"
                label={status ? "✔️" : "❌"}
                checked={status}
                onChange={updateStatus}
            />
        </div>
    );
}
