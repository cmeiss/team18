import React from "react";
import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";

export function AboutPage() {
    return (
        <Container className="about">
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
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Container>
    );
}
