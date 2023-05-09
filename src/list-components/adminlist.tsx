import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";
import { Button, Col, Row } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";
import { User } from "../interfaces/user";
import { useDrop } from "react-dnd";
import { addTask } from "../TaskFunctions";

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

    const [{ isOver /*, canDrop */ }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => addTaskToAdminList(item.id),
        //canDrop: (item: Task) => canAddtoAdmin(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
            //canDrop: !!monitor.canDrop()
        })
    });

    function addTaskToAdminList(id: number): void {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        if (droppedTask) {
            droppedTask.pendingMode = true;
            //setTasks(addTask(droppedTask, tasks));
        }
    }

    // function canAddtoAdmin(id: number): boolean {
    //     const droppedTask: Task | undefined = tasks.find(
    //         (task: Task) => task.id === id
    //     );
    //     return droppedTask ? droppedTask.numUsers < 2 : false;
    // }

    function makeAdmin(tasks: Task[]) {
        //this function takes the tasks state (our centralItemList) and returns a list of all elements with less than
        //two users, i.e. our AdminList
        return tasks.filter((TASK: Task) => TASK.pendingMode === true);
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

    function displayList(taskList: Task[]): JSX.Element {
        return (
            <div
                className="pending-tasks"
                ref={drop}
                style={{
                    backgroundColor: isOver ? "SageGreen" : "white"
                }}
            >
                {makeAdmin(taskList).map((TASK: Task, index: number) => (
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

    function DisplayCorrectList(): JSX.Element {
        //this function checks if we are displaying the adminList sorted or unsorted.
        //If we display it unsorted, we directly pull it out of the central item list.
        //If we display it sorted, we create a new sorted temporary list and display that.
        if (!sorted) {
            return displayList(tasks);
        } else if (alphabetic) {
            const SortedList = filter_by_alphabetical_order(makeAdmin(tasks));
            return displayList(SortedList);
        } else if (byTime) {
            const SortedList = filter_by_time_needed(makeAdmin(tasks));
            return displayList(SortedList);
        } else if (byDifficulty) {
            const SortedList = filter_by_difficulty(makeAdmin(tasks));
            return displayList(SortedList);
        } else {
            return <div>Pending List failed to load.</div>;
        }
    }

    if (user.name === "Admin" || user.name === "Super") {
        return (
            <div className="pending-list">
                <Row>
                    <Col>
                        <h2> Pending List </h2>
                    </Col>
                    <Col>
                        <div className="Pendingsort-dropdown">
                            <button className="Pendingsort-dropbtn">
                                {/*eslint-disable-next-line prettier/prettier*/}
                                Sort by ▾
                            </button>
                            <div className="Pendingsort-options">
                                <Button onClick={updateAlphabetic}>
                                    Alphabetical{" "}
                                </Button>
                                <Button onClick={updateByDifficulty}>
                                    Difficulty{" "}
                                </Button>
                                <Button onClick={updateByTime}>Time </Button>
                                <Button onClick={() => setSorted(false)}>
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <DisplayCorrectList></DisplayCorrectList>
            </div>
        );
    } else {
        return null;
    }
}
