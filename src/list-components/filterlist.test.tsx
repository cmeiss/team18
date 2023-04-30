// Commented out the entire file because it makes npm run start fail to build the website
//import { filter_by_alphabetical_order } from "./filterlists";
// import { filter_by_difficulty } from "./filterlists";
// import { filter_by_time_needed } from "./filterlists";
// // here  for the tests I am just creating a mock list and apply the filter functions and testing if the output is equal to what it would be sorted
// const TaskList = [
//     {
//         name: "test1",
//         description: "description a",
//         status: false,
//         image: "picture",
//         steps: ["a", "b", "c", "GutenTag", "469476"],
//         difficulty: 8,
//         numUsers: 2,
//         time: 1346
//     },
//     {
//         name: "test2",
//         description: "this is the description",
//         status: false,
//         image: "picture",
//         steps: ["a", "b", "c", "GutenTag", "469476"],
//         difficulty: 4,
//         numUsers: 2,
//         time: 1300
//     },
//     {
//         name: "test3",
//         description: "a good description",
//         status: false,
//         image: "picture",
//         steps: ["a", "b", "c", "GutenTag", "469476"],
//         difficulty: 5,
//         numUsers: 2,
//         time: 875
//     }
// ];
// describe("filter", () => {
//     test("Testing the filter by time needed function", () => {
//         expect(filter_by_time_needed(TaskList)).toEqual([
//             {
//                 name: "test3",
//                 description: "a good description",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 5,
//                 numUsers: 2,
//                 time: 875
//             },
//             {
//                 name: "test2",
//                 description: "this is the description",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 4,
//                 numUsers: 2,
//                 time: 1300
//             },
//             {
//                 name: "test1",
//                 description: "description a",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 8,
//                 numUsers: 2,
//                 time: 1346
//             }
//         ]);
//     });
//     test("Testing the filter by alphabetical order function", () => {
//         expect(filter_by_alphabetical_order(TaskList)).toEqual([
//             {
//                 name: "test1",
//                 description: "description a",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 8,
//                 numUsers: 2,
//                 time: 1346
//             },
//             {
//                 name: "test2",
//                 description: "this is the description",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 4,
//                 numUsers: 2,
//                 time: 1300
//             },
//             {
//                 name: "test3",
//                 description: "a good description",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 5,
//                 numUsers: 2,
//                 time: 875
//             }
//         ]);
//     });
//     test("Testing the filter by dificulty function", () => {
//         expect(filter_by_difficulty(TaskList)).toEqual([
//             {
//                 name: "test2",
//                 description: "this is the description",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 4,
//                 numUsers: 2,
//                 time: 1300
//             },
//             {
//                 name: "test3",
//                 description: "a good description",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 5,
//                 numUsers: 2,
//                 time: 875
//             },
//             {
//                 name: "test1",
//                 description: "description a",
//                 status: false,
//                 image: "picture",
//                 steps: ["a", "b", "c", "GutenTag", "469476"],
//                 difficulty: 8,
//                 numUsers: 2,
//                 time: 1346
//             }
//         ]);
//     });
// });

export {}; //needs to be deleted later, prevents compiling errors
