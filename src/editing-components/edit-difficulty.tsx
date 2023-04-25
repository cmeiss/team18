import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function editDifficulty(): JSX.Element {
    //setting state
    const [difficulty, setDifficulty] = useState<number>(0);

    //update functions
    function updateDifficulty(event: React.ChangeEvent<HTMLInputElement>) {
        setDifficulty(parseInt(event.target.value));
    }

    return (
        <div className="difficulty-edit">
            <Form.Check
                inline
                label="star-1"
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="poor"
                checked={difficulty === 1}
            />
            <Form.Check
                inline
                label="star-2"
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="not good"
                checked={difficulty === 2}
            />
            <Form.Check
                inline
                label="star-3"
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="neutral"
                checked={difficulty === 3}
            />
            <Form.Check
                inline
                label="star-4"
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="pretty good"
                checked={difficulty === 4}
            />
            <Form.Check
                inline
                label="star-5"
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="great"
                checked={difficulty === 5}
            />
            Current Difficulty: {difficulty}
        </div>
    );
}
