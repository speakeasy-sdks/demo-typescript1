<!-- Start SDK Example Usage [usage] -->
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