import React from "react";
import { Form } from "react-bootstrap";

interface diffProps {
    diff: number;
    setDifficulty: (newDiff: number) => void;
}
export function EditDifficulty({ diff, setDifficulty }: diffProps) {
    //update functions
    function updateDifficulty(event: React.ChangeEvent<HTMLInputElement>) {
        setDifficulty(parseInt(event.target.value));
    }

    return (
        <div className="difficulty-edit">
            Task Difficulty: {diff}
            <Form.Check
                inline
                label="star-1"
                type="radio"
                name="difficulty"
                value="1"
                onChange={updateDifficulty}
                id="poor"
                checked={diff === 1}
            />
            <Form.Check
                inline
                label="star-2"
                type="radio"
                name="difficulty"
                value="2"
                onChange={updateDifficulty}
                id="not good"
                checked={diff === 2}
            />
            <Form.Check
                inline
                label="star-3"
                type="radio"
                name="difficulty"
                value="3"
                onChange={updateDifficulty}
                id="neutral"
                checked={diff === 3}
            />
            <Form.Check
                inline
                label="star-4"
                type="radio"
                name="difficulty"
                value="4"
                onChange={updateDifficulty}
                id="pretty good"
                checked={diff === 4}
            />
            <Form.Check
                inline
                label="star-5"
                type="radio"
                name="difficulty"
                value="5"
                onChange={updateDifficulty}
                id="great"
                checked={diff === 5}
            />
        </div>
    );
}
