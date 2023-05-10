import React from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import TaskPage from "./pages/taskPage";

function App(): JSX.Element {
    return (
        <div className="App">
            <nav
                className="navbar
                        "
            >
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/taskpage">Schedule Builder</Link>
                    </li>
                    <li>
                        <Link to="/hompage">Home Page</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/taskpage" element={<TaskPage />}></Route>
                <Route path="/" element={App}></Route>
            </Routes>
            <header className="App-header">
                <hgroup>
                    <h1>TimeWise</h1>
                    <i>Never waste another second</i>
                    <p>
                        Build your dream schedule today by clicking the build
                        schedule button
                    </p>
                </hgroup>
            </header>
        </div>
    );
}

export default App;
