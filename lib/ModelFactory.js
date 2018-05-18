/**
 * messagemedia-webhooks
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const RetrieveResponse = require('../lib/Models/RetrieveResponse');
const UpdateRequest15 = require('../lib/Models/UpdateRequest15');
const Headers = require('../lib/Models/Headers');
const UpdateRequest = require('../lib/Models/UpdateRequest');
const CreateRequest = require('../lib/Models/CreateRequest');

const classMap = {
    RetrieveResponse,
    UpdateRequest15,
    Headers,
    UpdateRequest,
    CreateRequest,
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
