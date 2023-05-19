import { search } from "./search";
import { TASKS } from "../TASKS";

describe("Search Component tests", () => {
    test("Testing the search by name component", () => {
        expect(search("Breakfast", TASKS)).toStrictEqual([TASKS[3]]);
        expect(search("Homework", TASKS)).toStrictEqual([TASKS[0]]);
    });
});
