'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const ServiceFilter = use('App/ModelFilters/ServiceFilter')
class Service extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "ServiceHook.uuid");
        this.addTrait('@provider:Filterable', ServiceFilter)
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }
    condominum(){
        return this.belongsTo('App/Models/Condominium')
    }
    branchOffice() {
        return this.belongsTo('App/Models/BranchOffice')
    }
}

module.exports = Service
