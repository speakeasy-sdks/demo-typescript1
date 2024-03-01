# Dataservice

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/demo-typescript1
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/demo-typescript1
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Dataservice } from "Dataservice";

async function run() {
    const sdk = new Dataservice({
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
    });

    const result = await sdk.profile.log({
        datasetId: "<value>",
        multiple: {
            columns: ["<value>"],
            data: [[[2469.2]]],
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [profile](docs/sdks/profile/README.md)

* [log](docs/sdks/profile/README.md#log) - Profile tabular data
* [logEmbeddings](docs/sdks/profile/README.md#logembeddings) - Profile embeddings
* [logPubsub](docs/sdks/profile/README.md#logpubsub) - Log Pubsub
* [logPubsubEmbedding](docs/sdks/profile/README.md#logpubsubembedding) - Log Pubsub Embeddings

### [llm](docs/sdks/llm/README.md)

* [logLlm](docs/sdks/llm/README.md#logllm) - Evaluate and log a single prompt/response pair using langkit asynchronously.
* [evaluate](docs/sdks/llm/README.md#evaluate) - Evaluate and log a single prompt/response pair using langkit.
* [listMetrics](docs/sdks/llm/README.md#listmetrics) - Get a list of available metrics that can be referenced in policies.
* [validateLlm](docs/sdks/llm/README.md#validatellm) - Validate a single prompt/response pair

### [manage](docs/sdks/manage/README.md)

* [publish](docs/sdks/manage/README.md#publish) - Publish Profiles
* [health](docs/sdks/manage/README.md#health) - Health
* [status](docs/sdks/manage/README.md#status) - Status
* [debugInfo](docs/sdks/manage/README.md#debuginfo) - Log Debug Info
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Dataservice } from "Dataservice";
import * as errors from "Dataservice/models/errors";

async function run() {
    const sdk = new Dataservice({
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
    });

    let result;
    try {
        result = await sdk.profile.log({
            datasetId: "<value>",
            multiple: {
                columns: ["<value>"],
                data: [[[2469.2]]],
            },
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.HTTPValidationError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost:8080` | None |

```typescript
import { Dataservice } from "Dataservice";

async function run() {
    const sdk = new Dataservice({
        serverIdx: 0,
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
    });

    const result = await sdk.profile.log({
        datasetId: "<value>",
        multiple: {
            columns: ["<value>"],
            data: [[[2469.2]]],
        },
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Dataservice } from "Dataservice";

async function run() {
    const sdk = new Dataservice({
        serverURL: "http://localhost:8080",
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
    });

    const result = await sdk.profile.log({
        datasetId: "<value>",
        multiple: {
            columns: ["<value>"],
            data: [[[2469.2]]],
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Dataservice } from "Dataservice";
import { HTTPClient } from "Dataservice/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Dataservice({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `apiKeyHeader` | apiKey         | API key        |

To authenticate with the API the `apiKeyHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Dataservice } from "Dataservice";

async function run() {
    const sdk = new Dataservice({
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
    });

    const result = await sdk.profile.log({
        datasetId: "<value>",
        multiple: {
            columns: ["<value>"],
            data: [[[2469.2]]],
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
