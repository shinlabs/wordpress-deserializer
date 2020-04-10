
const Router = require('@koa/router');
const wpOptionsService = require('../service/wpOptionsService');

const router = new Router({prefix: '/wp-options'});

router.get('/', async ctx => {
  await ctx.render('wp_options/index');
});

router.get('/old-data', async ctx => {
  let wpEndpoint = ctx.request.query.wpEndpoint;
  let oldData = JSON.stringify(await wpOptionsService.getWpOptions(ctx), null, '  ');
  let locals = { wpEndpoint, oldData };
  await ctx.render('wp_options/saveWpOptions', locals);
});

router.post('/new-data', async ctx => {
  ctx.body = ctx.request.body;
  let locals = {oldData: JSON.stringify(await postWpOptions(ctx), null, '  ')};
  await ctx.render('wp_options/saveWpOptions', locals);
});

module.exports = router;