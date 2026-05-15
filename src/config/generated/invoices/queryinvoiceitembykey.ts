import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryinvoiceitembykeyEndpoint: ApiEndpoint = {
  "id": "queryinvoiceitembykey",
  "name": "Retrieve an invoice item",
  "description": "",
  "method": "GET",
  "path": "/object-query/invoice-items/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 10
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
      "required": false
    },
    {
      "name": "sort[]",
      "label": "Sort[]",
      "type": "array",
      "required": false,
      "itemType": "string"
    },
    {
      "name": "expand[]",
      "label": "Expand[]",
      "type": "array",
      "required": false,
      "itemType": "string",
      "itemEnum": [
        "invoice",
        "subscription",
        "subscriptionowner",
        "taxationitems",
        "rateplancharge",
        "orderlineitem"
      ]
    },
    {
      "name": "filter[]",
      "label": "Filter[]",
      "type": "array",
      "required": false,
      "itemType": "string"
    },
    {
      "name": "fields[]",
      "label": "Fields[]",
      "type": "array",
      "required": false,
      "itemType": "string"
    },
    {
      "name": "includeNullFields",
      "label": "Include Null Fields",
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
