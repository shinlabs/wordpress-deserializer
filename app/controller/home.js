const router = require('@koa/router')({});

router.get('/', async ctx => {
  await ctx.render('home/home');
});

module.exports = router;