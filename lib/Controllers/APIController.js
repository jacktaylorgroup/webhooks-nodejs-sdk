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

class APIController {
    /**
     * This will create a webhook for the specified `events`
     * ### Parameters
     * **list of supported parameters in `template` according to the message type :**
     * you must escape the json for the template parameter. see example .
     * | Data   | parameter name | DR| MO | MO MMS | Comment |
     * |:--|--|--|--|--|--|
     * | **service type**  | $type| ``OK`` |`OK`| `OK`| |
     * | **Message ID**  | $mtId, $messageId| `OK` |`OK`| `OK`| |
     * | **Delivery report ID** |$drId, $reportId | `OK` || | |
     * | **Reply ID**| $moId, $replyId| |`OK`| `OK`||
     * | **Account ID**  | $accountId| `OK` |`OK`| `OK`||
     * | **Message Timestamp**  | $submittedTimestamp| `OK` |`OK`| `OK`||
     * | **Provider Timestamp**  | $receivedTimestamp| `OK` |`OK`| `OK`||
     * | **Message status** | $status| `OK` ||||
     * | **Status code**  | $statusCode| `OK` ||||
     * | **External metadata** | $metadata.get('key')| `OK` |`OK`| `OK`||
     * | **Source address**| $sourceAddress| `OK` |`OK`| `OK`||
     * | **Destination address**| $destinationAddress|  |`OK`| `OK`||
     * | **Message content**| $mtContent, $messageContent| `OK` |`OK`| `OK`||
     * | **Reply Content**| $moContent, $replyContent|  |`OK`| `OK`||
     * | **Retry Count**| $retryCount| `OK` |`OK`| `OK`||
     * **list of allowed  `events` :**
     * you can combine all the events whatever the message type.(at least one Event set otherwise
     * the webhook won't be created)
     * + **events for SMS**
     * + `RECEIVED_SMS`
     * + `OPT_OUT_SMS`
     * + **events for MMS**
     * + `RECEIVED_MMS`
     * + **events for DR**
     * + `ENROUTE_DR`
     * + `EXPIRED_DR`
     * + `REJECTED_DR`
     * + `FAILED_DR`
     * + `DELIVERED_DR`
     * + `SUBMITTED_DR`
     * a **Response 400 is returned when** :
     * <ul>
     * <li>the `url` is not valid </li>
     * <li>the `events` is null/empty </li>
     * <li>the `encoding` is null </li>
     * <li>the `method` is null </li>
     * <li>the `headers` has a `ContentType`  attribute </li>
     * </ul>
     *
     * @param {string} contentType TODO: type description here
     * @param {CreateRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static create(contentType, body, callback) {
        _logger.info('create being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for create');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/webhooks/messages'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for create');
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'Content-Type': contentType,
            'user-agent': 'messagesmedia-webhooks',
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
        _logger.debug(`'Raw request for create  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for create...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'create');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for create...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'create');
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for create ');
                    errorResponse = _baseController.validateResponse(_context, 'create');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * This will delete the webhook with the give id.
     * a **Response 404 is returned when** :
     * <ul>
     * <li>there is no webhook  with this `webhookId` </li>
     * </ul>
     *
     * @param {uuid|string} webhookId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static mdelete(webhookId, callback) {
        _logger.info('mdelete being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for mdelete');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/webhooks/messages/{webhookId}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            webhookId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for mdelete');
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
        _logger.debug(`'Raw request for mdelete  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for mdelete...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'mdelete');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'mdelete');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for mdelete ');
                    errorResponse = _baseController.validateResponse(_context, 'mdelete');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * This will retrieve all webhooks for the account we're connected with.
     * a **Response 400 is returned when** :
     * <ul>
     * <li>the `page` query parameter is not valid </li>
     * <li>the `pageSize` query parameter is not valid </li>
     * </ul>
     *
     * @param {int} page (optional) TODO: type description here
     * @param {int} pageSize (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static retrieve(page, pageSize, callback) {
        _logger.info('retrieve being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for retrieve');
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
        _logger.info('Preparing headers for retrieve');
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
        _logger.debug(`'Raw request for retrieve  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for retrieve...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'retrieve');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for retrieve...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for retrieve');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'RetrieveResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'retrieve');
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for retrieve ');
                    errorResponse = _baseController.validateResponse(_context, 'retrieve');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * This will update a webhook and returned the updated Webhook.
     * you can update all the attributes individually or together.
     * PS : the new value will override the previous one.
     * ### Parameters
     * + same parameters rules as create webhook apply
     * a **Response 404 is returned when** :
     * <ul>
     * <li>there is no webhook with this `webhookId` </li>
     * </ul>
     * a **Response 400 is returned when** :
     * <ul>
     * <li>all attributes are null </li>
     * <li>events array is empty </li>
     * <li>content-Type is set in the headers instead of using the `encoding` attribute
     * </li>
     * </ul>
     *
     * @param {uuid|string} webhookId TODO: type description here
     * @param {string} contentType TODO: type description here
     * @param {UpdateRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static update(webhookId, contentType, body, callback) {
        _logger.info('update being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for update');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/webhooks/messages/{webhookId}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            webhookId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for update');
        const _headers = {
            'content-type': 'application/json; charset=utf-8',
            'Content-Type': contentType,
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
        _logger.debug(`'Raw request for update  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for update...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'update');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'update');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for update ');
                    errorResponse = _baseController.validateResponse(_context, 'update');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = APIController;
