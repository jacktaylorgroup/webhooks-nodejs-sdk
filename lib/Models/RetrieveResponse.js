/**
 * messagemedia-webhooks
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of RetrieveResponse
 */
class RetrieveResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.page = this.constructor.getValue(obj.page);
        this.pageSize = this.constructor.getValue(obj.pageSize);
        this.pageData = this.constructor.getValue(obj.pageData);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'page', realName: 'page' },
            { name: 'pageSize', realName: 'pageSize' },
            { name: 'pageData', realName: 'pageData', array: true },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = RetrieveResponse;
