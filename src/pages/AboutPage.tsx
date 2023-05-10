import React from "react";
import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";
import TaskPage from "./taskPage";

export function AboutPage() {
    return (
        <Container className="about">
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
                        <Link to="/homepage">Homepage</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/taskpage" element={<TaskPage />}></Route>
                <Route path="/homepage" element={<App />} />
            </Routes>
            <h1>About Us</h1>
            <br></br>
            <h3>Team Members</h3>
            <p>
                Cornelia Meiss, Kaitlyn Sullivan,Aaron Oster, William Sharp,
                Sydni Wright
            </p>
            <br></br>
            <h3>Our Site</h3>
            <p>
                TimeWise is a planning based site that allows user to create
                to-do lists and schedule their day. We provide a variety of
                daily tasks and allow users to keep track of their daily
                responsibilites and stay on track fro the day.{" "}
            </p>
        </Container>
    );
}