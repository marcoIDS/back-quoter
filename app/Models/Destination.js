'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const DestinationFilter = use('App/ModelFilters/DestinationFilter')
class Destination extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "DestinationHook.uuid");
        this.addTrait('@provider:Filterable', DestinationFilter)
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }
    
}

module.exports = Destination
