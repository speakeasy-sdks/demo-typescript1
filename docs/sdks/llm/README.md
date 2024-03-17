# Llm
(*llm*)

### Available Operations

* [logLlm](#logllm) - Evaluate and log a single prompt/response pair using langkit asynchronously.
* [evaluate](#evaluate) - Evaluate and log a single prompt/response pair using langkit.
* [listMetrics](#listmetrics) - Get a list of available metrics that can be referenced in policies.
* [validateLlm](#validatellm) - Validate a single prompt/response pair

## logLlm

This is a convenience wrapper around the llm request type for calling /log, which accepts bulk data.

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.llm.logLlm({
    datasetId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.LLMValidateRequest](../../models/components/llmvalidaterequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.LogLlmResponse](../../models/operations/logllmresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## evaluate

Run langkit evaluation and return the validation results, as well as the generated metrics.

Args:
    log (bool, optional): Determines if logging to WhyLabs is enabled for the request. Defaults to True.

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.llm.evaluate({
    llmValidateRequest: {
      datasetId: "<value>",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EvaluateRequest](../../models/operations/evaluaterequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.EvaluateResponse](../../models/operations/evaluateresponse.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FailedEvaluationResult | 400                           | application/json              |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.SDKError               | 4xx-5xx                       | */*                           |

## listMetrics

Get a list of available metrics that can be referenced in policies.

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.llm.listMetrics();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListMetricsResponse](../../models/operations/listmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## validateLlm

This endpoint can be used to synchronously get validation results from a single input
prompt/response. It automatically performs whylogs profiling and sends profiles to
whylabs in the background, just like  the /log endpoint.

Args:
    log (bool, optional): Determines if logging to WhyLabs is enabled for the validate request. Defaults to True.

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.llm.validateLlm({
    llmValidateRequest: {
      datasetId: "<value>",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ValidateLlmRequest](../../models/operations/validatellmrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ValidateLlmResponse](../../models/operations/validatellmresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ValidationResult    | 400                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
