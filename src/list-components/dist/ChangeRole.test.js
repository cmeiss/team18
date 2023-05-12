"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ChangeRole_1 = require("./ChangeRole");
var react_2 = require("@testing-library/react");
var ROLE1 = { name: "user1", userList: [] };
var ROLE2 = { name: "user2", userList: [] };
var ROLE3 = { name: "user3", userList: [] };
var roleList = [ROLE1, ROLE2, ROLE3];
describe("Change role test", function () {
    beforeEach(function () {
        return react_2.render(react_1["default"].createElement(ChangeRole_1.ChangeRole, { Role: ROLE1, roles: roleList, setRole: function ( /*newUsers: User[]*/) {
                throw new Error("Function not implemented.");
            } }));
    });
    test("change role component displays", function () {
        var comp = react_2.screen.getByText(/Role Select/i);
        expect(comp).toBeInTheDocument;
    });
    test("component updates", function () {
        var chooseRole = react_2.screen.getByText("Role Select");
        react_2.fireEvent.click(chooseRole);
        var firstOption = react_2.screen.getByRole("option", { name: "user1" });
        expect(firstOption).toBeInTheDocument();
    });
});
