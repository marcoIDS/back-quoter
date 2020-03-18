'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with branchoffices
 */
const BranchOffice = use('App/Models/BranchOffice');
class BranchOfficeController {
  /**
   * Show a list of all branchoffices.
   * GET branchoffices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let branchoffices = await BranchOffice.all();

    return response.status(200).json(branchoffices);
  }

  /**
   * Render a form to be used for creating a new branchoffice.
   * GET branchoffices/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new branchoffice.
   * POST branchoffices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {name,description, contact,phone, cellphone, email, address, comments,supplier_id,destination_id } = request.all();

    const branchoffice = new BranchOffice; 

    branchoffice.name = name;
    branchoffice.description = description;
    branchoffice.contact = contact;
    branchoffice.phone = phone;
    branchoffice.cellphone = cellphone;
    branchoffice.email = email;
    branchoffice.address = address;
    branchoffice.comments = comments;
    branchoffice.supplier_id = supplier_id;
    branchoffice.destination_id = destination_id;      
    await branchoffice.save();
    return response.status(200).json(branchoffice);
  }

  /**
   * Display a single branchoffice.
   * GET branchoffices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const branchoffice = await BranchOffice.find(params.id);
    if(!branchoffice){
      return response.status(404).json({data: "Resource not found"});
    }
    //const users = await business.users().fetch();
    //const vehicles = await business.vehicles().fetch();
    return response.json({branchoffice});
  }

  /**
   * Render a form to update an existing branchoffice.
   * GET branchoffices/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update branchoffice details.
   * PUT or PATCH branchoffices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {name,description, contact,phone, cellphone, email, address, comments,supplier_id,destination_id } = request.all();

    const branchoffice = await BranchOffice.find(params.id);

    if(!branchoffice){
      return response.status(404).json({data:'Recurso no encotrado'});
    }else{
      branchoffice.name = name;
      branchoffice.description = description;
      branchoffice.contact = contact;
      branchoffice.phone = phone;
      branchoffice.cellphone = cellphone;
      branchoffice.email = email;
      branchoffice.address = address;
      branchoffice.comments = comments;
      branchoffice.supplier_id = supplier_id;
      branchoffice.destination_id = destination_id;      
      await branchoffice.save();
      return response.status(200).json(branchoffice);
    }
  }
  

  /**
   * Delete a branchoffice with id.
   * DELETE branchoffices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const branchoffice = await BranchOffice.find(params.id);

    if(!branchoffice){
      return response.status(404).json({data: "Resource not found"});
    }
    await branchoffice.delete();
    return response.status(204).json(null);
  }
  
}

module.exports = BranchOfficeController
