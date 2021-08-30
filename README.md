# Usage

## Installing dependencides

In order to install all of the required dependencies:

```bash
npm install
```

## Running tests

In order to run unit-test files present in the project:

```bash
jest
```

## Endpoint specification

| Property       | Value                                                                                                                                             |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Route          | /                                                                                                                                                 | 
| Allowed method | POST                                                                                                                                              |
| Payload type   | application/json                                                                                                                                  |

### Payload format

```JSON
{

  "productId": <STRING>,

  "retailers": [{

    "retailerId": <STRING>,

    "retailPrice": <Number>, 

    "isInStock": <Boolean>

  }]

}

```
