'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with destinations
 */
const Destination = use('App/Models/Destination');
class DestinationController {
  /**
   * Show a list of all destinations.
   * GET destinations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Destination.query().filter(request.all()).fetch()
  }

  /**
   * Render a form to be used for creating a new destination.
   * GET destinations/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new destination.
   * POST destinations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {name,city, country,continent, description, active } = request.all();

    const destination = new Destination; 
    destination.name = name;
    destination.city = city;
    destination.country = country;
    destination.continent = continent;
    destination.description = description;
    destination.active = active;   
    await destination.save();
    return response.status(200).json(destination);
  }

  /**
   * Display a single destination.
   * GET destinations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const destination = await Destination.find(params.id);
    if(!destination){
      return response.status(404).json({data: "Resource not found"});
    }
    //const users = await business.users().fetch();
    //const vehicles = await business.vehicles().fetch();
    return response.json({destination});
  }

  /**
   * Render a form to update an existing destination.
   * GET destinations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update destination details.
   * PUT or PATCH destinations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {name,city, country,continent, description, active } = request.all();

    const destination = await Destination.find(params.id);

    if(!destination){
      return response.status(404).json({data: "Resource not found"});
    }else{
      destination.name = name;
      destination.city = city;
      destination.country = country;
      destination.continent = continent;
      destination.description = description;
      destination.active = active;
      await destination.save();
      return response.status(200).json(destination);
    }


  }

  /**
   * Delete a destination with id.
   * DELETE destinations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const destination = await Destination.find(params.id);
    
    if(!destination){
      return response.status(404).json({data: "Resource not found"});
    }
    await destination.delete();
    return response.status(204).json(null);

  }
}

module.exports = DestinationController
