

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateWebhookRequest
 */
class UpdateWebhookRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.url = this.constructor.getValue(obj.url);
        this.method = this.constructor.getValue(obj.method);
        this.encoding = this.constructor.getValue(obj.encoding);
        this.events = this.constructor.getValue(obj.events);
        this.template = this.constructor.getValue(obj.template);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'url', realName: 'url' },
            { name: 'method', realName: 'method' },
            { name: 'encoding', realName: 'encoding' },
            { name: 'events', realName: 'events', array: true },
            { name: 'template', realName: 'template' },
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

module.exports = UpdateWebhookRequest;
