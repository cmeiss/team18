import React from "react";
import { Form } from "react-bootstrap";
import { TIMES } from "./Times";

interface TimeProps {
    time: number;
    setTime: (newTime: number) => void;
}

const times: string[] = TIMES;

export function EditTime({ time, setTime }: TimeProps) {
    function updateTime(event: React.ChangeEvent<HTMLSelectElement>) {
        const newT = Number(event.target.value);
        setTime(newT);
    }
    return (
        <div>
            <Form.Group controlId="editTime">
                <Form.Label>Choose Time</Form.Label>
                <Form.Select value={time.toString()} onChange={updateTime}>
                    {times.map((newTime: string, index: number) => (
                        <option key={index} value={newTime.toString()}>
                            {newTime}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Current Time: {time}
        </div>
    );
}
