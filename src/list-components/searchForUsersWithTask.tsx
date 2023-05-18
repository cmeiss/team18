import { Button } from "react-bootstrap";
import { search } from "./search";
//Question for Lab: do we need one unchangable id?

interface UserProps {
    user: User;
    setUser: (newUser: User) => void;
    users: User[];
    tasks: Task[]; //this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setTasks: (newTasks: Task[]) => void; ////this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setUsers: (users: User[]) => void;
}
export function searchInSuper(): JSX.Element {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
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
