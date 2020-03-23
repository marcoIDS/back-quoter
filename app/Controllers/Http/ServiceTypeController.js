'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with servicetypes
 */
const ServiceType = use('App/Models/ServiceType');
class ServiceTypeController {
  /**
   * Show a list of all servicetypes.
   * GET servicetypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await ServiceType.query().filter(request.all()).fetch()    
  }

  /**
   * Render a form to be used for creating a new servicetype.
   * GET servicetypes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new servicetype.
   * POST servicetypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {name,active} = request.all();

    const serviceType = new ServiceType; 
    serviceType.name = name;
    serviceType.active = active;
    await serviceType.save();
    return response.status(200).json(serviceType);
  }

  /**
   * Display a single servicetype.
   * GET servicetypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const serviceType = await ServiceType.find(params.id);
    if(!serviceType){
      return response.status(404).json({data: "Resource not found"});
    }
    return response.json({serviceType});
  }

  /**
   * Render a form to update an existing servicetype.
   * GET servicetypes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update servicetype details.
   * PUT or PATCH servicetypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {name, active} = request.all();
    const serviceType = await ServiceType.find(params.id);

    if(!serviceType){
      return response.status(404).json({data: "Resource not found"});
    }else{
      serviceType.name = name;
      serviceType.active = active;
      await serviceType.save();
      return response.status(200).json(serviceType);
    }
  }

  /**
   * Delete a servicetype with id.
   * DELETE servicetypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const serviceType = await ServiceType.find(params.id);
    if(!serviceType){
      return response.status(404).json({data: "Resource not found"});
    }
    await serviceType.delete();
    return response.status(204).json(null);
  }
}

module.exports = ServiceTypeController
