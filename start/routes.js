'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// Auth
Route.group(() => {
    Route.post('auth/login', 'Auth/AuthController.signIn');
    Route.post('auth/register', 'Auth/AuthController.register');
    Route.post('auth/token/refresh', 'Auth/AuthController.refreshToken');
    Route.post("auth/logout", "Auth/AuthController.logout");
    Route.post("auth/check-email", "Auth/AuthController.checkEmail");
    Route.post("auth/check-username", "Auth/AuthController.checkUsername");
    Route.get('auth/me', 'Auth/AuthController.me').middleware(['auth'])
}).prefix('api')
