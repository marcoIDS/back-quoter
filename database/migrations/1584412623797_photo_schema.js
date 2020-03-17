'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotoSchema extends Schema {
  up () {
    this.create('photos', (table) => {
      table.uuid('id').primary().unique();
      table.text('url').notNullable()
      table.uuid('service_id').references('id').inTable('services')
      table.uuid('condominium_id').references('id').inTable('condominiums')
      table.timestamps()
    })
  }

  down () {
    this.drop('photos')
  }
}

module.exports = PhotoSchema
