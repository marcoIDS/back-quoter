'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DestinationSchema extends Schema {
  up () {
    this.create('destinations', (table) => {
      table.uuid('id').primary().unique();
      table.string('name').notNullable()
      table.string('city').notNullable()
      table.string('country').notNullable()
      table.string('continent').notNullable()
      table.string('description').notNullable()
      table.boolean('active').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('destinations')
  }
}

module.exports = DestinationSchema
