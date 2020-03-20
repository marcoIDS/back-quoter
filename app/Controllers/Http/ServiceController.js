'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with services
 */
const Service = use('App/Models/Service');
class ServiceController {
  /**
   * Show a list of all services.
   * GET services
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let services = await Service.all();

    return response.status(200).json(services);
  }

  /**
   * Render a form to be used for creating a new service.
   * GET services/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new service.
   * POST services
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {name, description,numberPeople,serviceTime,cost,additionalPerson,additionalPersonNumber,
      additionalPersonCost,comments,condominium_id,branch_office_id} = request.all();

    const service = new Service; 
    service.name = name;
    service.description = description;
    service.numberPeople = numberPeople;
    service.serviceTime = serviceTime;
    service.cost = cost;
    service.additionalPerson = additionalPerson;
    service.additionalPersonNumber = additionalPersonNumber;
    service.additionalPersonCost = additionalPersonCost;
    service.comments = comments;
    service.condominium_id = condominium_id;
    service.branch_office_id = branch_office_id;
    await service.save();
    return response.status(200).json(service);
  }

  /**
   * Display a single service.
   * GET services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const service = await Service.find(params.id);
    if(!service){
      return response.status(404).json({data: "Resource not found"});
    }
    return response.json({service});
  }

  /**
   * Render a form to update an existing service.
   * GET services/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update service details.
   * PUT or PATCH services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {name, description,numberPeople,serviceTime,cost,additionalPerson,additionalPersonNumber,
      additionalPersonCost,comments,condominium_id,branch_office_id} = request.all();
    const service = await Service.find(params.id);

    if(!service){
      return response.status(404).json({data: "Resource not found"});
    }else{
      service.name = name;
      service.description = description;
      service.numberPeople = numberPeople;
      service.serviceTime = serviceTime;
      service.cost = cost;
      service.additionalPerson = additionalPerson;
      service.additionalPersonNumber = additionalPersonNumber;
      service.additionalPersonCost = additionalPersonCost;
      service.comments = comments;
      service.condominium_id = condominium_id;
      service.branch_office_id = branch_office_id;
      await service.save();
      return response.status(200).json(service);
    }
  }

  /**
   * Delete a service with id.
   * DELETE services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const service = await Service.find(params.id);
    if(!service){
      return response.status(404).json({data: "Resource not found"});
    }
    await service.delete();
    return response.status(204).json(null);
  }
}

module.exports = ServiceController
