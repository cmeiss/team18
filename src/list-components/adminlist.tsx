import React from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";
import "./adminList.css";
import { Button } from "react-bootstrap";
import { filter_by_alphabetical_order } from "./filterlists";
import { filter_by_difficulty } from "./filterlists";
import { filter_by_time_needed } from "./filterlists";
import { User } from "../interfaces/user";
import { addTask } from "../TaskFunctions";
import { useDrop } from "react-dnd";

interface AdminItemProps {
    tasks: Task[];
    user: User;
    setTasks: (newTasks: Task[]) => void;
    setUser: (newUser: User) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AdminList({ user, tasks, setTasks, setUser }: AdminItemProps) {
    function sort(type_of_sort: string): void {
        if (type_of_sort == "alphabet") {
            setUser({
                name: user.name,
                userList: filter_by_alphabetical_order(user.userList)
            });
        } else if (type_of_sort == "time") {
            setUser({
                name: user.name,
                userList: filter_by_time_needed(user.userList)
            });
        } else if (type_of_sort == "difficulty") {
            setUser({
                name: user.name,
                userList: filter_by_difficulty(user.userList)
            });
        }
    }
    const [{ isOver /*, canDrop */ }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => addTaskToAdminList(item.id),
        canDrop: (item: Task) => canAddtoAdmin(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    function addTaskToAdminList(id: number): void {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        if (droppedTask) {
            setTasks(addTask(droppedTask, tasks));
        }
    }

    function canAddtoAdmin(id: number): boolean {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        return droppedTask ? droppedTask.numUsers < 2 : false;
    }
    if (user.name === "Admin") {
        return (
            <div className="AdminList">
                <div
                    className="Admin"
                    ref={drop}
                    style={{
                        backgroundColor: isOver ? "SageGreen" : "white"
                    }}
                >
                    <span> Admin List </span>
                    {user.userList.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={user.name}
                        ></DisplayTask>
                    ))}
                </div>

                <Button onClick={() => sort("alphabet")}>
                    Sort by Alphabetical Order{" "}
                </Button>
                <Button onClick={() => sort("difficulty")}>
                    Sort By Difficulty{" "}
                </Button>
                <Button onClick={() => sort("time")}>
                    Sort By Time Needed{" "}
                </Button>
            </div>
        );
    } else {
        return null;
    }
}
