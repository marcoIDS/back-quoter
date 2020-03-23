'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Role', async (faker,i,data) => {
    return {
       name: data.name,
       description: data.description
    }
  })
 
 Factory.blueprint('App/Models/User', async (faker,i,data) => {
    return {
       name: 'admin',
       lastName_1: 'admin',
       lastName_2: 'admin',
       username: 'admin1',
       email: 'admin@gmail.com',
       password: data.password,
       role_id: data.role_id,
       telephone: '7777'
    }
 })
