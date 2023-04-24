import React from "react";
import { Task } from "../interfaces/task";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function App(): JSX.Element {
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
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="poor"
                checked={difficulty === 1}
            />
            <Form.Check
                inline
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="not good"
                checked={difficulty === 2}
            />
            <Form.Check
                inline
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="neutral"
                checked={difficulty === 3}
            />
            <Form.Check
                inline
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="pretty good"
                checked={difficulty === 4}
            />
            <Form.Check
                inline
                type="radio"
                name="difficulty"
                onChange={updateDifficulty}
                id="great"
                checked={difficulty === 5}
            />
        </div>
    );
}
