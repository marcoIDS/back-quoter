'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with auths
 */
const User = use('App/Models/User');
class AuthController {

  async login ({ request, response, auth }) {
    const {email, password} = request.all();
    const user = await auth.attempt(email,password);
    const dataUser = await User.findBy('email', email)
    const role = await dataUser.role().fetch()
    return response.json({user,dataUser,role});
  }
  
  async register ({ request, response, auth }) {
    try {
      const {name,username, lastName_1,lastName_2, email, password, role_id, telephone} = request.all();
      const user = new User; 
      user.name = name;
      user.username = username;
      user.lastName_1 = lastName_1;
      user.lastName_2 = lastName_2;
      user.email = email;
      user.password = password;
      user.role_id = role_id;     
      user.telephone = telephone;

      await user.save();
      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({msg: error});
      
    }
    
  }

  async updateUser({request, response, auth, params}){
    const {name,username, lastName_1,lastName_2, email, password, role_id, telephone} = request.all();

    const user = await User.find(params.id);

    if(!user){
      return response.status(404).json({data:'Resource not found'});
    }
    user.name = name;
    user.username = username;
    user.lastName_1 = lastName_1;
    user.lastName_2 = lastName_2;
    user.email = email;
    user.password = password;
    user.role_id = role_id;     
    user.telephone = telephone;
    await user.save();
    return response.status(200).json(user);
  }

  async deleteUser({request, response, auth, params}){
    const user = await User.find(params.id);

    if(!user){
      return response.status(404).json({data: "Resource not found"});
    }
    await user.delete();
    return response.status(204).json(null);
  }
}

module.exports = AuthController
