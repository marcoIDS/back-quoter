'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const SupplierFilter = use('App/ModelFilters/SupplierFilter')
class Supplier extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "SupplierHook.uuid");
        this.addTrait('@provider:Filterable', SupplierFilter)
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }

    serviceType() {
        return this.hasOne('App/Models/ServiceType','type_service_id','id');
    }
}

module.exports = Supplier
