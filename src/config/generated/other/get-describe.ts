import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_describeEndpoint: ApiEndpoint = {
  "id": "get-describe",
  "name": "Describe an object",
  "description": "",
  "method": "GET",
  "path": "/v1/describe/{object}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "showCurrencyConversionInformation",
      "label": "Show Currency Conversion Information",
      "type": "string",
      "required": false
    },
    {
      "name": "showRelationships",
      "label": "Show Relationships",
      "type": "boolean",
      "required": false,
      "defaultValue": false
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
