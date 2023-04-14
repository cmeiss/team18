import React, { useState } from "react";
import { Task } from "../interfaces/task";
import "./App.css";
import { DisplayTask } from "./DisplayTask";

const TAsk: Task[] =
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
    const [TASK] = useState<Task[]>(TAsk);
    const [roles] = useState<string>("super"); //This needs to be set by drop down menu
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript,
            </header>
            <h1>man up</h1>
            <div>
                Team Members: Sydni Wright, Kaitlyn Sullivan, Aaron Oster, Will
                Sharp, Cornelia Meiss
            </div>
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
                    role={roles}
                ></DisplayTask>
            ))}
            {/* The key is necessary for display task to work, 
                    ideally we should try to have an increasing number to keep track
                    of the tasks */}
        </div>
    );
}

export default App;
