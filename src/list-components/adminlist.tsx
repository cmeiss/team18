import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";
import "./adminList.css";
import { Button } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";
import { User } from "../interfaces/user";

interface AdminItemProps {
    tasks: Task[];
    users: User[];
    setUsers: (newUsers: User[]) => void;
    user: User;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AdminList({ user, tasks, setTasks }: AdminItemProps) {
    const [sorted, setSorted] = useState<boolean>(false); //indicated whether the adminList is sorted right now
    const [alphabetic, setAlphabetic] = useState<boolean>(false);
    const [byTime, setByTime] = useState<boolean>(false);
    const [byDifficulty, setByDifficulty] = useState<boolean>(false);

    function makeAdmin(tasks: Task[]) {
        //this function takes the tasks state (our centralItemList) and returns a list of all elements with less than
        //two users, i.e. our AdminList
        return tasks.filter((TASK: Task) => TASK.numUsers < 2);
    }
    function updateAlphabetic() {
        setSorted(true);
        setAlphabetic(true);
        setByTime(false);
        setByDifficulty(false);
    }
    function updateByTime() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(true);
        setByDifficulty(false);
    }
    function updateByDifficulty() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(true);
    }
    function DisplayCorrectList(): JSX.Element {
        //this function checks if we are displaying the adminList sorted or unsorted.
        //If we display it unsorted, we directly pull it out of the central item list.
        //If we display it sorted, we create a new sorted temporary list and display that.
        if (!sorted) {
            return (
                <div className="Admin">
                    <span> Admin List </span>
                    {makeAdmin(tasks).map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={user.name}
                        ></DisplayTask>
                    ))}
                </div>
            );
        } else if (alphabetic) {
            const SortedList = filter_by_alphabetical_order(makeAdmin(tasks));
            return (
                <div className="Admin">
                    <span> Admin List </span>
                    {SortedList.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={user.name}
                        ></DisplayTask>
                    ))}
                </div>
            );
        } else if (byTime) {
            const SortedList = filter_by_time_needed(makeAdmin(tasks));
            return (
                <div className="Admin">
                    <span> Admin List </span>
                    {SortedList.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={user.name}
                        ></DisplayTask>
                    ))}
                </div>
            );
        } else if (byDifficulty) {
            const SortedList = filter_by_difficulty(makeAdmin(tasks));
            return (
                <div className="Admin">
                    <span> Admin List </span>
                    {SortedList.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={user.name}
                        ></DisplayTask>
                    ))}
                </div>
            );
        } else {
            return <div>AdminList failed to load.</div>;
        }
    }
    if (user.name === "Admin") {
        return (
            <div className="AdminList">
                <Button onClick={updateAlphabetic}>
                    Sort by Alphabetical Order{" "}
                </Button>
                <Button onClick={updateByDifficulty}>
                    Sort By Difficulty{" "}
                </Button>
                <Button onClick={updateByTime}>Sort By Time </Button>
                <Button onClick={() => setSorted(false)}>Reset Sorting</Button>
                <DisplayCorrectList></DisplayCorrectList>
            </div>
        );
    } else {
        return null;
    }
}
