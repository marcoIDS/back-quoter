'use strict'
const uuidv4 = require("uuid/v4");
const Photo = exports = module.exports = {}

Photo.uuid = async (photo) => {
    photo.id = uuidv4();
}