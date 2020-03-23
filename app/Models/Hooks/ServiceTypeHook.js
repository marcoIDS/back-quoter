'use strict'
const uuidv4 = require("uuid/v4");
const ServiceTypeHook = exports = module.exports = {}

ServiceTypeHook.uuid = async (serviceType) => {
    serviceType.id = uuidv4();
}