import React from "react";
import { render, screen } from "@testing-library/react";
import { DisplayTask } from "./DisplayTask";

const testTask = {
    name: "test",
    description: "this is the description",
    status: false,
    image: "picture",
    steps: ["a", "b", "c", "GutenTag", "469476"],
    difficulty: 3,
    numUsers: 2,
    time: 1345
};

const testRole1 = "super";
const testRole2 = "admin";

//testing with role being super
describe("DisplayView Tests", () => {
    beforeEach(() => {
        render(
            <DisplayTask
                name={testTask.name}
                description={testTask.description}
                status={testTask.status}
                image={testTask.image}
                steps={testTask.steps}
                difficulty={testTask.difficulty}
                numUsers={testTask.numUsers}
                time={testTask.time}
                role={testRole1}
            />
        );
    });
    test("Taskname is displayed", () => {
        const taskName = screen.getByText(/test/i);
        expect(taskName).toBeInTheDocument();
    });
    test("Num of TaskUsers is there if role is super", () => {
        const UserNum = screen.getByText(/Number of Users/i);
        expect(UserNum).toBeInTheDocument();
    });
    test("There is a checkbox", () => {
        const doneCheckbox = screen.getByRole("checkbox", {
            name: /❌/i || /✔️/i
        });
        expect(doneCheckbox).toBeInTheDocument();
    });
    test("Description of the task is displayed", () => {
        const desc = screen.getByText(testTask.description);
        expect(desc).toBeInTheDocument();
    });
    test("Steps are displayed", () => {
        testTask.steps.every((step) => {
            const text = screen.getByText(step);
            expect(text).toBeInTheDocument;
        });
    });
});

//testing with role being admin
describe("DisplayView Tests", () => {
    beforeEach(() => {
        render(
            <DisplayTask
                name={testTask.name}
                description={testTask.description}
                status={testTask.status}
                image={testTask.image}
                steps={testTask.steps}
                difficulty={testTask.difficulty}
                numUsers={testTask.numUsers}
                time={testTask.time}
                role={testRole2}
            />
        );
    });
    test("Num of TaskUsers is not there if role is admin", () => {
        expect(screen.queryByText(/Number of User/i)).toBeNull();
    });
});
