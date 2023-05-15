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
//edit task **********************************************************************************************************
export interface editProps {
    tasks: Task[];
    updateTasks: (newTasks: Task[]) => void;
    //updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    task: Task;
}

export function EditTask(edit: editProps): JSX.Element {
    {
        /* all attribute state needs a setter function too, but it gave me linting errors to do so in  advance
        we need to add the functions whenever we connect a new editing component*/
    }
    const [id] = useState<number>(edit.task.id);
    const [name] = useState<string>(edit.task.name);
    const [desc, setDesc] = useState<string>(edit.task.description);
    const [status] = useState<boolean>(edit.task.status);
    const [img] = useState<string>(edit.task.image);
    const [pending] = useState<boolean>(edit.task.pendingMode);
    const [steps, setSteps] = useState<string[]>(edit.task.steps);
    const [diff, setDifficulty] = useState<number>(edit.task.difficulty);
    const [numUsers] = useState<number>(edit.task.numUsers);
    const [time, setTime] = useState<string>(edit.task.time);
    const [visible, setVisible] = useState<boolean>(false);
    function updateVisibility() {
        setVisible(!visible);
    }
    //function to change the tasks, produces a copy of the old array, then changes the edited task
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
        console.log(
            tasks.map((TASK: Task) =>
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
}
//edit time ***************************************************************************************************************
interface TimeProps {
    time: string;
    setTime: (newTime: string) => void;
}

const times: string[] = TIMES;

export function EditTime({ time, setTime }: TimeProps) {
    function updateTime(event: React.ChangeEvent<HTMLSelectElement>) {
        const newT = event.target.value;
        setTime(newT);
    }
    function printTime(time: string) {
        let display = "time";
        if (parseInt(time) < 100) {
            display = "00:" + time.toString();
        } else if (parseInt(time) < 1000 && parseInt(time) % 100 === 0) {
            display = "0" + Math.trunc(parseInt(time) / 100) + ":00";
        } else if (parseInt(time) < 1000) {
            "0" +
                Math.trunc(parseInt(time) / 100) +
                ":" +
                (parseInt(time) % 100).toString();
        } else {
            display =
                Math.trunc(parseInt(time) / 100) +
                ":" +
                (parseInt(time) % 100).toString();
        }
        return display;
    }
}
//add task ********************************************************************************************************************
interface addTaskProp {
    tasks: Task[];
    //item: Task;
    setTasks: (newTasks: Task[]) => void;
}

export function AddTask(taskProps: addTaskProp): JSX.Element {
    ///states for each attribute
    const [newdescription, setDescription] = useState<string>("");
    const [newstatus, setStatus] = useState<boolean>(false);
    const [newimage, setImage] = useState<string>("");
    const [newsteps, setSteps] = useState<string[]>([""]);
    const [newdifficulty, setDifficulty] = useState<number>(0);
    const [newtime, setTime] = useState<string>("");
    const [newnumusers, setNumUsers] = useState<number>(0);
    //states needed for editing functions
    const [neweditmode, seteditmode] = useState<boolean>(false); //whether the textbox will appear boolean
    const [newTask, setNewTask] = useState<string>("");
    const [newId, setNewId] = useState<number>(0);

    //change id
    function updateNewId(event: React.ChangeEvent<HTMLInputElement>) {
        setNewId(parseInt(event.target.value));
    }
    //change description function
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }
    //change status function
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }
    //change image function
    function updateImage(event: React.ChangeEvent<HTMLInputElement>) {
        setImage(event.target.value);
    }
    //change steps function
    function updateSteps(event: React.ChangeEvent<HTMLInputElement>) {
        setSteps([event.target.value]);
    }
    //change difficulty function
    function updateDifficulty(event: React.ChangeEvent<HTMLInputElement>) {
        setDifficulty(parseInt(event.target.value));
    }
    //change time function
    function updateTime(event: React.ChangeEvent<HTMLInputElement>) {
        setTime(event.target.value);
    }
    //change num users function
    function updateNumUsers(event: React.ChangeEvent<HTMLInputElement>) {
        setNumUsers(parseInt(event.target.value));
    }
    //change edit mode
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    //change task function
    function updateNewTask(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    //add task
    function addTask() {
        taskProps.setTasks([
            ...taskProps.tasks,
            {
                id: newId,
                name: newTask,
                description: newdescription,
                status: newstatus,
                image: newimage,
                steps: newsteps,
                difficulty: newdifficulty,
                time: newtime,
                numUsers: newnumusers,
                pendingMode: false
            }
        ]);
        seteditmode(false);
    }
}
//delete task ***************************************************************************************************************
export interface delTaskProp {
    tasks: Task[];
    //item: Task;
    setTasks: (newTasks: Task[]) => void;
}

export function DeleteTask(taskProps: delTaskProp): JSX.Element {
    const [editMode, seteditmode] = useState<boolean>(false);
    const [deltask, setDelTask] = useState<string>("");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateTasks(event: React.ChangeEvent<HTMLInputElement>) {
        setDelTask(event.target.value);
    }

    function remTask() {
        [...taskProps.tasks].filter((item: Task): boolean =>
            item.name != deltask ? true : false
        );
        seteditmode(false);
    }
}
//admin list *******************************************************************************************************************
interface AdminItemProps {
    tasks: Task[];
    users: User[];
    setUsers: (newUsers: User[]) => void;
    user: User;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AdminList({ user, tasks, setTasks }: AdminItemProps) {
    const [sorted, setSorted] = useState<boolean>(false); //indicated whether the adminList is sorted right now
    const [alphabetic, setAlphabetic] = useState<boolean>(false);
    const [byTime, setByTime] = useState<boolean>(false);
    const [byDifficulty, setByDifficulty] = useState<boolean>(false);

    const [{ isOver }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => addTaskToAdminList(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addTaskToAdminList(id: number): void {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        if (droppedTask) {
            updatePending(tasks, droppedTask.id, true);
        }
    }

    function delTaskToAdminList(id: number): void {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        if (droppedTask) {
            updatePending(tasks, droppedTask.id, false);
        }
    }

    function canDelAdminTask(id: number): boolean {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        if (droppedTask) {
            return droppedTask.pendingMode;
        } else {
            return false;
        }
    }

    function updatePending(tasks: Task[], id: number, pending: boolean) {
        const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
        setTasks(
            copy.map((TASK: Task) =>
                TASK.id === id
                    ? makeTask(
                          id,
                          TASK.name,
                          TASK.description,
                          TASK.status,
                          TASK.image,
                          TASK.steps,
                          TASK.difficulty,
                          TASK.numUsers,
                          TASK.time,
                          pending
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
    }

    function makeAdmin(tasks: Task[]) {
        //this function takes the tasks state (our centralItemList) and returns a list of all elements that have been
        //dragged by the admin or super to be modified, i.e. our AdminList
        return tasks.filter((TASK: Task) => TASK.pendingMode === true);
    }

    function TrashCan(): JSX.Element {
        const [{ isOver, canDrop }, drop] = useDrop({
            accept: "task",
            drop: (item: Task) => delTaskToAdminList(item.id),
            canDrop: (item: Task) => canDelAdminTask(item.id),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        });
        if (isOver && canDrop) {
            return (
                <div ref={drop} className="trashOpen">
                    <img src={require("../trashCanOpen.jpg")} width="100px" />
                </div>
            );
        } else {
            return (
                <div ref={drop} className="trashClosed">
                    <img src={require("../trashCanClosed.jpg")} width="100px" />
                </div>
            );
        }
    }

    function updateAlphabetic() {
        setSorted(true);
        setAlphabetic(true);
        setByTime(false);
        setByDifficulty(false);
    }
    function updateByTime() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(true);
        setByDifficulty(false);
    }
    function updateByDifficulty() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(true);
    }

    function displayList(taskList: Task[]): JSX.Element {
        return (
            <div
                className="pending-tasks"
                ref={drop}
                style={{
                    backgroundColor: isOver ? "SageGreen" : "white"
                }}
            >
                {makeAdmin(taskList).map((TASK: Task, index: number) => (
                    <DisplayTask
                        key={index}
                        task={TASK}
                        tasks={tasks}
                        updateTasks={setTasks}
                        role={user.name}
                    ></DisplayTask>
                ))}
            </div>
        );
    }
}
//central list ****************************************************************************************************************
interface CentralItemProps {
    tasks: Task[];
    role: string;
    setTasks: (newTasks: Task[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function CentralItemList({ role, tasks, setTasks }: CentralItemProps) {
    const [sorted, setSorted] = useState<boolean>(false); //indicated whether the adminList is sorted right now
    const [alphabetic, setAlphabetic] = useState<boolean>(false);
    const [byTime, setByTime] = useState<boolean>(false);
    const [byDifficulty, setByDifficulty] = useState<boolean>(false);
    const [byNumUsers, setByNumUsers] = useState<boolean>(false);

    function newCentralList(taskList: Task[]) {
        return taskList.map((TASK: Task) => TASK);
    }

    function updateAlphabetic() {
        setSorted(true);
        setAlphabetic(true);
        setByTime(false);
        setByDifficulty(false);
        setByNumUsers(false);
    }
    function updateByTime() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(true);
        setByDifficulty(false);
        setByNumUsers(false);
    }
    function updateByDifficulty() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(true);
        setByNumUsers(false);
    }
    function updateByNumUsers() {
        setSorted(true);
        setAlphabetic(false);
        setByTime(false);
        setByDifficulty(false);
        setByNumUsers(true);
    }

    function displayList(taskList: Task[]): JSX.Element {
        return (
            <div className="central-tasks">
                {taskList.map((TASK: Task, index: number) => (
                    <DisplayTask
                        key={index}
                        task={TASK}
                        tasks={tasks}
                        updateTasks={setTasks}
                        role={role}
                    ></DisplayTask>
                ))}
            </div>
        );
    }
}
//change role *************************************************************************************************************
interface ChangeRoleProperties {
    Role: User;
    roles: User[];
    setRole: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
//display task ************************************************************************************************************
export interface displayProps {
    task: Task;
    tasks: Task[];
    //updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    updateTasks: (newTasks: Task[]) => void;
    role: string;
}

export function DisplayTask(display: displayProps): JSX.Element {
    const [hideDetails, setHideDetails] = useState<boolean>(true);
    const [{ isDragging }, drag] = useDrag({
        type: "task",
        item: { id: display.task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
}
//filter list *****************************************************************************************************************
export function filter_by_difficulty(list_of_tasks: Task[]): Task[] {
    //lambda function I created to be passed in the sort
    function mycomparator(a: Task, b: Task) {
        return a.difficulty - b.difficulty;
    }
    //sorts the tasks based on comparison function
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}
// the function filter_by_alphabetical_order sorts the task list by the order of the task names in alphabetical order
export function filter_by_alphabetical_order(list_of_tasks: Task[]): Task[] {
    // sort works like map, in js here I am just passing my sorting function found this on stack overflow
    list_of_tasks.sort(function (a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB)
            //sort string ascending
            return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
    });
    return list_of_tasks;
}

export function filter_by_time_needed(list_of_tasks: Task[]): Task[] {
    function mycomparator(a: Task, b: Task) {
        const aTime = parseInt(a.time);
        const bTime = parseInt(b.time);
        return aTime - bTime;
    }
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}

export function filter_by_numUsers(list_of_tasks: Task[]): Task[] {
    function myComparator(a: Task, b: Task) {
        return a.numUsers - b.numUsers;
    }
    list_of_tasks.sort(myComparator);
    return list_of_tasks;
}
//modify users ***************************************************************************************************************
interface ChangeRoleProperties {
    Role: User;
    roles: User[];
    setRoles: (newUsers: User[]) => void;
}

export function ModifyUsers(
    ChangeRoleProps: ChangeRoleProperties
): JSX.Element {
    const [editmode, seteditmode] = useState<boolean>(false); //whether the textbox will appear boolean
    const [newUser, setNewUser] = useState<string>("User2"); //the value currently in the text box of edit mode
    //function that sets role based on the role clicked
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateUsers(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(event.target.value);
    }

    function AddUsersandEditMode() {
        ChangeRoleProps.setRoles([
            ...ChangeRoleProps.roles,
            { name: newUser, userList: [] }
        ]);
        seteditmode(false);
    }
    function DeleteUsersandEditMode() {
        ChangeRoleProps.setRoles(
            [...ChangeRoleProps.roles].filter((role: User): boolean =>
                role.name !== newUser ? true : false
            )
        );
        seteditmode(false);
    }
}
//search *********************************************************************************************************************
export function search(name: string, tasks: Task[]): Task[] {
    const tasks_with_word = tasks.filter((task: Task) =>
        task.name.toLowerCase().includes(name.toLowerCase())
    );
    return tasks_with_word;
}
//user list ****************************************************************************************************************
interface UserProps {
    user: User;
    setUser: (newUser: User) => void;
    users: User[];
    tasks: Task[]; //this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setTasks: (newTasks: Task[]) => void; ////this attribute is not used right now but will be needed to update the numUsers when we add things to userList
    setUsers: (users: User[]) => void;
    //setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// export function UserList(user: UserProps): JSX.Element {

export function UserList({
    user,
    setUser,
    users,
    tasks,
    setTasks,
    setUsers
}: UserProps): JSX.Element {
    const [TaskSearched, setTaskSearched] = useState<string>("");
    const [SearchMode, SetSearchMode] = useState<boolean>(false);
    const [SearchedTasks, setSearchedTasks] = useState<Task[]>([]);
    function UpdateTaskSearched(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskSearched(event.target.value);
        setSearchedTasks(search(TaskSearched, user.userList));
    }
    function setSearchMode() {
        SetSearchMode(!SearchMode);
    }
    function sort(type_of_sort: string): void {
        if (type_of_sort == "alphabet") {
            setUser({
                name: user.name,
                userList: filter_by_alphabetical_order(user.userList)
            });
        } else if (type_of_sort == "time") {
            setUser({
                name: user.name,
                userList: filter_by_time_needed(user.userList)
            });
        } else if (type_of_sort == "difficulty") {
            setUser({
                name: user.name,
                userList: filter_by_difficulty(user.userList)
            });
        }
    }

    const [{ isOver }, drop] = useDrop({
        accept: "task",
        drop: (item: Task) => addorDelTaskUserList(item.id, true),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addorDelTaskUserList(id: number, addOrDel: boolean) {
        const droppedTask: Task | undefined = tasks.find(
            (task: Task) => task.id === id
        );
        console.log({ ...droppedTask });
        console.log("dropping task");
        if (droppedTask) {
            //updating the Role state and add the new task to the currently displayed user list
            if (addOrDel) {
                setUser({
                    name: user.name,
                    userList: addTask(droppedTask, user.userList)
                });
                setUsers(updateUserTasks(addTask(droppedTask, user.userList)));
            } else {
                setUser({
                    name: user.name,
                    userList: delTask(droppedTask, user.userList)
                });
                setUsers(updateUserTasks(delTask(droppedTask, user.userList)));
            }
            //updating the UserList in the Roles state to keep the correct user list after role changes
            //updating the number of Users of the dropped task in the central item list if the user doesnt have
            // the task already
            const repeats = user.userList.reduce(
                (currentTotal: number, task: Task) =>
                    task.id === droppedTask.id
                        ? currentTotal + 1
                        : currentTotal + 0,
                0
            );
            if (repeats === 0 && addOrDel)
                changeTasks(tasks, droppedTask.id, addOrDel);
            if (repeats === 1 && !addOrDel)
                changeTasks(tasks, droppedTask.id, addOrDel);
        }
    }

    function editUserList(newTasks: Task[]) {
        const newUser = { name: user.name, userList: newTasks };
        setUser({ name: user.name, userList: newTasks });
        const newRoles = users.map((role: User) =>
            role.name === newUser.name
                ? newUser
                : {
                      name: role.name,
                      userList: role.userList.map((T: Task) => ({
                          ...T,
                          steps: [...T.steps]
                      }))
                  }
        );
        setUsers(newRoles);
    }

    function updateUserTasks(newTasks: Task[]) {
        const newUser = { name: user.name, userList: newTasks };
        const newRoles = users.map((role: User) =>
            role.name === newUser.name
                ? newUser
                : {
                      name: role.name,
                      userList: role.userList.map((T: Task) => ({
                          ...T,
                          steps: [...T.steps]
                      }))
                  }
        );
        return newRoles;
    }

    //this function increments the numberOfUsers of the task with the passed in ID
    function changeTasks(tasks: Task[], id: number, incrOrDec: boolean) {
        const copy = tasks.map((T: Task) => ({ ...T, steps: [...T.steps] }));
        const currentNumUsers = tasks.find((T: Task) =>
            T.id === id ? T : null
        );
        let newNumUsers = -1;
        if (currentNumUsers && incrOrDec) {
            newNumUsers = currentNumUsers.numUsers + 1;
        }
        if (currentNumUsers && !incrOrDec) {
            newNumUsers = currentNumUsers.numUsers - 1;
        }
        setTasks(
            copy.map((TASK: Task) =>
                TASK.id === id
                    ? makeTask(
                          id,
                          TASK.name,
                          TASK.description,
                          TASK.status,
                          TASK.image,
                          TASK.steps,
                          TASK.difficulty,
                          newNumUsers,
                          TASK.time,
                          TASK.pendingMode
                      )
                    : { ...TASK, steps: [...TASK.steps] }
            )
        );
    }

    function TrashCan(): JSX.Element {
        const [{ isOver, canDrop }, drop] = useDrop({
            accept: "task",
            drop: (item: Task) => addorDelTaskUserList(item.id, false),
            canDrop: (item: Task) => canDel(item),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        });
        if (isOver && canDrop) {
            return (
                <div ref={drop} className="trashOpen">
                    <img src={require("../trashCanOpen.jpg")} width="100px" />
                </div>
            );
        } else {
            return (
                <div ref={drop} className="trashClosed">
                    <img src={require("../trashCanClosed.jpg")} width="100px" />
                </div>
            );
        }
    }

    function canDel(dropTask: Task): boolean {
        const droppedTask: Task | undefined = user.userList.find(
            (task: Task) => task.id === dropTask.id //&&
            //task.description === dropTask.description
            //task.time === dropTask.time
            //         &&task.difficulty === dropTask.difficulty
        );
        return droppedTask ? true : false;
    }
}
//custom render**************************************************************************************************************
export const renderWithDnd = (ui: {} | null | undefined) => {
    // eslint-disable-next-line react/prop-types
    return render(<DndProvider backend={HTML5Backend}>{ui}</DndProvider>);
};
//task functions*************************************************************************************************************
export function makeTask(
    id: number,
    name: string,
    desc: string,
    stat: boolean,
    img: string,
    steps: string[],
    diff: number,
    num: number,
    time: string,
    pending: boolean
): Task {
    const task: Task = {
        id: id,
        name: name,
        description: desc,
        status: stat,
        image: img,
        steps: steps,
        difficulty: diff,
        numUsers: num,
        time: time,
        pendingMode: pending
    };
    return task;
}

/*
Add task to a task array. Returns a deep copy of old task array plus the new task
*/
export function addTask(task: Task, tasks: Task[]) {
    return [
        ...tasks.map(
            (task: Task): Task => ({
                ...task,
                steps: [...task.steps]
            })
        ),
        { ...task, steps: [...task.steps] }
    ];
}

/*
Delete task from a task array by receiving the task to be removed
accessing it's name and filtering the list of tasks by not including the task with that name,
Ids for each task would work better just in case tasks would have the same name.
So this may need amendment later on.
*/
export function delTask(task: Task, tasks: Task[]) {
    const taskToRemove = makeTask(
        task.id,
        task.name,
        task.description,
        task.status,
        task.image,
        task.steps,
        task.difficulty,
        task.numUsers,
        task.time,
        task.pendingMode
    );
    const newTasks = tasks.filter(
        (task: Task): boolean => task.id !== taskToRemove.id /*&&
            task.description !== taskToRemove.description &&
            task.time !== taskToRemove.time &&
            task.difficulty !== taskToRemove.difficulty*/
    );
    return newTasks;
}
//user functions****************************************************************************************************************
/**
 * addUser function, adds user to the list of roles
 */
export function makeUser(user: string, tasks: Task[], roles: User[]): User[] {
    const newUser: User = { name: user, userList: tasks };
    roles.push(newUser);
    return roles;
}

/**
 * deleteUser function, deletes a user from the list of roles
 */
export function deleteUser(user: User, roles: User[]): User[] {
    user.name = "";
    user.userList = [];
    let list = [...roles];
    list = list.filter((item: User): boolean => item != user);
    return list;
}

/**
 * deleteTask function, deletes a task from the userList
 */
export function deleteTask(user: User, task: Task): Task[] {
    let list = [...user.userList];
    list = list.filter((item: Task): boolean => item != task);
    return list;
}

/**
 * addTask function, adds a task fto the userList
 */
export function addTasktoUserList(
    user: User,
    id: number,
    name: string,
    desc: string,
    stat: boolean,
    img: string,
    step: string[],
    diff: number,
    num: number,
    time: string,
    pend: boolean
): Task[] {
    const task: Task = {
        id: id,
        name: name,
        description: desc,
        status: stat,
        image: img,
        steps: step,
        difficulty: diff,
        numUsers: num,
        time: time,
        pendingMode: pend
    };
    const list = [...user.userList];
    list.push(task);
    return list;
}
