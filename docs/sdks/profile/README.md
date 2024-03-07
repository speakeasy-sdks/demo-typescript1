# Profile
(*profile*)

### Available Operations

* [log](#log) - Profile tabular data
* [logEmbeddings](#logembeddings) - Profile embeddings
* [logPubsub](#logpubsub) - Log Pubsub
* [logPubsubEmbedding](#logpubsubembedding) - Log Pubsub Embeddings

## log

Profile tabular data. The Swagger UI isn't able to call this currently.

## Sample curl request:

```bash
curl -X 'POST'         -H "X-API-Key: <password>"         -H "Content-Type: application/json"         'http://localhost:8000/log'         --data-raw '{
    "datasetId": "model-62",
    "multiple": {
        "columns": [ "age", "workclass", "fnlwgt", "education" ],
        "data": [
            [ 25, "Private", 226802, "11th" ]
        ]
    }
}'
```
## Sample Python client request:
```python
from whylogs_container_client import AuthenticatedClient
import whylogs_container_client.api.profile.log as Log
from whylogs_container_client.models import LogRequest, LogMultiple
from datetime import datetime

client = AuthenticatedClient(base_url="http://localhost:8000", token="password", prefix="", auth_header_name="X-API-Key")

data = LogRequest(
    dataset_id="model-1",
    timestamp=int(datetime.now().timestamp() * 1000),
    multiple=LogMultiple(
        columns=["col1", "col2"],
        data=[[1, 2], [3, 4]],
    )
)

response = Log.sync_detailed(client=client, json_body=data)
if response.status_code != 200:
    raise Exception(f"Failed to log data. Status code: {response.status_code}")
# API is async, it won't fail and has no return body
```

## Sample Python request (using `requests`):
```python
import requests

# Define your API key
api_key = "<password>"

# API endpoint
url = 'http://localhost:8000/log'

# Sample data
data = {
    "datasetId": "model-62",
    "multiple": {
        "columns": ["age", "workclass", "fnlwgt", "education"],
        "data": [
            [25, "Private", 226802, "11th"]
        ]
    }
}

# Make the POST request
headers = {"X-API-Key": api_key}
response = requests.post(url, json=data, headers=headers)
```

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.profile.log({
    datasetId: "<value>",
    multiple: {
      columns: [
        "<value>",
      ],
      data: [
        [
            [
              2469.2,
            ],
        ],
      ],
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
| `request`                                                                                                                                                                      | [components.LogRequest](../../models/components/logrequest.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.LogResponse](../../models/operations/logresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## logEmbeddings

This endpoint requires a custom configuration to set up before hand. See https://docs.whylabs.ai/docs/integrations-whylogs-container/
for setting up embeddings support.

Log embeddings data. The Swagger UI isn't able to call this currently.

## Sample curl request:

```bash
curl -X 'POST'         -H "X-API-Key: <password>"         -H "Content-Type: application/octet-stream"         'http://localhost:8000/log-embeddings'         --data-raw '{
    "datasetId": "model-62",
    "timestamp": 1634235000,
    "embeddings": {
        "embeddings": [[0.12, 0.45, 0.33, 0.92]]
    }
}'
```

## Sample Python request (using `requests`):
```python
import requests

# Define your API key
api_key = "<password>"

# API endpoint
url = 'http://localhost:8000/log-embeddings'

# Sample data
data = {
    "datasetId": "model-62",
    "timestamp": 1634235000,  # an example timestamp
    "embeddings": {
        "embeddings": [[0.12, 0.45, 0.33, 0.92]]
    }
}

# Make the POST request
headers = {"X-API-Key": api_key, "Content-Type": "application/octet-stream"}
response = requests.post(url, json=data, headers=headers)
```

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.profile.logEmbeddings({
    datasetId: "<value>",
    timestamp: 715289,
    embeddings: {
      "key": [
        [
          7761.13,
        ],
      ],
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
| `request`                                                                                                                                                                      | [components.LogEmbeddingRequest](../../models/components/logembeddingrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.LogEmbeddingsResponse](../../models/operations/logembeddingsresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## logPubsub

Log Pubsub

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.profile.logPubsub();

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

**Promise<[operations.LogPubsubResponse](../../models/operations/logpubsubresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## logPubsubEmbedding

Log Pubsub Embeddings

### Example Usage

```typescript
import { Dataservice } from "Dataservice";

async function run() {
  const sdk = new Dataservice({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.profile.logPubsubEmbedding();

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

**Promise<[operations.LogPubsubEmbeddingResponse](../../models/operations/logpubsubembeddingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
