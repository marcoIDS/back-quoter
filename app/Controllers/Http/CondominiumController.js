'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with condominiums
 */
const Condominium = use('App/Models/Condominium');
class CondominiumController {
  /**
   * Show a list of all condominiums.
   * GET condominiums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Condominium.query().filter(request.all()).with('branchOffice').fetch()
  }

  /**
   * Render a form to be used for creating a new condominium.
   * GET condominiums/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new condominium.
   * POST condominiums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {name,description, numberPeople,additional_person, additionalPersonNumber, additionalPersonCost, 
      comments, numberRooms,numberBathrooms,numberKingBeds,numberQueenBeds, numberTwingBeds, numberDoubleBeds,numberBunks, numberSofaBeds,
      airConditioning, internet, soudSystem, kitchen, dailyCleaningService, arrivalCleaningService, breakfast,
      chef, waiter, nightCost, minimumNights, checkinHour, checkoutHour, branch_office_id} = request.all();

    const condominium = new Condominium;
    
    condominium.name = name;
    condominium.description = description;
    condominium.numberPeople = numberPeople;
    condominium.additional_person = additional_person;
    condominium.additionalPersonNumber = additionalPersonNumber;
    condominium.additionalPersonCost = additionalPersonCost;
    condominium.comments = comments;
    condominium.numberRooms = numberRooms;
    condominium.numberBathrooms = numberBathrooms;
    condominium.numberKingBeds = numberKingBeds;
    condominium.numberQueenBeds = numberQueenBeds;
    condominium.numberTwingBeds = numberTwingBeds;
    condominium.additionalPersonCost = additionalPersonCost;
    condominium.numberDoubleBeds = numberDoubleBeds;
    condominium.numberBunks = numberBunks;
    condominium.numberSofaBeds = numberSofaBeds;
    condominium.airConditioning = airConditioning; 
    condominium.internet = internet;
    condominium.soudSystem = soudSystem;
    condominium.kitchen = kitchen;
    condominium.dailyCleaningService = dailyCleaningService;
    condominium.arrivalCleaningService = arrivalCleaningService;
    condominium.breakfast = breakfast;
    condominium.chef = chef;
    condominium.waiter = waiter;
    condominium.nightCost = nightCost; 
    condominium.minimumNights = minimumNights;
    condominium.checkinHour = checkinHour;
    condominium.checkoutHour = checkoutHour;
    condominium.branch_office_id = branch_office_id;

    await condominium.save();
    return response.status(200).json(condominium);
  }

  /**
   * Display a single condominium.
   * GET condominiums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const condominium = await Condominium.find(params.id);
    if(!condominium){
      return response.status(404).json({data: "Resource not found"});
    }
    const branch_office = await condominium.branchOffice().fetch()
    return response.json({condominium,branch_office});
  }

  /**
   * Render a form to update an existing condominium.
   * GET condominiums/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update condominium details.
   * PUT or PATCH condominiums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {name,description, numberPeople,additional_person, additionalPersonNumber, additionalPersonCost, 
      comments, numberRooms,numberBathrooms,numberKingBeds,numberQueenBeds, numberTwingBeds, numberDoubleBeds,numberBunks, numberSofaBeds,
      airConditioning, internet, soudSystem, kitchen, dailyCleaningService, arrivalCleaningService, breakfast,
      chef, waiter, nightCost, minimumNights, checkinHour, checkoutHour, branch_office_id} = request.all();
    
    const condominium = await Condominium.find(params.id);

    if(!condominium){
      return response.status(404).json({data:'Recurso no encotrado'});
    }else{
      condominium.name = name;
      condominium.description = description;
      condominium.numberPeople = numberPeople;
      condominium.additional_person = additional_person;
      condominium.additionalPersonNumber = additionalPersonNumber;
      condominium.additionalPersonCost = additionalPersonCost;
      condominium.comments = comments;
      condominium.numberRooms = numberRooms;
      condominium.numberBathrooms = numberBathrooms;
      condominium.numberKingBeds = numberKingBeds;
      condominium.numberQueenBeds = numberQueenBeds;
      condominium.numberTwingBeds = numberTwingBeds;
      condominium.additionalPersonCost = additionalPersonCost;
      condominium.numberDoubleBeds = numberDoubleBeds;
      condominium.numberBunks = numberBunks;
      condominium.numberSofaBeds = numberSofaBeds;
      condominium.airConditioning = airConditioning; 
      condominium.internet = internet;
      condominium.soudSystem = soudSystem;
      condominium.kitchen = kitchen;
      condominium.dailyCleaningService = dailyCleaningService;
      condominium.arrivalCleaningService = arrivalCleaningService;
      condominium.breakfast = breakfast;
      condominium.chef = chef;
      condominium.waiter = waiter;
      condominium.nightCost = nightCost; 
      condominium.minimumNights = minimumNights;
      condominium.checkinHour = checkinHour;
      condominium.checkoutHour = checkoutHour;
      condominium.branch_office_id = branch_office_id;      
      await condominium.save();
      return response.status(200).json(condominium);
    }
  }

  /**
   * Delete a condominium with id.
   * DELETE condominiums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const condominium = await Condominium.find(params.id);
    
    if(!condominium){
      return response.status(404).json({data: "Resource not found"});
    }
    await condominium.delete();
    return response.status(204).json(null);
  }
}

module.exports = CondominiumController
