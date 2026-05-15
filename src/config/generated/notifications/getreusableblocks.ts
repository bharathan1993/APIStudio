import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getreusableblocksEndpoint: ApiEndpoint = {
  "id": "getreusableblocks",
  "name": "List reusable blocks",
  "description": "",
  "method": "GET",
  "path": "/notifications/reusable-blocks",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "start",
      "label": "Start",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "activeOnly",
      "label": "Active Only",
      "type": "boolean",
      "required": false,
      "defaultValue": true
    },
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": false,
      "enum": [
        "Headers",
        "Footers",
        "Other"
      ]
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false
    },
    {
      "name": "tag",
      "label": "Tag",
      "type": "array",
      "required": false,
      "itemType": "string"
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
