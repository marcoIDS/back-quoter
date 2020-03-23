'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const ServiceTypeFilter = use('App/ModelFilters/ServiceTypeFilter')
class ServiceType extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "ServiceTypeHook.uuid");
        this.addTrait('@provider:Filterable', ServiceTypeFilter)
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }
}

module.exports = ServiceType
