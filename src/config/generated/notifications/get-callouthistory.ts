import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_callouthistoryEndpoint: ApiEndpoint = {
  "id": "get-callouthistory",
  "name": "List callout notification histories",
  "description": "",
  "method": "GET",
  "path": "/v1/notification-history/callout",
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
      "type": "string",
      "required": false
    },
    {
      "name": "includeResponseContent",
      "label": "Include Response Content",
      "type": "boolean",
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
