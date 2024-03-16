# ValidationFailure


## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `id`                            | *string*                        | :heavy_check_mark:              | N/A                             |
| `metric`                        | *string*                        | :heavy_check_mark:              | N/A                             |
| `details`                       | *string*                        | :heavy_check_mark:              | N/A                             |
| `value`                         | *components.Value*              | :heavy_check_mark:              | N/A                             |
| `upperThreshold`                | *number*                        | :heavy_minus_sign:              | N/A                             |
| `lowerThreshold`                | *number*                        | :heavy_minus_sign:              | N/A                             |
| `allowedValues`                 | *components.AllowedValues*[]    | :heavy_minus_sign:              | N/A                             |
| `disallowedValues`              | *components.DisallowedValues*[] | :heavy_minus_sign:              | N/A                             |
| `mustBeNone`                    | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `mustBeNonNone`                 | *boolean*                       | :heavy_minus_sign:              | N/A                             |