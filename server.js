const Koa = require('koa');
const app = new Koa();

const Pug = require('koa-pug');
new Pug({
  viewPath: './app/views',
  basedir: './app/views',
  app: app
});

const router = require('./app/controller/index');

app.use(router);

app.listen(3000);