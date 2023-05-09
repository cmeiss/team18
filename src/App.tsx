import React from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import TaskPage from "./pages/taskPage";

function App(): JSX.Element {
    return (
        <hgroup>
            <nav
                className="navbar
                        "
            >
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                        <li>
                            <Link to="/taskpage">Home</Link>
                        </li>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/taskpage" element={<TaskPage />}></Route>
            </Routes>
        </hgroup>
    );
}

export default App;
