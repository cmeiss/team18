"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.filter_by_numUsers = exports.filter_by_time_needed = exports.filter_by_alphabetical_order = exports.filter_by_difficulty = exports.DisplayTask = exports.CentralItemList = exports.AdminList = exports.DeleteTask = exports.AddTask = exports.EditTime = exports.EditTask = exports.EditSteps = exports.EditStatus = exports.EditDescription = exports.EditDifficulty = void 0;
var react_1 = require("react");
var react_2 = require("react");
function EditDifficulty(_a) {
    var diff = _a.diff, setDifficulty = _a.setDifficulty;
    //update functions
    function updateDifficulty(newDiff) {
        setDifficulty(newDiff);
    }
}
exports.EditDifficulty = EditDifficulty;
function EditDescription(_a) {
    var description = _a.description, setDescription = _a.setDescription;
    function updateDescription(event) {
        var newDesc = String(event.target.value);
        setDescription(newDesc);
    }
}
exports.EditDescription = EditDescription;
//edit status *****************************************************************************************************************
function EditStatus(edit) {
    function updateStatus(event) {
        setStatus(event.target.checked);
    }
    var _a = react_2.useState(edit.task.status), status = _a[0], setStatus = _a[1];
    var _b = react_2.useState(true), saved = _b[0], setSaved = _b[1];
    function flipSaved() {
        setSaved(!saved);
    }
    function changeTasks(tasks, id, name, desc, stat, img, steps, diff, num, time, pend) {
        var copy = tasks.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); });
        edit.updateTasks(copy.map(function (TASK) {
            return TASK.id === id
                ? makeTask(id, name, desc, stat, img, steps, diff, num, time, pend)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
    }
}
exports.EditStatus = EditStatus;
function EditSteps(_a) {
    var steps = _a.steps, setSteps = _a.setSteps;
    function updateSteps(event) {
        var newStep = String(event.target.value);
        var newStepArray = createArrayFromString(newStep);
        setSteps(newStepArray);
    }
    function createArrayFromString(oneBigStep) {
        var newSteps = oneBigStep.split(",");
        return newSteps;
    }
}
exports.EditSteps = EditSteps;
function EditTask(edit) {
    {
        /* all attribute state needs a setter function too, but it gave me linting errors to do so in  advance
        we need to add the functions whenever we connect a new editing component*/
    }
    var id = react_2.useState(edit.task.id)[0];
    var name = react_2.useState(edit.task.name)[0];
    var _a = react_2.useState(edit.task.description), desc = _a[0], setDesc = _a[1];
    var status = react_2.useState(edit.task.status)[0];
    var img = react_2.useState(edit.task.image)[0];
    var pending = react_2.useState(edit.task.pendingMode)[0];
    var _b = react_2.useState(edit.task.steps), steps = _b[0], setSteps = _b[1];
    var _c = react_2.useState(edit.task.difficulty), diff = _c[0], setDifficulty = _c[1];
    var numUsers = react_2.useState(edit.task.numUsers)[0];
    var _d = react_2.useState(edit.task.time), time = _d[0], setTime = _d[1];
    var _e = react_2.useState(false), visible = _e[0], setVisible = _e[1];
    function updateVisibility() {
        setVisible(!visible);
    }
    //function to change the tasks, produces a copy of the old array, then changes the edited task
    function changeTasks(tasks, id, name, desc, stat, img, steps, diff, num, time, pend) {
        var copy = tasks.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); });
        edit.updateTasks(copy.map(function (TASK) {
            return TASK.id === id
                ? makeTask(id, name, desc, stat, img, steps, diff, num, time, pend)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
        console.log(tasks.map(function (TASK) {
            return TASK.id === id
                ? makeTask(id, name, desc, stat, img, steps, diff, num, time, pend)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
    }
}
exports.EditTask = EditTask;
var times = TIMES;
function EditTime(_a) {
    var time = _a.time, setTime = _a.setTime;
    function updateTime(event) {
        var newT = event.target.value;
        setTime(newT);
    }
    function printTime(time) {
        var display = "time";
        if (parseInt(time) < 100) {
            display = "00:" + time.toString();
        }
        else if (parseInt(time) < 1000 && parseInt(time) % 100 === 0) {
            display = "0" + Math.trunc(parseInt(time) / 100) + ":00";
        }
        else if (parseInt(time) < 1000) {
            "0" +
                Math.trunc(parseInt(time) / 100) +
                ":" +
                (parseInt(time) % 100).toString();
        }
        else {
            display =
                Math.trunc(parseInt(time) / 100) +
                    ":" +
                    (parseInt(time) % 100).toString();
        }
        return display;
    }
}
exports.EditTime = EditTime;
function AddTask(taskProps) {
    ///states for each attribute
    var _a = react_2.useState(""), newdescription = _a[0], setDescription = _a[1];
    var _b = react_2.useState(false), newstatus = _b[0], setStatus = _b[1];
    var _c = react_2.useState(""), newimage = _c[0], setImage = _c[1];
    var _d = react_2.useState([""]), newsteps = _d[0], setSteps = _d[1];
    var _e = react_2.useState(0), newdifficulty = _e[0], setDifficulty = _e[1];
    var _f = react_2.useState(""), newtime = _f[0], setTime = _f[1];
    var _g = react_2.useState(0), newnumusers = _g[0], setNumUsers = _g[1];
    //states needed for editing functions
    var _h = react_2.useState(false), neweditmode = _h[0], seteditmode = _h[1]; //whether the textbox will appear boolean
    var _j = react_2.useState(""), newTask = _j[0], setNewTask = _j[1];
    var _k = react_2.useState(0), newId = _k[0], setNewId = _k[1];
    //change id
    function updateNewId(event) {
        setNewId(parseInt(event.target.value));
    }
    //change description function
    function updateDescription(event) {
        setDescription(event.target.value);
    }
    //change status function
    function updateStatus(event) {
        setStatus(event.target.checked);
    }
    //change image function
    function updateImage(event) {
        setImage(event.target.value);
    }
    //change steps function
    function updateSteps(event) {
        setSteps([event.target.value]);
    }
    //change difficulty function
    function updateDifficulty(event) {
        setDifficulty(parseInt(event.target.value));
    }
    //change time function
    function updateTime(event) {
        setTime(event.target.value);
    }
    //change num users function
    function updateNumUsers(event) {
        setNumUsers(parseInt(event.target.value));
    }
    //change edit mode
    function updateEditMode(event) {
        seteditmode(event.target.checked);
    }
    //change task function
    function updateNewTask(event) {
        setNewTask(event.target.value);
    }
    //add task
    function addTask() {
        taskProps.setTasks(__spreadArrays(taskProps.tasks, [
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
        ]));
        seteditmode(false);
    }
}
exports.AddTask = AddTask;
function DeleteTask(taskProps) {
    var _a = react_2.useState(false), editMode = _a[0], seteditmode = _a[1];
    var _b = react_2.useState(""), deltask = _b[0], setDelTask = _b[1];
    function updateEditMode(event) {
        seteditmode(event.target.checked);
    }
    function updateTasks(event) {
        setDelTask(event.target.value);
    }
    function remTask() {
        __spreadArrays(taskProps.tasks).filter(function (item) {
            return item.name != deltask ? true : false;
        });
        seteditmode(false);
    }
}
exports.DeleteTask = DeleteTask;
function AdminList(_a) {
    var user = _a.user, tasks = _a.tasks, setTasks = _a.setTasks;
    var _b = react_2.useState(false), sorted = _b[0], setSorted = _b[1]; //indicated whether the adminList is sorted right now
    var _c = react_2.useState(false), alphabetic = _c[0], setAlphabetic = _c[1];
    var _d = react_2.useState(false), byTime = _d[0], setByTime = _d[1];
    var _e = react_2.useState(false), byDifficulty = _e[0], setByDifficulty = _e[1];
    var _f = useDrop({
        accept: "task",
        drop: function (item) { return addTaskToAdminList(item.id); },
        collect: function (monitor) { return ({
            isOver: !!monitor.isOver()
        }); }
    }), isOver = _f[0].isOver, drop = _f[1];
    function addTaskToAdminList(id) {
        var droppedTask = tasks.find(function (task) { return task.id === id; });
        if (droppedTask) {
            updatePending(tasks, droppedTask.id, true);
        }
    }
    function delTaskToAdminList(id) {
        var droppedTask = tasks.find(function (task) { return task.id === id; });
        if (droppedTask) {
            updatePending(tasks, droppedTask.id, false);
        }
    }
    function canDelAdminTask(id) {
        var droppedTask = tasks.find(function (task) { return task.id === id; });
        if (droppedTask) {
            return droppedTask.pendingMode;
        }
        else {
            return false;
        }
    }
    function updatePending(tasks, id, pending) {
        var copy = tasks.map(function (T) { return (__assign(__assign({}, T), { steps: __spreadArrays(T.steps) })); });
        setTasks(copy.map(function (TASK) {
            return TASK.id === id
                ? makeTask(id, TASK.name, TASK.description, TASK.status, TASK.image, TASK.steps, TASK.difficulty, TASK.numUsers, TASK.time, pending)
                : __assign(__assign({}, TASK), { steps: __spreadArrays(TASK.steps) });
        }));
    }
    function makeAdmin(tasks) {
        //this function takes the tasks state (our centralItemList) and returns a list of all elements that have been
        //dragged by the admin or super to be modified, i.e. our AdminList
        return tasks.filter(function (TASK) { return TASK.pendingMode === true; });
    }
    function TrashCan() {
        var _a = useDrop({
            accept: "task",
            drop: function (item) { return delTaskToAdminList(item.id); },
            canDrop: function (item) { return canDelAdminTask(item.id); },
            collect: function (monitor) { return ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            }); }
        }), _b = _a[0], isOver = _b.isOver, canDrop = _b.canDrop, drop = _a[1];
        if (isOver && canDrop) {
            return (react_1["default"].createElement("div", { ref: drop, className: "trashOpen" },
                react_1["default"].createElement("img", { src: require("../trashCanOpen.jpg"), width: "100px" })));
        }
        else {
            return (react_1["default"].createElement("div", { ref: drop, className: "trashClosed" },
                react_1["default"].createElement("img", { src: require("../trashCanClosed.jpg"), width: "100px" })));
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
    function displayList(taskList) {
        return (react_1["default"].createElement("div", { className: "pending-tasks", ref: drop, style: {
                backgroundColor: isOver ? "SageGreen" : "white"
            } }, makeAdmin(taskList).map(function (TASK, index) { return (react_1["default"].createElement(DisplayTask, { key: index, task: TASK, tasks: tasks, updateTasks: setTasks, role: user.name })); })));
    }
}
exports.AdminList = AdminList;
function CentralItemList(_a) {
    var role = _a.role, tasks = _a.tasks, setTasks = _a.setTasks;
    var _b = react_2.useState(false), sorted = _b[0], setSorted = _b[1]; //indicated whether the adminList is sorted right now
    var _c = react_2.useState(false), alphabetic = _c[0], setAlphabetic = _c[1];
    var _d = react_2.useState(false), byTime = _d[0], setByTime = _d[1];
    var _e = react_2.useState(false), byDifficulty = _e[0], setByDifficulty = _e[1];
    var _f = react_2.useState(false), byNumUsers = _f[0], setByNumUsers = _f[1];
    function newCentralList(taskList) {
        return taskList.map(function (TASK) { return TASK; });
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
    function displayList(taskList) {
        return (react_1["default"].createElement("div", { className: "central-tasks" }, taskList.map(function (TASK, index) { return (react_1["default"].createElement(DisplayTask, { key: index, task: TASK, tasks: tasks, updateTasks: setTasks, role: role })); })));
    }
}
exports.CentralItemList = CentralItemList;
function DisplayTask(display) {
    var _a = react_2.useState(true), hideDetails = _a[0], setHideDetails = _a[1];
    var _b = useDrag({
        type: "task",
        item: { id: display.task.id },
        collect: function (monitor) { return ({
            isDragging: !!monitor.isDragging()
        }); }
    }), isDragging = _b[0].isDragging, drag = _b[1];
}
exports.DisplayTask = DisplayTask;
//filter list *****************************************************************************************************************
function filter_by_difficulty(list_of_tasks) {
    //lambda function I created to be passed in the sort
    function mycomparator(a, b) {
        return a.difficulty - b.difficulty;
    }
    //sorts the tasks based on comparison function
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}
exports.filter_by_difficulty = filter_by_difficulty;
// the function filter_by_alphabetical_order sorts the task list by the order of the task names in alphabetical order
function filter_by_alphabetical_order(list_of_tasks) {
    // sort works like map, in js here I am just passing my sorting function found this on stack overflow
    list_of_tasks.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB)
            //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; //default return value (no sorting)
    });
    return list_of_tasks;
}
exports.filter_by_alphabetical_order = filter_by_alphabetical_order;
function filter_by_time_needed(list_of_tasks) {
    function mycomparator(a, b) {
        var aTime = parseInt(a.time);
        var bTime = parseInt(b.time);
        return aTime - bTime;
    }
    list_of_tasks.sort(mycomparator);
    return list_of_tasks;
}
exports.filter_by_time_needed = filter_by_time_needed;
function filter_by_numUsers(list_of_tasks) {
    function myComparator(a, b) {
        return a.numUsers - b.numUsers;
    }
    list_of_tasks.sort(myComparator);
    return list_of_tasks;
}
exports.filter_by_numUsers = filter_by_numUsers;
