import React from "react";
import { render, screen } from "@testing-library/react";
import { DisplayTask } from "./DisplayTask";
import { Task } from "./interfaces/task";

const testTask = {
    name: "test",
    description: "this is the description",
    status: false,
    image: "picture",
    steps: ["a", "b", "c"],
    difficulty: 3,
    numUsers: 2,
    time: 1345
};

const testRole1 = "super";
const testRole2 = "admin";

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
        const taskName = screen.getByText(/testTask.name/i);
        expect(taskName).toBeInTheDocument();
    });
    test("Num of TaskUsers is there if role is super", () => {
        const UserNum = screen.getByText(/Number of Users/i);
        expect(UserNum).toBeInTheDocument();
    });
    test("There is a checkbox", () => {
        const doneCheckbox = screen.getByRole("checkbox", {
            //name: /"✔️"/i || /"❌"/i
            name: /❌/i
        });
        expect(doneCheckbox).toBeInTheDocument();
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
    test("Num of TaskUsers is there if role is admin", () => {
        const UserNum1 = screen.getByText(/Number of Users/i);
        expect(UserNum1).not.toBeInTheDocument();
    });
});
