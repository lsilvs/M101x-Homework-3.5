var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');
var config = require('./config.json');

module.exports = function(wagner) {
  var stripe =

  // TODO: Make Stripe depend on the Config service and use its `stripeKey`
  // property to get the Stripe API key.
  wagner.factory('Stripe', function() {
    return Stripe(config.stripeKey);
  });

  wagner.factory('fx', fx);

  wagner.factory('Config', function() {
    return JSON.parse(fs.readFileSync('./config.json').toString());
  });
};
