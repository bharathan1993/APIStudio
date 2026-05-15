import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_emailhistoryEndpoint: ApiEndpoint = {
  "id": "get-emailhistory",
  "name": "List email notification histories",
  "description": "",
  "method": "GET",
  "path": "/v1/notification-history/email",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false
    },
    {
      "name": "endTime",
      "label": "End Time",
      "type": "date",
      "required": false
    },
    {
      "name": "startTime",
      "label": "Start Time",
      "type": "date",
      "required": false
    },
    {
      "name": "objectId",
      "label": "Object Id",
      "type": "string",
      "required": false
    },
    {
      "name": "failedOnly",
      "label": "Failed Only",
      "type": "boolean",
      "required": false
    },
    {
      "name": "eventCategory",
      "label": "Event Category",
      "type": "number",
      "required": false
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
