'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const RoleFilter = use('App/ModelFilters/RoleFilter')
class Role extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "RoleHook.uuid");
        this.addTrait('@provider:Filterable', RoleFilter)
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }
}

module.exports = Role
