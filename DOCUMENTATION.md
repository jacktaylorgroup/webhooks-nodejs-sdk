# Getting started

TODO: Add a description

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=MessageMediaWebhooks-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=MessageMediaWebhooks-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `MessageMediaWebhooks ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=MessageMediaWebhooks-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=MessageMediaWebhooks-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=MessageMediaWebhooks-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=MessageMediaWebhooks-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  WebhooksController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=WebhooksController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [WebhooksController](#webhooks_controller)

## <a name="webhooks_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WebhooksController") WebhooksController

### Get singleton instance

The singleton instance of the ``` WebhooksController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WebhooksController;
```

### <a name="create_webhook"></a>![Method: ](https://apidocs.io/img/method.png ".WebhooksController.createWebhook") createWebhook

> Create a webhook for one or more of the specified events.
> A webhook would typically have the following structure:
> ```
> {
>   "url": "http://webhook.com",
>   "method": "POST",
>   "encoding": "JSON",
>   "headers": {
>     "Account": "DeveloperPortal7000"
>   },
>   "events": [
>     "RECEIVED_SMS"
>   ],
>   "template": "{\"id\":\"$mtId\",\"status\":\"$statusCode\"}"
> }
> ```
> A valid webhook must consist of the following properties:
> - ```url``` The configured URL which will trigger the webhook when a selected event occurs.
> - ```method``` The methods to map CRUD (create, retrieve, update, delete) operations to HTTP requests.
> - ```encoding``` The format in which the payload will be returned. You can choose from ```JSON```, ```FORM_ENCODED``` or ```XML```. This will automatically add the Content-Type header for you so you don't have to add it again in the `headers` property.
> - ```headers``` HTTP header fields which provide required information about the request or response, or about the object sent in the message body. This should not include the `Content-Type` header.
> - ```events``` Event or events that will trigger the webhook. Atleast one event should be present.
> - ```template``` The structure of the payload that will be returned.
> #### Types of Events
> You can select all of the events (listed below) or combine them in whatever way you like but atleast one event must be used. Otherwise, the webhook won't be created.
> A webhook will be triggered when any one or more of the events occur:
> + **SMS**
>     + `RECEIVED_SMS` Receive an SMS
>     + `OPT_OUT_SMS` Opt-out occured
> + **MMS**
>     + `RECEIVED_MMS` Receive an MMS
> + **DR (Delivery Reports)**
>     + `ENROUTE_DR` Message is enroute
>     + `EXPIRED_DR` Message has expired
>     + `REJECTED_DR` Message is rejected
>     + `FAILED_DR` Message has failed
>     + `DELIVERED_DR` Message is delivered
>     + `SUBMITTED_DR` Message is submitted
> #### Template Parameters
> You can choose what to include in the data that will be sent as the payload via the Webhook.
> Keep in my mind, you must escape the JSON in the template value (see example above).
> The table illustrates a list of all the parameters that can be included in the template and which event types it can be applied to.
> | Data  | Parameter Name | Example | Event Type |
> |:--|--|--|--|--|
> | **Service Type**  | $type| `SMS` | `DR` `MO` `MO MMS` |
> | **Message ID**  | $mtId, $messageId| `877c19ef-fa2e-4cec-827a-e1df9b5509f7` | `DR` `MO` `MO MMS`|
> | **Delivery Report ID** |$drId, $reportId| `01e1fa0a-6e27-4945-9cdb-18644b4de043` | `DR` |
> | **Reply ID**| $moId, $replyId| `a175e797-2b54-468b-9850-41a3eab32f74` | `MO` `MO MMS` |
> | **Account ID**  | $accountId| `DeveloperPortal7000` | `DR` `MO` `MO MMS` |
> | **Message Timestamp**  | $submittedTimestamp| `2016-12-07T08:43:00.850Z` | `DR` `MO` `MO MMS` |
> | **Provider Timestamp**  | $receivedTimestamp| `2016-12-07T08:44:00.850Z` | `DR` `MO` `MO MMS` |
> | **Message Status** | $status| `enroute` | `DR` |
> | **Status Code**  | $statusCode| `200` | `DR` |
> | **External Metadata** | $metadata.get('key')| `name` | `DR` `MO` `MO MMS` |
> | **Source Address**| $sourceAddress| `+61491570156` | `DR` `MO` `MO MMS` |
> | **Destination Address**| $destinationAddress| `+61491593156` | `MO` `MO MMS` |
> | **Message Content**| $mtContent, $messageContent| `Hi Derp` | `DR` `MO` `MO MMS` |
> | **Reply Content**| $moContent, $replyContent| `Hello Derpina` | `MO` `MO MMS` |
> | **Retry Count**| $retryCount| `1` | `DR` `MO` `MO MMS` |
> *Note: A 400 response will be returned if the `url` is invalid, the `events`, `encoding` or `method` is null or the `headers` has a Content-Type  attribute.*


```javascript
function createWebhook(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new CreateWebhookRequest({"key":"value"});

    controller.createWebhook(body, function(error, response, context) {


    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 409 | Unexpected error in API call. See HTTP response body for details. |




### <a name="retrieve_webhook"></a>![Method: ](https://apidocs.io/img/method.png ".WebhooksController.retrieveWebhook") retrieveWebhook

> Retrieve all the webhooks created for the connected account.
> A successful request to the retrieve webhook endpoint will return a response body as follows:
> ```
> {
>     "page": 0,
>     "pageSize": 100,
>     "pageData": [
>         {
>             "url": "https://webhook.com",
>             "method": "POST",
>             "id": "8805c9d8-bef7-41c7-906a-69ede93aa024",
>             "encoding": "JSON",
>             "events": [
>                 "RECEIVED_SMS"
>             ],
>             "headers": {},
>             "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"
>         }
>     ]
> }
> ```
> *Note: Response 400 is returned when the `page` query parameter is not valid or the `pageSize` query parameter is not valid.*


```javascript
function retrieveWebhook(page, pageSize, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | TODO: Add a parameter description |
| pageSize |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 215;
    var pageSize = 215;

    controller.retrieveWebhook(page, pageSize, function(error, response, context) {


    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |




### <a name="delete_webhook"></a>![Method: ](https://apidocs.io/img/method.png ".WebhooksController.deleteWebhook") deleteWebhook

> Delete a webhook that was previously created for the connected account.
> A webhook can be cancelled by appending the UUID of the webhook to the endpoint and submitting a DELETE request to the /webhooks/messages endpoint.
> *Note: Only pre-created webhooks can be deleted. If an invalid or non existent webhook ID parameter is specified in the request, then a HTTP 404 Not Found response will be returned.*


```javascript
function deleteWebhook(webhookId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| webhookId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var webhookId = a7f11bb0-f299-4861-a5ca-9b29d04bc5ad;

    controller.deleteWebhook(webhookId, function(error, response, context) {


    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | TODO: Add an error description |




### <a name="update_webhook"></a>![Method: ](https://apidocs.io/img/method.png ".WebhooksController.updateWebhook") updateWebhook

> Update a webhook. You can update individual attributes or all of them by submitting a PATCH request to the /webhooks/messages endpoint (the same endpoint used above to delete a webhook)
> A successful request to the retrieve webhook endpoint will return a response body as follows:
> ```
> {
>     "url": "https://webhook.com",
>     "method": "POST",
>     "id": "04442623-0961-464e-9cbc-ec50804e0413",
>     "encoding": "JSON",
>     "events": [
>         "RECEIVED_SMS"
>     ],
>     "headers": {},
>     "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"
> }
> ```
> *Note: Only pre-created webhooks can be deleted. If an invalid or non existent webhook ID parameter is specified in the request, then a HTTP 404 Not Found response will be returned.*


```javascript
function updateWebhook(webhookId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| webhookId |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var webhookId = a7f11bb0-f299-4861-a5ca-9b29d04bc5ad;
    var body = new UpdateWebhookRequest(    {        "url": "https://myurl.com",        "method": "POST",        "encoding": "FORM_ENCODED",        "events": [            "ENROUTE_DR"        ],        "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"    });

    controller.updateWebhook(webhookId, body, function(error, response, context) {


    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 404 | TODO: Add an error description |




[Back to List of Controllers](#list_of_controllers)
