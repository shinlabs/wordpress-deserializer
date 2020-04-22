const axios = require('axios');

async function getWpOptions(ctx) {
  let wpEndpoint = ctx.request.query.wpEndpoint;

  return (await axios.get(wpEndpoint)).data;
}

async function postWpOptions(ctx) {
  let wpEndpoint = ctx.body.wpEndpoint;
  let oldURL = ctx.body.oldURL;
  let newURL = ctx.body.newURL;
  
  let wordpressData = (await axios.get(wpEndpoint)).data;

  let str = JSON.stringify(wordpressData, null, '  ');
  let index = str.indexOf(oldURL);
  while(index >= 0) {
    str = str.replace(oldURL, newURL);
    index = str.indexOf(oldURL, index);
  }

  await axios.post(wpEndpoint, JSON.parse(str));

  return (await axios.get(wpEndpoint)).data;
}

module.exports = {getWpOptions, postWpOptions}