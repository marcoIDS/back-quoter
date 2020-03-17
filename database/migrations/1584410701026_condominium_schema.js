'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CondominiumSchema extends Schema {
  up () {
    this.create('condominiums', (table) => {
      table.uuid('id').primary().unique();
      table.string('name').notNullable().unique()
      table.string('description').notNullable()
      table.integer('numberPeople').notNullable()
      table.boolean('additional_person').notNullable()
      table.integer('additionalPersonNumber')
      table.float('additionalPersonCost')
      table.string('comments').notNullable()
      table.integer('numberRooms').notNullable()
      table.integer('numberBathrooms').notNullable()
      table.integer('numberKingBeds').notNullable()
      table.integer('numberQueenBeds').notNullable()
      table.integer('numberTwingBeds').notNullable()
      table.integer('numberDoubleBeds').notNullable()
      table.integer('numberBunks').notNullable()
      table.integer('numberSofaBeds').notNullable()
      table.boolean('airConditioning').notNullable()
      table.boolean('internet').notNullable()
      table.boolean('soudSystem').notNullable()
      table.boolean('kitchen').notNullable()
      table.boolean('dailyCleaningService').notNullable()
      table.boolean('arrivalCleaningService').notNullable()
      table.boolean('breakfast').notNullable()
      table.boolean('chef').notNullable()
      table.boolean('waiter').notNullable()
      table.float('nightCost').notNullable()
      table.integer('minimumNights').notNullable()
      table.time('checkinHour').notNullable()
      table.time('checkoutHour').notNullable()
      table.uuid('branch_office_id').references('id').inTable('branch_offices')
      table.timestamps()
    })
  }

  down () {
    this.drop('condominiums')
  }
}

module.exports = CondominiumSchema
