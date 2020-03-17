'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceTypeSchema extends Schema {
  up () {
    this.create('service_types', (table) => {
      table.uuid('id').primary().unique();
      table.string('name').notNullable()
      table.boolean('active').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('service_types')
  }
}

module.exports = ServiceTypeSchema
