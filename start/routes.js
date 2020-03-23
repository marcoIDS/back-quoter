'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')

Route.get('/', () => {
    return { greeting: 'Hello Monica' }
  })


Route.group(() =>{
    Route.post('login', 'AuthController.login')
    Route.post('register', 'AuthController.register')
    Route.post('registrationRequest','AuthController.registrationRequest')
    
    Route.get('getUser/:id','AuthController.show').middleware(['auth:api'])
    Route.get('index','AuthController.index').middleware(['auth:api'])
    Route.delete('deleteUser/:id','AuthController.deleteUser').middleware(['auth:api'])
    Route.put('updateUser/:id','AuthController.updateUser').middleware(['auth:appi'])
    
    Route.resource('role','RoleController').middleware(['auth:appi'])
    
    Route.resource('supplier','SupplierController').middleware(['auth:api'])
    Route.resource('branchOffice','BranchOfficeController').middleware(['auth:api'])
    Route.resource('condominium','CondominiumController').middleware(['auth:api'])
    Route.resource('destination','DestinationController').middleware(['auth:api'])
    Route.resource('photo','PhotoController').middleware(['auth:api'])
    Route.resource('service','ServiceController').middleware(['auth:api'])
    Route.resource('servcieType','ServiceTypeController').middleware(['auth:api'])
  }).prefix('api/v1');