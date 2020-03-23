'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
class UserSeeder {
  async run () {
    const roleAdmin = await Factory.model('App/Models/Role').create({name: 'Administrador',description:'Control total del sistema'});
    const password = '1234'
    console.log(roleAdmin.id);
    const user = await Factory.model('App/Models/User').create({role_id: roleAdmin.id,password:password})
  }
}

module.exports = UserSeeder
