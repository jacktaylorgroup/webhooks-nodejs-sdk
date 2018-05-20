const lib = require('../lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.WebhooksController;

var body = new lib.CreateWebhookRequest({
    "url": "http://webhook.com",
    "method": "POST",
    "encoding": "JSON",
    "events": [
        "RECEIVED_SMS"
    ],
    "template": "{\"id\":\"$mtId\",\"status\":\"$statusCode\"}"
});

controller.createWebhook(body, function(error, response, context) {
    console.log(response);
});
