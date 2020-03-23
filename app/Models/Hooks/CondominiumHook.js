'use strict'
const uuidv4 = require("uuid/v4");
const CondominiumHook = exports = module.exports = {}

CondominiumHook.uuid = async (condominium) => {
    condominium.id = uuidv4();
}