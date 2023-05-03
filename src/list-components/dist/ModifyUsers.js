"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ModifyUsers = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
function ModifyUsers(ChangeRoleProps) {
    var _a = react_1.useState(false), editmode = _a[0], seteditmode = _a[1]; //whether the textbox will appear boolean
    var _b = react_1.useState("User2"), newUser = _b[0], setNewUser = _b[1]; //the value currently in the text box of edit mode
    //function that sets role based on the role clicked
    function updateEditMode(event) {
        seteditmode(event.target.checked);
    }
    function updateUsers(event) {
        setNewUser(event.target.value);
    }
    function AddUsersandEditMode() {
        ChangeRoleProps.setRoles(__spreadArrays(ChangeRoleProps.roles, [
            { name: newUser, userList: [] }
        ]));
        seteditmode(false);
    }
    function DeleteUsersandEditMode() {
        ChangeRoleProps.setRoles(__spreadArrays(ChangeRoleProps.roles).filter(function (role) {
            return role.name !== newUser ? true : false;
        }));
        seteditmode(false);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { type: "switch", id: "editMode", label: "Edit Users", className: "mx-auto", style: { width: "150px" }, checked: editmode, onChange: updateEditMode }),
        editmode ? (react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "ChecKAnswer" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Enter New User Below:"),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: newUser, onChange: updateUsers }))) : null,
        editmode ? (react_1["default"].createElement(react_bootstrap_1.Button, { onClick: AddUsersandEditMode }, "Add User and Leave Edit Mode")) : null,
        editmode ? (react_1["default"].createElement(react_bootstrap_1.Button, { onClick: DeleteUsersandEditMode }, "Delete User and Leave Edit Mode")) : null));
}
exports.ModifyUsers = ModifyUsers;
