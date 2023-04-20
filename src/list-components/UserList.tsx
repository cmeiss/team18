import React from "react";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import { DisplayTask } from "./DisplayTask";

interface UserProps {
    user: User;
}

export function UserList(user: UserProps): JSX.Element {
    const list: Task[] = user.user.userList;
    if (user.user.name === "Super" || user.user.name === "Admin") {
        return <div>null</div>;
    } else {
        return (
            <div>
                <h3>{user.user.name}s List:</h3>
                {list.map((TASK: Task) => (
                    <DisplayTask
                        key={5}
                        name={TASK.name}
                        description={TASK.description}
                        status={TASK.status}
                        image={TASK.image}
                        steps={TASK.steps}
                        difficulty={TASK.difficulty}
                        numUsers={TASK.numUsers}
                        time={TASK.time}
                        role={user.user.name}
                    ></DisplayTask>
                ))}
            </div>
        );
    }
}
