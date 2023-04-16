import React from "react";
import "./App.css";
import { ChangeRole } from "./selectuser";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript,
            </header>
            <h1>man up</h1>
            <ChangeRole></ChangeRole>
        </div>
    );
}

export default App;
