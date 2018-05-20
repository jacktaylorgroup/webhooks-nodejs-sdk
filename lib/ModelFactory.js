

'use strict';

const CreateWebhookRequest = require('../lib/Models/CreateWebhookRequest');
const UpdateWebhookRequest = require('../lib/Models/UpdateWebhookRequest');
const UpdateWebhook400ResponseException =
  require('../lib/Exceptions/UpdateWebhook400ResponseException');
const RetrieveWebhook400ResponseException =
  require('../lib/Exceptions/RetrieveWebhook400ResponseException');
const CreateWebhook400ResponseException =
  require('../lib/Exceptions/CreateWebhook400ResponseException');

const classMap = {
    CreateWebhookRequest,
    UpdateWebhookRequest,
    UpdateWebhook400ResponseException,
    RetrieveWebhook400ResponseException,
    CreateWebhook400ResponseException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
