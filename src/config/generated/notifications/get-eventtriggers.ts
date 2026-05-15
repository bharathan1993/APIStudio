import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_eventtriggersEndpoint: ApiEndpoint = {
  "id": "get-eventtriggers",
  "name": "List event triggers",
  "description": "",
  "method": "GET",
  "path": "/events/event-triggers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "baseObject",
      "label": "Base Object",
      "type": "string",
      "required": false
    },
    {
      "name": "eventTypeName",
      "label": "Event Type Name",
      "type": "string",
      "required": false
    },
    {
      "name": "active",
      "label": "Active",
      "type": "string",
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
