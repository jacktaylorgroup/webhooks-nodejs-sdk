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

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIController;
```

### <a name="create"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.create") create

> This will create a webhook for the specified `events`
> ### Parameters
> **list of supported parameters in `template` according to the message type :**
> you must escape the json for the template parameter. see example .
> | Data   | parameter name | DR| MO | MO MMS | Comment |
> |:--|--|--|--|--|--|
> | **service type**  | $type| ``OK`` |`OK`| `OK`| |
> | **Message ID**  | $mtId, $messageId| `OK` |`OK`| `OK`| |
> | **Delivery report ID** |$drId, $reportId | `OK` || | |
> | **Reply ID**| $moId, $replyId| |`OK`| `OK`||
> | **Account ID**  | $accountId| `OK` |`OK`| `OK`||
> | **Message Timestamp**  | $submittedTimestamp| `OK` |`OK`| `OK`||
> | **Provider Timestamp**  | $receivedTimestamp| `OK` |`OK`| `OK`||
> | **Message status** | $status| `OK` ||||
> | **Status code**  | $statusCode| `OK` ||||
> | **External metadata** | $metadata.get('key')| `OK` |`OK`| `OK`||
> | **Source address**| $sourceAddress| `OK` |`OK`| `OK`||
> | **Destination address**| $destinationAddress|  |`OK`| `OK`||
> | **Message content**| $mtContent, $messageContent| `OK` |`OK`| `OK`||
> | **Reply Content**| $moContent, $replyContent|  |`OK`| `OK`||
> | **Retry Count**| $retryCount| `OK` |`OK`| `OK`||
> **list of allowed  `events` :**
> you can combine all the events whatever the message type.(at least one Event set otherwise the webhook won't be created)
> + **events for SMS**
>     + `RECEIVED_SMS`
>     + `OPT_OUT_SMS`
> + **events for MMS**
>     + `RECEIVED_MMS`
> + **events for DR**
>     + `ENROUTE_DR`
>     + `EXPIRED_DR`
>     + `REJECTED_DR`
>     + `FAILED_DR`
>     + `DELIVERED_DR`
>     + `SUBMITTED_DR`
> a **Response 400 is returned when** :
>     <ul>
>      <li>the `url` is not valid </li>
>      <li>the `events` is null/empty </li>
>      <li>the `encoding` is null </li>
>      <li>the `method` is null </li>
>      <li>the `headers` has a `ContentType`  attribute </li>
>     </ul>


```javascript
function create(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var body = new CreateRequest({"key":"value"});

    controller.create(contentType, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |




### <a name="mdelete"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.mdelete") mdelete

> This will delete the webhook with the give id.
> a **Response 404 is returned when** :
>     <ul>
>      <li>there is no webhook  with this `webhookId` </li>
>     </ul>


```javascript
function mdelete(webhookId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| webhookId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var webhookId = a7f11bb0-f299-4861-a5ca-9b29d04bc5ad;

    controller.mdelete(webhookId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Not Found |




### <a name="retrieve"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.retrieve") retrieve

> This will retrieve all webhooks for the account we're connected with.
> a **Response 400 is returned when** :
>     <ul>
>      <li>the `page` query parameter is not valid </li>
>      <li>the `pageSize` query parameter is not valid </li>
>     </ul>


```javascript
function retrieve(page, pageSize, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | TODO: Add a parameter description |
| pageSize |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = '1';
    var pageSize = '10';

    controller.retrieve(page, pageSize, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |




### <a name="update"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.update") update

> This will update a webhook and returned the updated Webhook. 
> you can update all the attributes individually or together.
> PS : the new value will override the previous one.
> ### Parameters
> + same parameters rules as create webhook apply
>  a **Response 404 is returned when** :
>     <ul>
>      <li>there is no webhook with this `webhookId` </li>
>     </ul>   
>  a **Response 400 is returned when** :
>     <ul>
>       <li>all attributes are null </li>
>      <li>events array is empty </li>
>      <li>content-Type is set in the headers instead of using the `encoding` attribute  </li>
>     </ul>


```javascript
function update(webhookId, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| webhookId |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var webhookId = uniqid();
    var contentType = 'Content-Type';
    var body = new UpdateRequest({"key":"value"});

    controller.update(webhookId, contentType, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Not Found |




[Back to List of Controllers](#list_of_controllers)



