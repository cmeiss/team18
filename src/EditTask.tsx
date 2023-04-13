import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Task } from "../interfaces/task";

export function editTask(): JSX.Element {
    console.log("clicked edit button");
    return <div>This is going to be the EditTask component. </div>;
}

//after writing this function, check function call in display task,
//we might need to add some arguments
