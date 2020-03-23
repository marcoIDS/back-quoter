'use strict'
const uuidv4 = require("uuid/v4");
const DestinationHook = exports = module.exports = {}

DestinationHook.uuid = async (destination) => {
    destination.id = uuidv4();
}