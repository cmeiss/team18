import React, { useState } from "react";
import "./App.css";

import { DisplayTask } from "./DisplayTask";
import { Task } from "./interfaces/task";
import { ChangeRole } from "./selectuser";
import { User } from "./interfaces/user";

const TASK: Task[] =
    //this is a completely random test task array to get something
    //displayed, needs to be deleted once we have an actual task list
    [
        {
            name: "test",
            description: "this is the description",
            status: false,
            image: "picture",
            steps: ["a", "b", "c"],
            difficulty: 3,
            numUsers: 2,
            time: 1345
        },
        {
            name: "test2",
            description: "this is the description",
            status: false,
            image: "picture",
            steps: ["a", "b", "c"],
            difficulty: 3,
            numUsers: 2,
            time: 1345
        }
    ];

function App(): JSX.Element {
    const [role] = useState<User>({ name: "super", userList: [] }); //This needs to be set by drop down menu
    const [roles] = useState<User[]>([
        { name: "Super", userList: [] },
        { name: "Admin", userList: [] },
        { name: "User1", userList: [] }
    ]); // these are original users these can be changed
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript,
            </header> aoster@udel.edu/AaronOster

            <div>
                Team Members: Cornelia Meiss, Kaitlyn Sullivan,Aaron Oster
            </div>

         
            <ChangeRole Role={role} roles={roles}></ChangeRole>
            {/*  This div statement exists only to test the DisplayTask component
            and show how it works by displaying the TASK array,
            This div statement needs to be deleted together with the TASK array
            when we have our actual tasks arrays and showList components */}
            {TASK.map((TASK: Task) => (
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
                    role={role.name}
                ></DisplayTask>
            ))}
            {/* The key is necessary for display task to work, 
                    ideally we should try to have an increasing number to keep track
                    of the tasks */}
        </div>
    );
}

export default App;
