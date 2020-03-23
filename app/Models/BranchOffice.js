'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const BranchOfficeFilter = use('App/ModelFilters/BranchOfficeFilter')

class BranchOffice extends Model {
    static boot () {
        super.boot()
        this.addTrait('@provider:Filterable', BranchOfficeFilter)
        this.addHook("beforeCreate", "BranchOfficeHook.uuid");
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }

    supplier() {
        return this.belongsTo('App/Models/Supplier')
    }

    destination() {
        return this.belongsTo('App/Models/Destination')
    }
}

module.exports = BranchOffice
