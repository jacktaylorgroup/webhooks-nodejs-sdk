/*
 * messagemedia-webhooks
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.APIController;
const RetrieveResponse = testerlib.RetrieveResponse;
const UpdateRequest15 = testerlib.UpdateRequest15;
const Headers = testerlib.Headers;
const UpdateRequest = testerlib.UpdateRequest;
const CreateRequest = testerlib.CreateRequest;


describe("APIController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * This will delete the webhook with the give id.
a **Response 404 is returned when** :
    <ul>
     <li>there is no webhook  with this `webhookId` </li>
    </ul>
     */
    it("should testDeleteWebhook response", function testDeleteWebhookTest(done) {
        // parameters for the API call
        let webhookId = "a7f11bb0-f299-4861-a5ca-9b29d04bc5ad";

        controller.mdelete(webhookId, function callback(error, response, context) {
            // test response code
            assert.equal(401, context.response.statusCode);
            done();
        });
    });

    /**
     * This will retrieve all webhooks for the account we're connected with.
a **Response 400 is returned when** :
    <ul>
     <li>the `page` query parameter is not valid </li>
     <li>the `pageSize` query parameter is not valid </li>
    </ul>
     */
    it("should testRetrieveWebhook response", function testRetrieveWebhookTest(done) {
        // parameters for the API call
        let page = '1';
        let pageSize = '10';

        controller.retrieve(page, pageSize, function callback(error, response, context) {
            // test response code
            assert.equal(401, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body,     {    "page": 0,    "pageSize": 100,    "pageData": [{    "id": "6e2c61df-d30a-4555-82a5-0e79822d8f53",    "url": "http: //myurl.com",    "method": "POST",    "encoding": "FORM_ENCODED",    "headers": {    "Account": "FunGuys"    },    "template": "id=$mtId&status=$statusCode",    "events": [    "ENROUTE_DR",    "DELIVERED_DR"    ]    }, {    "id": "6e2c61df-d30a-4555-82a5-0e79822d8f53",    "url": "http: //myurl.com",    "method": "POST",    "encoding": "XML",    "headers": {    "Account": "FunGuys"    },    "template": "<content><id> $mtId < /id> <status > $statusCode < /status> </content>",    "events": [    "ENROUTE_DR",    "DELIVERED_DR"    ]    }]    }, true, true, false));
            done();
        });
    });

});
