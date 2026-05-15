import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryrateplanchargetiersEndpoint: ApiEndpoint = {
  "id": "queryrateplanchargetiers",
  "name": "List rate plan charge tiers",
  "description": "",
  "method": "GET",
  "path": "/object-query/rate-plan-charge-tiers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
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
        "rateplancharge"
      ]
    },
    {
      "name": "filter[]",
      "label": "Filter[]",
      "type": "array",
      "required": true,
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
