import React from "react";
//import { Button } from "react-bootstrap";
import { DisplayTask } from "./DisplayTask";
import { Task } from "../interfaces/task";
import "./adminList.css";
import { useDrop } from "react-dnd";
import { addTask } from "../TaskFunctions";

interface AdminItemProps {
    tasks: Task[];
    role: string;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AdminList({ role, tasks, setTasks }: AdminItemProps) {
    const NewTasks = tasks.filter((task: Task): boolean =>
        task.numUsers < 2 ? true : false
    );
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

    if (role === "Admin") {
        return (
            <div
                className="AdminList"
                ref={drop}
                style={{
                    backgroundColor: isOver ? "MediumSeaGreen" : "white"
                }}
            >
                <div className="Admin">
                    <span> Admin List </span>
                    {NewTasks.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={role}
                        ></DisplayTask>
                    ))}
                </div>
            </div>
        );
    } else {
        return <span></span>;
    }
}
