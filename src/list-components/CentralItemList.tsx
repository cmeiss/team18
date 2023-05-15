import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";
import {
    filter_by_alphabetical_order,
    filter_by_difficulty,
    filter_by_numUsers,
    filter_by_time_needed
} from "./filterlists";
import { Button, Col, Row } from "react-bootstrap";

interface CentralItemProps {
    tasks: Task[];
    role: string;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function CentralItemList({ role, tasks, setTasks }: CentralItemProps) {
    const [sorted, setSorted] = useState<boolean>(false); //indicated whether the adminList is sorted right now
    const [alphabetic, setAlphabetic] = useState<boolean>(false);
    const [byTime, setByTime] = useState<boolean>(false);
    const [byDifficulty, setByDifficulty] = useState<boolean>(false);
    const [byNumUsers, setByNumUsers] = useState<boolean>(false);

    function newCentralList(taskList: Task[]) {
        return taskList.map((TASK: Task) => TASK);
    }

    function updateAlphabetic() {
        setSorted(true);
        setAlphabetic(true);
        setByTime(false);
        setByDifficulty(false);
        setByNumUsers(false);
    }
    function updateByTime() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(true);
        setByDifficulty(false);
        setByNumUsers(false);
    }
    function updateByDifficulty() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(true);
        setByNumUsers(false);
    }
    function updateByNumUsers() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(false);
        setByNumUsers(true);
    }

    function displayList(taskList: Task[]): JSX.Element {
        return (
            <div className="central-tasks">
                {taskList.map((TASK: Task, index: number) => (
                    <DisplayTask
                        key={index}
                        task={TASK}
                        tasks={tasks}
                        updateTasks={setTasks}
                        role={role}
                    ></DisplayTask>
                ))}
            </div>
        );
    }

    function DisplayCorrectList(): JSX.Element {
        //this function checks if we are displaying the adminList sorted or unsorted.
        //If we display it unsorted, we directly pull it out of the central item list.
        //If we display it sorted, we create a new sorted temporary list and display that.
        if (!sorted) {
            return displayList(newCentralList(tasks));
        } else if (alphabetic) {
            const SortedList = filter_by_alphabetical_order(
                newCentralList(tasks)
            );
            return displayList(SortedList);
        } else if (byTime) {
            const SortedList = filter_by_time_needed(newCentralList(tasks));
            return displayList(SortedList);
        } else if (byDifficulty) {
            const SortedList = filter_by_difficulty(newCentralList(tasks));
            return displayList(SortedList);
        } else if (byNumUsers) {
            const SortedList = filter_by_numUsers(newCentralList(tasks));
            return displayList(SortedList);
        } else {
            return <div>AdminList failed to load.</div>;
        }
    }
    if (role !== "Admin" && role !== "Super") {
        role = "user-central";
    }
    if (role !== "Super") {
        return (
            <div className="central-list">
                <h2> Sample Tasks </h2>
                <div className="central-tasks">
                    {tasks.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={role}
                        ></DisplayTask>
                    ))}
                </div>
                {console.log("Central Item List")}
                {console.log(...tasks)}
                {/*the purpose of this console.log statement is to display the changes in the tasks in the console because they are not showing in the displayed app right now*/}
            </div>
        );
    } else {
        return (
            <div className="central-list">
                <Row>
                    <Col>
                        <h2> Central Item List </h2>
                    </Col>
                    <Col>
                        <div className="Centralsort-dropdown">
                            <button className="Centralsort-dropbtn">
                                {/*eslint-disable-next-line prettier/prettier*/}
                                Sort by ▾
                            </button>
                            <div className="Centralsort-options">
                                <Button
                                    onClick={updateAlphabetic}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Alphabetical{" "}
                                </Button>
                                <Button
                                    onClick={updateByDifficulty}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Difficulty{" "}
                                </Button>
                                <Button
                                    onClick={updateByTime}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Time{" "}
                                </Button>
                                <Button
                                    onClick={updateByNumUsers}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Number Users (Low to High){" "}
                                </Button>
                                <Button
                                    onClick={() => setSorted(false)}
                                    style={{
                                        backgroundColor: "rgb(247, 197, 140)"
                                    }}
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <DisplayCorrectList></DisplayCorrectList>
            </div>
        );
    }
}
