import React from "react";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import { DisplayTask } from "./DisplayTask";
import "./UserList.css";
import { useDrop } from "react-dnd";
import { addTask } from "../TaskFunctions";

interface UserProps {
    user: User;
    tasks: Task[];
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function UserList(user: UserProps): JSX.Element {
    const [{ isOver }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => user.setTasks(addTask(item, user.tasks)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    return (
        <div
            ref={drop}
            className="UserList"
            style={{
                backgroundColor: isOver ? "MediumSeaGreen" : "white"
            }}
        >
            {user.user.name === "Super" || user.user.name === "Admin" ? (
                <div></div>
            ) : (
                <div className="userList">
                    <h3>{user.user.name}s List:</h3>
                    {user.tasks.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={user.tasks}
                            updateTasks={user.setTasks}
                            role={user.user.name}
                        ></DisplayTask>
                    ))}
                </div>
            )}
            {console.log("userList")}
            {console.log(...user.tasks)}
        </div>
    );
}
