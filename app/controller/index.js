const compose = require('koa-compose');

const wpOptionsRouter = require('./wp_options');
const homeRouter = require('./home');

const router = compose([
  homeRouter.routes(),
  wpOptionsRouter.routes()
]);

module.exports = router;