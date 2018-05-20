# MessageMedia Webhooks NodeJS SDK
[![Travis Build Status](https://api.travis-ci.org/messagemedia/webhooks-nodejs-sdk.svg?branch=master)](https://travis-ci.org/messagemedia/webhooks-nodejs-sdk)
[![npm version](https://badge.fury.io/js/messagemedia-webhooks-sdk.svg)](https://badge.fury.io/js/messagemedia-webhooks-sdk)

The MessageMedia Webhooks allows you to subscribe to one or several events and when one of those events is triggered, an HTTP request is sent to the URL of your choice along with the message or payload.

## ⭐️ Installing via NPM
Now install messagemedia-messages-sdk via npm by using:
* `npm install messagemedia-webhooks-sdk`

Alternatively, add the following to the dependencies section of your package.json:
* `"messagemedia-webhooks-sdk": "^1.0.0"`

## 🎬 Get Started
It's easy to get started. Simply enter the API Key and secret you obtained from the [MessageMedia Developers Portal](https://developers.messagemedia.com) into the code snippet below and a mobile number you wish to send to.

### 🚀 Create a webhook
```javascript
const lib = require('messagemedia-webhooks-sdk');

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

```

### 📥 Retrieve all webhooks
```javascript
const lib = require('messagemedia-webhooks-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.WebhooksController;

var page = 0;
var pageSize = 0;

controller.retrieveWebhook(page, pageSize, function(error, response, context) {
    console.log(response);
});

```

### 🔄 Update a webhook
You can get a webhook ID by looking at the `id` of each webhook created from the response of the above example.
```javascript
const lib = require('messagemedia-webhooks-sdk');
// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.WebhooksController;

var webhookId = "WEBHOOK_ID";

var body = new lib.UpdateWebhookRequest({
    "url": "https://myurl.com",
    "method": "POST",
    "encoding": "FORM_ENCODED",
    "events": [
        "ENROUTE_DR"
    ],
    "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"
});

controller.updateWebhook(webhookId, body, function(error, response, context) {
    console.log(response);
});

```

### ❌ Delete a webhook
You can get a webhook ID by looking at the `id` of each webhook created from the response of the retrieve webhooks example.
```javascript
const lib = require('messagemedia-webhooks-sdk');
// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.WebhooksController;

var webhookId = "WEBHOOK_ID";

controller.deleteWebhook(webhookId, function(error, response, context) {
    console.log(response);
});

```

## 📕 Documentation
Check out the [full API documentation](DOCUMENTATION.md) for more detailed information.

## 😕 Need help?
Please contact developer support at developers@messagemedia.com or check out the developer portal at [developers.messagemedia.com](https://developers.messagemedia.com/)

## 📃 License
Apache License. See the [LICENSE](LICENSE) file.
