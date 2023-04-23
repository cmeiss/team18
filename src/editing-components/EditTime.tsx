import React from "react";
import { Form } from "react-bootstrap";

interface TimeProps {
    time: number;
    setTime: (newTime: number) => void;
}

const times: number[] = [1000, 1015, 1030, 1045];

export function EditTime({ time, setTime }: TimeProps) {
    function updateTime(event: React.ChangeEvent<HTMLSelectElement>) {
        const newT = Number(event.target.value);
        setTime(newT);
    }
    return (
        <div>
            <Form.Group controlId="editTime">
                <Form.Label>Choose Time</Form.Label>
                <Form.Select
                    value={time.toString()}
                    onChange={updateTime}
                    role={"select"}
                >
                    {times.map((newTime: number, index: number) => (
                        <option key={index} value={newTime.toString()}>
                            {newTime}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Selected Time: {time}
        </div>
    );
}
