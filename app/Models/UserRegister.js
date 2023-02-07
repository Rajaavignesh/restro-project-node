'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class UserRegister
 */
class UserRegister extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserRegisterHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * UserRegister's schema
   */
  static get schema () {
    return {
      name:{
          type:"String"
      },
      email:{
        type:"String"
      },
      password:{
        type:"String"
      }
    }
  }
  static get schemaOptions() {
    return {
        collection: "users",
        toObject: { virtuals: true, getters: true },
        toJSON: { virtuals: true, getters: true }
    };
}
}

module.exports = UserRegister.buildModel('UserRegister')
