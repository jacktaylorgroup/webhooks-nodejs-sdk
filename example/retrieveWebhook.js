const lib = require('../lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.WebhooksController;

var page = 0;
var pageSize = 0;

controller.retrieveWebhook(page, pageSize, function(error, response, context) {
    console.log(response);
});
