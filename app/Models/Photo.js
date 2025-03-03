'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const PhotoFilter = use('App/ModelFilters/PhotoFilter')
class Photo extends Model {
    static boot () {
        super.boot()
        this.addHook("beforeCreate", "PhotoHook.uuid");
        this.addTrait('@provider:Filterable', PhotoFilter)
    }
    static get primaryKey () {
        return 'id'
      }
    
    static get incrementing () {
        return false
    }

    service() {
        return this.belongsTo('App/Models/Service')
    }

    condominum(){
        return this.belongsTo('App/Models/Condominium')
    }
}

module.exports = Photo
