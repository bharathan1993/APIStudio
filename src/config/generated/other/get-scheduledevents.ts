import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_scheduledeventsEndpoint: ApiEndpoint = {
  "id": "get-scheduledevents",
  "name": "List all scheduled events",
  "description": "",
  "method": "GET",
  "path": "/events/scheduled-events",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "eventTypeName",
      "label": "Event Type Name",
      "type": "string",
      "required": false
    },
    {
      "name": "apiObject",
      "label": "Api Object",
      "type": "string",
      "required": false
    },
    {
      "name": "apiField",
      "label": "Api Field",
      "type": "string",
      "required": false
    },
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false
    },
    {
      "name": "start",
      "label": "Start",
      "type": "number",
      "required": false,
      "defaultValue": 0
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "required": false,
      "defaultValue": 10
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
