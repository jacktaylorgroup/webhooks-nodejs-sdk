/**
 * messagemedia-webhooks
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('winston');

class WebhooksController {
    /**
     * Create a webhook for one or more of the specified events.
     * A webhook would typically have the following structure:
     * ```
     * {
     * "url": "http://webhook.com",
     * "method": "POST",
     * "encoding": "JSON",
     * "headers": {
     * "Account": "DeveloperPortal7000"
     * },
     * "events": [
     * "RECEIVED_SMS"
     * ],
     * "template": "{\"id\":\"$mtId\",\"status\":\"$statusCode\"}"
     * }
     * ```
     * A valid webhook must consist of the following properties:
     * - ```url``` The configured URL which will trigger the webhook when a selected event occurs.
     * - ```method``` The methods to map CRUD (create, retrieve, update, delete) operations to
     * HTTP requests.
     * - ```encoding``` The format in which the payload will be returned. You can choose from
     * ```JSON```, ```FORM_ENCODED``` or ```XML```. This will automatically add the Content-Type
     * header for you so you don't have to add it again in the `headers` property.
     * - ```headers``` HTTP header fields which provide required information about the request or
     * response, or about the object sent in the message body. This should not include the
     * `Content-Type` header.
     * - ```events``` Event or events that will trigger the webhook. Atleast one event should be
     * present.
     * - ```template``` The structure of the payload that will be returned.
     * #### Types of Events
     * You can select all of the events (listed below) or combine them in whatever way you like
     * but atleast one event must be used. Otherwise, the webhook won't be created.
     * A webhook will be triggered when any one or more of the events occur:
     * + **SMS**
     * + `RECEIVED_SMS` Receive an SMS
     * + `OPT_OUT_SMS` Opt-out occured
     * + **MMS**
     * + `RECEIVED_MMS` Receive an MMS
     * + **DR (Delivery Reports)**
     * + `ENROUTE_DR` Message is enroute
     * + `EXPIRED_DR` Message has expired
     * + `REJECTED_DR` Message is rejected
     * + `FAILED_DR` Message has failed
     * + `DELIVERED_DR` Message is delivered
     * + `SUBMITTED_DR` Message is submitted
     * #### Template Parameters
     * You can choose what to include in the data that will be sent as the payload via the
     * Webhook.
     * Keep in my mind, you must escape the JSON in the template value (see example above).
     * The table illustrates a list of all the parameters that can be included in the template
     * and which event types it can be applied to.
     * | Data  | Parameter Name | Example | Event Type |
     * |:--|--|--|--|--|
     * | **Service Type**  | $type| `SMS` | `DR` `MO` `MO MMS` |
     * | **Message ID**  | $mtId, $messageId| `877c19ef-fa2e-4cec-827a-e1df9b5509f7` | `DR` `MO`
     * `MO MMS`|
     * | **Delivery Report ID** |$drId, $reportId| `01e1fa0a-6e27-4945-9cdb-18644b4de043` | `DR`
     * |
     * | **Reply ID**| $moId, $replyId| `a175e797-2b54-468b-9850-41a3eab32f74` | `MO` `MO MMS` |
     * | **Account ID**  | $accountId| `DeveloperPortal7000` | `DR` `MO` `MO MMS` |
     * | **Message Timestamp**  | $submittedTimestamp| `2016-12-07T08:43:00.850Z` | `DR` `MO` `MO
     * MMS` |
     * | **Provider Timestamp**  | $receivedTimestamp| `2016-12-07T08:44:00.850Z` | `DR` `MO` `MO
     * MMS` |
     * | **Message Status** | $status| `enroute` | `DR` |
     * | **Status Code**  | $statusCode| `200` | `DR` |
     * | **External Metadata** | $metadata.get('key')| `name` | `DR` `MO` `MO MMS` |
     * | **Source Address**| $sourceAddress| `+61491570156` | `DR` `MO` `MO MMS` |
     * | **Destination Address**| $destinationAddress| `+61491593156` | `MO` `MO MMS` |
     * | **Message Content**| $mtContent, $messageContent| `Hi Derp` | `DR` `MO` `MO MMS` |
     * | **Reply Content**| $moContent, $replyContent| `Hello Derpina` | `MO` `MO MMS` |
     * | **Retry Count**| $retryCount| `1` | `DR` `MO` `MO MMS` |
     * *Note: A 400 response will be returned if the `url` is invalid, the `events`, `encoding`
     * or `method` is null or the `headers` has a Content-Type  attribute.*
     *
     * @param {CreateWebhookRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createWebhook(body, callback) {
        _logger.info('createWebhook being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createWebhook');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/webhooks/messages'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createWebhook');
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagesmedia-webhooks-sdk-1.0.0',
        };

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for createWebhook  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createWebhook...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for createWebhook...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'createWebhook');
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'CreateWebhook400ResponseException');
                    mappedObject.reason = 'Unexpected error in API call. See HTTP response body for details.';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unexpected error in API call. See HTTP response body for details.',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 409) {
                    _baseController.printErrorLog(_response.statusCode, 'createWebhook');
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'CreateWebhook400ResponseException');
                    mappedObject.reason = 'Unexpected error in API call. See HTTP response body for details.';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unexpected error in API call. See HTTP response body for details.',
                        errorCode: 409,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createWebhook ');
                    errorResponse = _baseController.validateResponse(_context, 'createWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Retrieve all the webhooks created for the connected account.
     * A successful request to the retrieve webhook endpoint will return a response body as
     * follows:
     * ```
     * {
     * "page": 0,
     * "pageSize": 100,
     * "pageData": [
     * {
     * "url": "https://webhook.com",
     * "method": "POST",
     * "id": "8805c9d8-bef7-41c7-906a-69ede93aa024",
     * "encoding": "JSON",
     * "events": [
     * "RECEIVED_SMS"
     * ],
     * "headers": {},
     * "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"
     * }
     * ]
     * }
     * ```
     * *Note: Response 400 is returned when the `page` query parameter is not valid or the
     * `pageSize` query parameter is not valid.*
     *
     * @param {int} page (optional) TODO: type description here
     * @param {int} pageSize (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static retrieveWebhook(page, pageSize, callback) {
        _logger.info('retrieveWebhook being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for retrieveWebhook');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/webhooks/messages/'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            page,
            pageSize,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for retrieveWebhook');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagesmedia-webhooks',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for retrieveWebhook  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for retrieveWebhook...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'retrieveWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for retrieveWebhook...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'retrieveWebhook');
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'RetrieveWebhook400ResponseException');
                    mappedObject.reason = 'Unexpected error in API call. See HTTP response body for details.';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unexpected error in API call. See HTTP response body for details.',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for retrieveWebhook ');
                    errorResponse = _baseController.validateResponse(_context, 'retrieveWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Delete a webhook that was previously created for the connected account.
     * A webhook can be cancelled by appending the UUID of the webhook to the endpoint and
     * submitting a DELETE request to the /webhooks/messages endpoint.
     * *Note: Only pre-created webhooks can be deleted. If an invalid or non existent webhook ID
     * parameter is specified in the request, then a HTTP 404 Not Found response will be returned.
     * *
     *
     * @param {uuid|string} webhookId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteWebhook(webhookId, callback) {
        _logger.info('deleteWebhook being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for deleteWebhook');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/webhooks/messages/{webhookId}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            webhookId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for deleteWebhook');
        const _headers = {
            'user-agent': 'messagesmedia-webhooks',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for deleteWebhook  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for deleteWebhook...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'deleteWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'deleteWebhook');
                    const _err = { errorMessage: '', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for deleteWebhook ');
                    errorResponse = _baseController.validateResponse(_context, 'deleteWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Update a webhook. You can update individual attributes or all of them by submitting a
     * PATCH request to the /webhooks/messages endpoint (the same endpoint used above to delete a
     * webhook)
     * A successful request to the retrieve webhook endpoint will return a response body as
     * follows:
     * ```
     * {
     * "url": "https://webhook.com",
     * "method": "POST",
     * "id": "04442623-0961-464e-9cbc-ec50804e0413",
     * "encoding": "JSON",
     * "events": [
     * "RECEIVED_SMS"
     * ],
     * "headers": {},
     * "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"
     * }
     * ```
     * *Note: Only pre-created webhooks can be deleted. If an invalid or non existent webhook ID
     * parameter is specified in the request, then a HTTP 404 Not Found response will be returned.
     * *
     *
     * @param {uuid|string} webhookId TODO: type description here
     * @param {UpdateWebhookRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateWebhook(webhookId, body, callback) {
        _logger.info('updateWebhook being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for updateWebhook');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/webhooks/messages/{webhookId}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            webhookId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for updateWebhook');
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagesmedia-webhooks',
        };

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PATCH',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for updateWebhook  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for updateWebhook...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'updateWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for updateWebhook...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'updateWebhook');
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'UpdateWebhook400ResponseException');
                    mappedObject.reason = 'Unexpected error in API call. See HTTP response body for details.';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unexpected error in API call. See HTTP response body for details.',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'updateWebhook');
                    const _err = { errorMessage: '', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for updateWebhook ');
                    errorResponse = _baseController.validateResponse(_context, 'updateWebhook');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = WebhooksController;
