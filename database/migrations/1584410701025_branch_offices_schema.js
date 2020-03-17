'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchOfficesSchema extends Schema {
  up () {
    this.create('branch_offices', (table) => {
      table.uuid('id').primary().unique();
      table.string('name').notNullable().unique()
      table.string('description').notNullable()
      table.string('contact').notNullable()
      table.string('phone').notNullable()
      table.string('cellphone').notNullable()
      table.string('email').notNullable().unique()
      table.string('address').notNullable()
      table.string('comments').notNullable();
      table.uuid('supplier_id').references('id').inTable('suppliers')
      table.uuid('destination_id').references('id').inTable('destinations')
      table.timestamps()
    })
  }

  down () {
    this.drop('branch_offices')
  }
}

module.exports = BranchOfficesSchema
