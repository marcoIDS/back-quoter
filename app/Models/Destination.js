'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Destination extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "DestinationHook.uuid");
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }
    
}

module.exports = Destination
