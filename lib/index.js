/**
  * @module messagemedia-webhooks
  *
  * TODO: Add a description
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const WebhooksController = require('./Controllers/WebhooksController');
const CreateWebhookRequest = require('./Models/CreateWebhookRequest');
const UpdateWebhookRequest = require('./Models/UpdateWebhookRequest');
const UpdateWebhook400ResponseException = require('./Exceptions/UpdateWebhook400ResponseException');
const RetrieveWebhook400ResponseException =
  require('./Exceptions/RetrieveWebhook400ResponseException');
const CreateWebhook400ResponseException = require('./Exceptions/CreateWebhook400ResponseException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of messagemedia-webhooks
    Configuration,
    Logger,
    // controllers of messagemedia-webhooks
    WebhooksController,
    // models of messagemedia-webhooks
    CreateWebhookRequest,
    UpdateWebhookRequest,
    // exceptions of messagemedia-webhooks
    UpdateWebhook400ResponseException,
    RetrieveWebhook400ResponseException,
    CreateWebhook400ResponseException,
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
