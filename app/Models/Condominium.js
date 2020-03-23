'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Condominium extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "CondominiumHook.uuid");
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
