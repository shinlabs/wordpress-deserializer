
const Router = require('@koa/router');

const router = new Router({prefix: '/wp-options'});

router.get('/', async ctx => {
  await ctx.render('wp_options/wp_options');
});

module.exports = router;