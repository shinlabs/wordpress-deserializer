let wpEndpoint;
let oldURL;
let newURL;

async function getWpOptions(ctx) {
  wpEndpoint = ctx.request.query.wpEndpoint;

  let wordpressData = await ctx.get(wpEndpoint);

  return wordpressData;
}

async function postWpOptions(ctx) {
  wpEndpoint = ctx.body.wpEndpoint;
  oldURL = ctx.body.oldURL;
  newURL = ctx.body.newURL;

  let wordpressData = await ctx.get(wpEndpoint);

  return wordpressData;
}

module.exports = {getWpOptions, postWpOptions}