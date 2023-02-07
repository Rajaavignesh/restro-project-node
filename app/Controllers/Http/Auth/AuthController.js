'use strict'
const User = use('App/Models/UserRegister')

class AuthController {


async register({request, response}){
    const{ name, email, password} = request.post()

    var user = new User()
    user.name = name
    user.email = email
    user.password = password
    await user.save()

    return user
}


}

module.exports = AuthController
