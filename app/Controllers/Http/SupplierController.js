'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with suppliers
 */
const Supplier = use('App/Models/Supplier');
class SupplierController {
  /**
   * Show a list of all suppliers.
   * GET suppliers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let suppliers = await Supplier.all();

    return response.status(200).json(suppliers);
  }

  /**
   * Render a form to be used for creating a new supplier.
   * GET suppliers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new supplier.
   * POST suppliers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {nameSupplier,contact,phone,cellphone,address,email,comments,description,active,type_service_id} = request.all();

    const supplier = new Supplier; 
    supplier.nameSupplier = nameSupplier;
    supplier.contact = contact;
    supplier.phone = phone;
    supplier.cellphone = cellphone;
    supplier.address = address;
    supplier.email = email;
    supplier.comments = comments;
    supplier.description = description;
    supplier.active = active;
    supplier.type_service_id = type_service_id;
    await supplier.save();
    return response.status(200).json(supplier);
  }

  /**
   * Display a single supplier.
   * GET suppliers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const supplier = await Supplier.find(params.id);
    if(!supplier){
      return response.status(404).json({data: "Resource not found"});
    }
    return response.json({supplier});
  }

  /**
   * Render a form to update an existing supplier.
   * GET suppliers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update supplier details.
   * PUT or PATCH suppliers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {nameSupplier,contact,phone,cellphone,address,email,comments,description,active,type_service_id} = request.all();
    const supplier = await Supplier.find(params.id);

    if(!supplier){
      return response.status(404).json({data: "Resource not found"});
    }else{
      supplier.nameSupplier = nameSupplier;
      supplier.contact = contact;
      supplier.phone = phone;
      supplier.cellphone = cellphone;
      supplier.address = address;
      supplier.email = email;
      supplier.comments = comments;
      supplier.description = description;
      supplier.active = active;
      supplier.type_service_id = type_service_id;
      await supplier.save();
      return response.status(200).json(supplier);
    }
  }

  /**
   * Delete a supplier with id.
   * DELETE suppliers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const supplier = await Supplier.find(params.id);
    if(!supplier){
      return response.status(404).json({data: "Resource not found"});
    }
    await supplier.delete();
    return response.status(204).json(null);
  }
}

module.exports = SupplierController
