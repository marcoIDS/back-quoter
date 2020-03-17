'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicesSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.uuid('id').primary().unique();
      table.string('name',20).notNullable().unique()
      table.string('description').notNullable()
      table.integer('numberPeople').notNullable()
      table.integer('serviceTime').notNullable()
      table.float('cost').notNullable()
      table.boolean('additionalPerson').notNullable()
      table.integer('additionalPersonNumber').notNullable()
      table.float('additionalPersonCost').notNullable()
      table.string('comments')
      table.uuid('condominium_id').references('id').inTable('condominiums')
      table.uuid('branch_office_id').references('id').inTable('branch_offices')
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServicesSchema
