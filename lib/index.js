/**
  * @module messagemedia-webhooks
  *
  * TODO: Add a description
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const APIController = require('./Controllers/APIController');
const RetrieveResponse = require('./Models/RetrieveResponse');
const UpdateRequest15 = require('./Models/UpdateRequest15');
const Headers = require('./Models/Headers');
const UpdateRequest = require('./Models/UpdateRequest');
const CreateRequest = require('./Models/CreateRequest');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of messagemedia-webhooks
    Configuration,
    Logger,
    // controllers of messagemedia-webhooks
    APIController,
    // models of messagemedia-webhooks
    RetrieveResponse,
    UpdateRequest15,
    Headers,
    UpdateRequest,
    CreateRequest,
    // exceptions of messagemedia-webhooks
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
