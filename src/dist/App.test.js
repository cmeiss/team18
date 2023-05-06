"use strict";
exports.__esModule = true;
//import App from "./App";
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var TASKS_1 = require("./TASKS");
var CentralItemList_1 = require("./list-components/CentralItemList");
var UserList_1 = require("./list-components/UserList");
var adminlist_1 = require("./list-components/adminlist");
var deleteTask_component_1 = require("./list-components/deleteTask-component");
var addTask_1 = require("./list-components/addTask");
var EditTask_1 = require("./editing-components/EditTask");
var testTask = {
    id: 1,
    name: "test1",
    description: "description a",
    status: false,
    image: "picture",
    steps: ["a", "b", "c", "GutenTag", "469476"],
    difficulty: 3,
    numUsers: 2,
    time: "1345"
};
var role1 = "Super";
//const role2 = "Admin";
//const role3 = "User1";
var User1 = { name: "user1", userList: TASKS_1.TASKS };
var User2 = { name: "Super", userList: TASKS_1.TASKS };
var User3 = { name: "Admin", userList: TASKS_1.TASKS };
var users = [User1, User2, User3];
function setTasks(newTasks) {
    newTasks;
}
function setUser(newUser) {
    newUser;
}
function setUsers(newUsers) {
    newUsers;
}
//test that components are displayed
//super: central list, add/delete task, add/delete user, edit task
//admin: admin list, central item list, edit task
//user: central item list, user list, edit task
describe("Tesing Central Item List in App", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(CentralItemList_1.CentralItemList, { tasks: TASKS_1.TASKS, role: role1, setTasks: setTasks }));
    });
    test("list is displayed", function () {
        var listDisplayed = react_2.screen.getByText("Sample Tasks");
        expect(listDisplayed).toBeInTheDocument();
    });
});
describe("Tesing User List in App", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(UserList_1.UserList, { users: users, setUsers: setUsers, tasks: TASKS_1.TASKS, setTasks: setTasks, user: User1, setUser: setUser }));
    });
    test("list is displayed", function () {
        var listDisplayed = react_2.screen.getByText(User1.name + "'s Schedule");
        expect(listDisplayed).toBeInTheDocument();
    });
    test("list not seen by super", function () {
        var container = react_2.render(react_1["default"].createElement(UserList_1.UserList, { users: users, setUsers: setUsers, tasks: TASKS_1.TASKS, setTasks: setTasks, user: User2, setUser: setUser })).container;
        expect(container).toBeEmptyDOMElement();
    });
    test("list not seen by admin", function () {
        var container = react_2.render(react_1["default"].createElement(UserList_1.UserList, { users: users, setUsers: setUsers, tasks: TASKS_1.TASKS, setTasks: setTasks, user: User3, setUser: setUser })).container;
        expect(container).toBeEmptyDOMElement();
    });
});
describe("Tesing Admin List in App", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(adminlist_1.AdminList, { users: users, setUsers: setUsers, tasks: TASKS_1.TASKS, user: User3, setTasks: setTasks }));
    });
    test("list is displayed", function () {
        var listDisplayed = react_2.screen.getByText("Admin List");
        expect(listDisplayed).toBeInTheDocument();
    });
    test("list not seen by super", function () {
        var container = react_2.render(react_1["default"].createElement(adminlist_1.AdminList, { users: users, setUsers: setUsers, tasks: TASKS_1.TASKS, user: User3, setTasks: setTasks })).container;
        expect(container).toBeEmptyDOMElement();
    });
    test("list not seen by user", function () {
        var container = react_2.render(react_1["default"].createElement(adminlist_1.AdminList, { users: users, setUsers: setUsers, tasks: TASKS_1.TASKS, user: User3, setTasks: setTasks })).container;
        expect(container).toBeEmptyDOMElement();
    });
});
describe("Testing Delete task in App", function () {
    beforeEach(function () {
        return react_2.render(react_1["default"].createElement(deleteTask_component_1.DeleteTask, { tasks: TASKS_1.TASKS, setTasks: function () {
                throw new Error("function not implemented");
            } }));
    });
    test("delete task is displayed", function () {
        var compDisplayed = react_2.screen.getByText("Delete Task");
        expect(compDisplayed).toBeInTheDocument();
    });
});
describe("Add tasks tests", function () {
    beforeEach(function () {
        return react_2.render(react_1["default"].createElement(addTask_1.AddTask, { tasks: TASKS_1.TASKS, setTasks: function ( /*newTasks: Tasks[]*/) {
                throw new Error("Function not implemented.");
            } }));
    });
    test("add task is displayed", function () {
        var compDisplayed = react_2.screen.getByText("Add Task");
        expect(compDisplayed).toBeInTheDocument();
    });
});
describe("Testing EditTask", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(EditTask_1.EditTask, { tasks: TASKS_1.TASKS, updateTasks: setTasks, task: testTask }));
    });
});
