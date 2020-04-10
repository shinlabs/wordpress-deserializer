const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaRequest = require('koa-http-request');

const app = new Koa();

const Pug = require('koa-pug');
new Pug({
  viewPath: './app/views',
  basedir: './app/views',
  app: app
});

const router = require('./app/controller/indexController');

app.use(bodyParser());
app.use(koaRequest({
  dataType: 'json'
}))
app.use(router);

app.listen(3000);