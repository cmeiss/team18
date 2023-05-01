"use strict";
exports.__esModule = true;
exports.TASK3 = exports.TASK2 = exports.TASK1 = void 0;
var user_functions_1 = require("./user-functions");
//creating basic tasks to use in userList attribute of users
exports.TASK1 = {
    id: 0,
    name: "task1",
    description: "test task",
    status: false,
    image: "blank",
    steps: ["one", "two", "three"],
    difficulty: 1,
    numUsers: 0,
    time: "2"
};
exports.TASK2 = {
    id: 1,
    name: "task2",
    description: "test task",
    status: false,
    image: "blank",
    steps: ["four", "five", "six"],
    difficulty: 0,
    numUsers: 3,
    time: "0"
};
exports.TASK3 = {
    id: 2,
    name: "task3",
    description: "test task",
    status: false,
    image: "blank",
    steps: ["seven", "eight", "nine"],
    difficulty: 1,
    numUsers: 2,
    time: "3"
};
//basic user constants to test
var USER1 = { name: "user1", userList: [exports.TASK1, exports.TASK2] };
var USER2 = { name: "user2", userList: [exports.TASK3] };
var USER3 = { name: "", userList: [] };
//create basic role list
var ROLES1 = [USER3];
var ROLES2 = [USER1, USER2, USER3];
//makeUser and deleteUser tests
describe("Testing the user functions", function () {
    test("Testing the makeUser function", function () {
        expect(user_functions_1.makeUser("user1", [exports.TASK1, exports.TASK2], ROLES1)).toEqual([
            USER3,
            USER1
        ]);
        expect(user_functions_1.makeUser("user2", [exports.TASK3], ROLES1)).toEqual([USER3, USER2]);
    });
    test("Testing the deleteUser function", function () {
        expect(user_functions_1.deleteUser(USER1, ROLES2)).toEqual([USER2, USER3]);
        expect(user_functions_1.deleteUser(USER2, ROLES2)).toEqual([USER1, USER3]);
    });
});
