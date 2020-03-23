'use strict'
const uuidv4 = require("uuid/v4");
const ServiceHook = exports = module.exports = {}

ServiceHook.uuid = async (service) => {
    service.id = uuidv4();
}