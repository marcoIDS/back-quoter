'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with photos
 */
const Photo = use('App/Models/Photo');
class PhotoController {
  /**
   * Show a list of all photos.
   * GET photos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let photos = await Photo.query().with('service').with('condominum').fetch();

    return response.status(200).json(photos);
  }

  /**
   * Render a form to be used for creating a new photo.
   * GET photos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new photo.
   * POST photos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {url, service_id,condominium_id} = request.all();

    const photo = new Photo; 
    photo.url = url;
    photo.service_id = service_id;
    photo.condominium_id = condominium_id;
    await photo.save();
    return response.status(200).json(photo);
  }

  /**
   * Display a single photo.
   * GET photos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const photo = await Photo.find(params.id);
    if(!photo){
      return response.status(404).json({data: "Resource not found"});
    }
    const service = await photo.service().fetch()
    const condominum = await photo.condominum().fetch();
    return response.json({photo,service,condominum});
  }

  /**
   * Render a form to update an existing photo.
   * GET photos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update photo details.
   * PUT or PATCH photos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {url, service_id,condominium_id} = request.all();

    const photo = await Photo.find(params.id);

    if(!photo){
      return response.status(404).json({data: "Resource not found"});
    }else{
      const photo = new Photo; 
      photo.url = url;
      photo.service_id = service_id;
      photo.condominium_id = condominium_id;
      await photo.save();
      return response.status(200).json(photo);
    }
  }

  /**
   * Delete a photo with id.
   * DELETE photos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const photo = await Photo.find(params.id);
    if(!photo){
      return response.status(404).json({data: "Resource not found"});
    }
    await photo.delete();
    return response.status(204).json(null);

  }
}

module.exports = PhotoController
