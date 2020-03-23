'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Supplier extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "SupplierHook.uuid");
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
