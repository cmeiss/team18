import React from "react";
import { User } from "./interfaces/user";
import { Task } from "./interfaces/task";
import { useState } from "react";

//edit difficulty *************************************************************************************************************
interface diffProp {
    diff: number;
    setDifficulty: (newDiff: number) => void;
}
export function EditDifficulty({ diff, setDifficulty }: diffProp) {
    //update functions
    function updateDifficulty(newDiff: number) {
        setDifficulty(newDiff);
    }
}
//edit description ***********************************************************************************************************
interface descriptionProps {
    description: string;
    setDescription: (newDescription: string) => void;
}

export function EditDescription({
    description,
    setDescription
}: descriptionProps) {
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        const newDesc = String(event.target.value);
        setDescription(newDesc);
    }
}
//edit status *****************************************************************************************************************
export function EditStatus(edit: editProps): JSX.Element {
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }
    const [status, setStatus] = useState<boolean>(edit.task.status);
    const [saved, setSaved] = useState<boolean>(true);

    function flipSaved(): void {
        setSaved(!saved);
    }

    function changeTasks(
        tasks: Task[],
        id: number,
        name: string,
        desc: string,
        stat: boolean,
        img: string,
        steps: string[],
        diff: number,
        num: number,
        time: string,
        pend: boolean
    ) {
        const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
        edit.updateTasks(
            copy.map((TASK: Task) =>
                TASK.id === id
                    ? makeTask(
                          id,
                          name,
                          desc,
                          stat,
                          img,
                          steps,
                          diff,
                          num,
                          time,
                          pend
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
    }
    //edit steps ***********************************************************************************************************
    interface stepsProps {
    steps: string[];
    setSteps: (newSteps: string[]) => void;
}

export function EditSteps({ steps, setSteps }: stepsProps) {
    function updateSteps(event: React.ChangeEvent<HTMLInputElement>) {
        const newStep = String(event.target.value);
        const newStepArray = createArrayFromString(newStep);
        setSteps(newStepArray);
    }
    function createArrayFromString(oneBigStep: string): string[] {
        const newSteps = oneBigStep.split(",");
        return newSteps;
    }
}