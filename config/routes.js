module.exports.routes = {

  // HTML Views
  '/': { view: 'homepage' },
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/test': { view: 'user/test' },
  '/welcome': { view: 'user/welcome' },
  '/EPNDescription': { view: 'user/EPNDescription' },
  '/UCEDescription': { view: 'user/UCEDescription' },
  '/UPSDescription': { view: 'user/UPSDescription' },
  'get /landin': { view: 'landing' },
  // Endpoints
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
};
