'use strict'
const uuidv4 = require("uuid/v4");
const Supplier = exports = module.exports = {}

Supplier.uuid = async (supplier) => {
    supplier.id = uuidv4();
}