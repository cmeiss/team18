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

export function UserList({ user, tasks, setTasks }: UserProps): JSX.Element {
    const [{ isOver }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => addTaskToUserList(item.name),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addTaskToUserList(name: string) {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.name === name
        );
        console.log({ ...droppedTask });
        console.log("dropping task");
        if (droppedTask) {
            setTasks(addTask(droppedTask, tasks));
        }
    }
    return (
        <div
            ref={drop}
            className="UserList"
            style={{
                backgroundColor: isOver ? "MediumSeaGreen" : "white"
            }}
        >
            {user.name === "Super" || user.name === "Admin" ? (
                <div></div>
            ) : (
                <div className="userList">
                    <h3>{user.name}s List:</h3>
                    {tasks.map((TASK: Task, index: number) => (
                        <DisplayTask
                            key={index}
                            task={TASK}
                            tasks={tasks}
                            updateTasks={setTasks}
                            role={user.name}
                        ></DisplayTask>
                    ))}
                </div>
            )}
            {console.log("userList")}
            {console.log(...tasks)}
        </div>
    );
}
