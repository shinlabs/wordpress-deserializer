
const Router = require('@koa/router');
const wpOptionsService = require('../service/wpOptionsService');

const router = new Router({prefix: '/wp-options'});

router.get('/', async ctx => {
  await ctx.render('wp_options/index');
});

router.get('/old-data', async ctx => {
  let wpEndpoint = ctx.request.query.wpEndpoint;
  let oldData = await wpOptionsService.getWpOptions(ctx);
  let locals = { wpEndpoint, oldData: JSON.stringify(oldData, null, ' ') };
  await ctx.render('wp_options/saveWpOptions', locals);
});

router.post('/new-data', async ctx => {
  ctx.body = ctx.request.body;

  let updatedData = await wpOptionsService.postWpOptions(ctx);

  let locals = {newData: JSON.stringify(updatedData, null, ' ')};

  await ctx.render('wp_options/saveWpOptions', locals);
});

module.exports = router;