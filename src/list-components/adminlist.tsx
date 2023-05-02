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
    user: User;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AdminList({ user, tasks, setTasks }: AdminItemProps) {
    const [sortedList, setSortedList] = useState<Task[]>(makeAdmin(tasks)); //holds the sortedList, unsorted list comes directly from tasks state
    const [sorted, setSorted] = useState<boolean>(false); //indicated whether the adminList is sorted right now

    function makeAdmin(tasks: Task[]) {
        //this function takes the tasks state (our centralItemList) and returns a list of all elements with less than
        //two users, i.e. our AdminList
        return tasks.filter((TASK: Task) => TASK.numUsers < 2);
    }
    function sort(type_of_sort: string): void {
        setSorted(true); //sets sorted to true whenever we are sorting
        if (type_of_sort == "alphabet") {
            setSortedList(filter_by_alphabetical_order(makeAdmin(tasks))); //we are setting the sorted list state to the sorted version of the most recent version of the adminList
        } else if (type_of_sort == "time") {
            setSortedList(filter_by_time_needed(makeAdmin(tasks)));
        } else if (type_of_sort == "difficulty") {
            setSortedList(filter_by_difficulty(makeAdmin(tasks)));
        }
    }
    function DisplayCorrectList(): JSX.Element {
        //this function checks if we are displaying the adminList sorted or unsorted.
        //If we display it unsorted, we directly pull it out of the central item list.
        //If we display it sorted, we pull it out of the sortedList state
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
        } else {
            return (
                <div className="Admin">
                    <span> Admin List </span>
                    {sortedList.map((TASK: Task, index: number) => (
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
        }
    }
    if (user.name === "Admin") {
        return (
            <div className="AdminList">
                <Button onClick={() => sort("alphabet")}>
                    Sort by Alphabetical Order{" "}
                </Button>
                <Button onClick={() => sort("difficulty")}>
                    Sort By Difficulty{" "}
                </Button>
                <Button onClick={() => sort("time")}>Sort By Time </Button>
                <Button onClick={() => setSorted(false)}>Reset Sorting</Button>
                <DisplayCorrectList></DisplayCorrectList>
            </div>
        );
    } else {
        console.log("entered the else in adminList");
        return null;
    }
}
