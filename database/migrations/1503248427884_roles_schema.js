'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolesSchema extends Schema {
  up () {
    this.create('roles', (table) => {
      table.uuid('id').primary().unique();
      table.string('name')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('roles')
  }
}

module.exports = RolesSchema
