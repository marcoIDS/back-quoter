'use strict'
const uuidv4 = require("uuid/v4");
const BranchOfficeHook = exports = module.exports = {}

BranchOfficeHook.uuid = async (branchOffice) => {
    branchOffice.id = uuidv4();
}