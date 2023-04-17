import { User } from "./interfaces/user";
import { Task } from "./interfaces/task";
import { makeUser, deleteUser } from "./user-functions";

//creating basic tasks to use in userList attribute of users
const TASK1: Task = {
    name: "task1",
    description: "test task",
    status: false,
    image: "blank",
    steps: ["one", "two", "three"],
    difficulty: 1,
    numUsers: 0,
    time: 2
};
const TASK2: Task = {
    name: "task2",
    description: "test task",
    status: false,
    image: "blank",
    steps: ["four", "five", "six"],
    difficulty: 0,
    numUsers: 3,
    time: 0
};
const TASK3: Task = {
    name: "task3",
    description: "test task",
    status: false,
    image: "blank",
    steps: ["seven", "eight", "nine"],
    difficulty: 1,
    numUsers: 2,
    time: 3
};

//basic user constants to test
const USER1: User = { name: "user1", userList: [TASK1, TASK2] };
const USER2: User = { name: "user2", userList: [TASK3] };
const USER3: User = { name: "", userList: [] };

//create basic role list
const ROLES1: User[] = [USER3];
const ROLES2: User[] = [USER1, USER2, USER3];

//makeUser and deleteUser tests
describe("Testing the user functions", () => {
    test("Testing the makeUser function", () => {
        expect(makeUser("user1", [TASK1, TASK2], ROLES1)).toEqual([
            USER3,
            USER1
        ]);
        expect(makeUser("user2", [TASK3], ROLES1)).toEqual([USER3, USER2]);
    });
    test("Testing the deleteUser function", () => {
        expect(deleteUser(USER1, ROLES2)).toEqual([USER2, USER3]);
        expect(deleteUser(USER2, ROLES2)).toEqual([USER1, USER3]);
    });
});
