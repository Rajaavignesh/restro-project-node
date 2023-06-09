'use strict'
const { validate } = use("Validator");
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

async signIn({request, response, auth}){

    //   const rules = {
    //         email: "required|email",
    //         password: "required"
    //     };

        const { email, password } = request.only(["email", "password"]);

        const validation = await validate({ email, password });
              
        if (!validation.fails()) {
            // try {
              
                const user = await auth.attempt(email, password)
                // return user
                console.log(user)
            
                return user

            // } catch (err) {
            //   return response.status(401).json({ 
            //         error: {
            //             title: 'Authentication Failed',
            //             description: 'Invalid email or password, Please ensure your credentials are correct.',
            //             button_text: 'Try Again',
            //             action: 'retry'
            //         }
                // });
            // }
        } else {
            return response.status(401).json(validation.messages());
        }
    
}


}

module.exports = AuthController
