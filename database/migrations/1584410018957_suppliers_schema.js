'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuppliersSchema extends Schema {
  up () {
    this.create('suppliers', (table) => {
      table.uuid('id').primary().unique();
      table.string('nameSupplier').notNullable().unique()
      table.string('contact').notNullable()
      table.string('phone').notNullable()
      table.string('cellphone').notNullable()
      table.string('address').notNullable()
      table.string('email').notNullable().unique()
      table.string('comments').notNullable()
      table.string('description').notNullable()
      table.integer('active').notNullable()
      table.uuid('type_service_id').references('id').inTable('service_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('suppliers')
  }
}

module.exports = SuppliersSchema
