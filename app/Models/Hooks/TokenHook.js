'use strict'
const uuidv4 = require("uuid/v4");
const TokenHook = exports = module.exports = {}

TokenHook.uuid = async (token) => {
    token.id = uuidv4();
}
