'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with roles
 */
const Role = use('App/Models/Role');
class RoleController {
  /**
   * Show a list of all roles.
   * GET roles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let roles = await Role.all();

    return response.status(200).json(roles);
  }

  /**
   * Render a form to be used for creating a new role.
   * GET roles/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new role.
   * POST roles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {name, description} = request.all();

    const role = new Role; 
    role.name = name;
    role.description = description;
    await role.save();
    return response.status(200).json(role);
  }

  /**
   * Display a single role.
   * GET roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const role = await Role.find(params.id);
    if(!role){
      return response.status(404).json({data: "Resource not found"});
    }
    return response.json({role});
  }

  /**
   * Render a form to update an existing role.
   * GET roles/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update role details.
   * PUT or PATCH roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {name, description} = request.all();
    const role = await Role.find(params.id);

    if(!role){
      return response.status(404).json({data: "Resource not found"});
    }else{
      role.name = name;
      role.description = description;
      await role.save();
      return response.status(200).json(role);
    }
  }

  /**
   * Delete a role with id.
   * DELETE roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const role = await Role.find(params.id);
    if(!role){
      return response.status(404).json({data: "Resource not found"});
    }
    await role.delete();
    return response.status(204).json(null);
  }
}

module.exports = RoleController
