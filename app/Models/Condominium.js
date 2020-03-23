'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const CondominiumFilter = use('App/ModelFilters/CondominiumFilter')
class Condominium extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "CondominiumHook.uuid");
        this.addTrait('@provider:Filterable', CondominiumFilter)
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }
    branchOffice() {
        return this.belongsTo('App/Models/BranchOffice')
    }
}

module.exports = Condominium
