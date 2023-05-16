import React from "react";
import { Form } from "react-bootstrap";
import { TIMES } from "./Times";

interface TimeProps {
    time: string;
    setTime: (newTime: string) => void;
}

const times: string[] = TIMES;

export function EditTime({ time, setTime }: TimeProps) {
    function updateTime(event: React.ChangeEvent<HTMLSelectElement>) {
        const newT = event.target.value;
        setTime(newT);
    }

    return (
        <div>
            <Form.Group controlId="editTime">
                <Form.Label style={{ fontWeight: "bold" }}>
                    Choose Time
                </Form.Label>

                <Form.Select value={time} onChange={updateTime} role={"select"}>
                    {times.map((newTime: string, index: number) => (
                        <option key={index} role={"option"} value={newTime}>
                            {newTime}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            -Selected Time: {time}
        </div>
    );
}
