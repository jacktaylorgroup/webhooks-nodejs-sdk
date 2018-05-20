/**
 * messagemedia-webhooks
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const APIException = require('./APIException');

/**
 * Creates an instance of RetrieveWebhook400ResponseException
 */
class RetrieveWebhook400ResponseException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.message = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'message', realName: 'message' },
        ]);
    }
}

module.exports = RetrieveWebhook400ResponseException;
