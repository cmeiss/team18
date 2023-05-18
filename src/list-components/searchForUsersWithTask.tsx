import { Button } from "react-bootstrap";
import { search } from "./search";
import { Task } from "../interfaces/task";
import { User } from "../interfaces/user";
import React, { useState } from "react";
interface UserProps {
    user: User;
    setUser: (newUser: User) => void;
    users: User[];
    tasks: Task[]; //this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setTasks: (newTasks: Task[]) => void; ////this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setUsers: (users: User[]) => void;
}
export function searchInSuper(UserProperties: UserProps):{
    const [searchMode, SetSearchMode] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={setSearchMode}
                style={{
                    backgroundColor: "rgb(247, 197, 140)"
                }}
                className="search-button"
            >
                Search:
            </Button>
        </div>
    );
}
function setSearchMode(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    
}

