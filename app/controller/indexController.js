const compose = require('koa-compose');

const wpOptionsRouter = require('./wpOptionsController');
const homeRouter = require('./homeController');

const router = compose([
  homeRouter.routes(),
  wpOptionsRouter.routes()
]);

module.exports = router;