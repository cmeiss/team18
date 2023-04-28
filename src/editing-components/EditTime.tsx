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
    function printTime(time: number) {
        let display = "time";
        if (time < 100) {
            display = "00:" + time.toString();
        } else if (time < 1000 && time % 100 === 0) {
            display = "0" + Math.trunc(time / 100) + ":00";
        } else if (time < 1000) {
            "0" + Math.trunc(time / 100) + ":" + (time % 100).toString();
        } else {
            display = Math.trunc(time / 100) + ":" + (time % 100).toString();
        }
        return display;
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
                    {times.map((newTime: string, index: number) => (
                        <option
                            key={index}
                            role={"option"}
                            value={newTime.toString()}
                        >
                            {newTime}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Selected Time: {printTime(time)}
        </div>
    );
}
