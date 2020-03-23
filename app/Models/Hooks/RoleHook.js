'use strict'
const uuidv4 = require("uuid/v4");
const RoleHook = exports = module.exports = {}

RoleHook.uuid = async (role) => {
    role.id=uuidv4();
}
