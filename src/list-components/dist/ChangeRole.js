"use strict";
exports.__esModule = true;
exports.ChangeRole = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
function ChangeRole(ChangeRoleProps) {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Role Select"),
            react_1["default"].createElement(react_bootstrap_1.Form.Select, { value: "Roles", onChange: ChangeRoleProps.setRole }, ChangeRoleProps.roles.map(function (role, index) { return (
            // eslint-disable-next-line react/jsx-key
            react_1["default"].createElement("option", { value: role.name, role: "option", key: index }, role.name)); })))));
}
exports.ChangeRole = ChangeRole;
