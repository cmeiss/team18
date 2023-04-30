"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var UserList_1 = require("./UserList");
var TaskList = [
    {
        id: 0,
        name: "test1",
        description: "description a",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345"
    },
    {
        id: 1,
        name: "test2",
        description: "this is the description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345"
    },
    {
        id: 2,
        name: "test3",
        description: "a good description",
        status: false,
        image: "picture",
        steps: ["a", "b", "c", "GutenTag", "469476"],
        difficulty: 3,
        numUsers: 2,
        time: "1345"
    }
];
var tasks = TaskList;
//these functions do nothing and exist only to be able to call the component
function setTasks(newTasks) {
    newTasks;
}
function setUsers(newUsers) {
    newUsers;
}
function setUser(newUser) {
    newUser;
}
var User1 = { name: "user1", userList: TaskList };
var User2 = { name: "Super", userList: TaskList };
var User3 = { name: "Admin", userList: TaskList };
var users = [User1, User2, User3];
describe("Testing User List", function () {
    beforeEach(function () {
        react_2.render(react_1["default"].createElement(UserList_1.UserList, { users: users, setUsers: setUsers, tasks: tasks, setTasks: setTasks, user: User1, setUser: setUser }));
    });
    test("User name is displayed", function () {
        var header = react_2.screen.getByText(/user1/i);
        expect(header).toBeInTheDocument();
    });
    test("All tasks are displayed", function () {
        User1.userList.every(function (task) {
            var taskItem = react_2.screen.queryByText(task.name); //had to use query because the it might find parts of the name twice (e.g. test1 and test2 might both be found if searching for test)
            expect(taskItem).toBeInTheDocument;
        });
    });
    test("Check presence of header", function () {
        var header = react_2.screen.getByRole("heading", { name: /List/i });
        expect(header).toBeInTheDocument();
    });
});
describe("Testing that user list is not displayed if role is super", function () {
    test("test for empty DOM element", function () {
        var container = react_2.render(react_1["default"].createElement(UserList_1.UserList, { users: users, setUsers: setUsers, tasks: tasks, setTasks: setTasks, user: User2, setUser: setUser })).container;
        expect(container).toBeEmptyDOMElement();
    }); //this test is not passing, I need to make a change in userList so that the component returns null if role is super
});
describe("Testing that user list is not displayed if role is admin", function () {
    test("test for empty DOM element", function () {
        var container = react_2.render(react_1["default"].createElement(UserList_1.UserList, { users: users, setUsers: setUsers, tasks: tasks, setTasks: setTasks, user: User3, setUser: setUser })).container;
        expect(container).toBeEmptyDOMElement();
    }); //this test is not passing, I need to make a change in userList so that the component returns null if role is admin
});
