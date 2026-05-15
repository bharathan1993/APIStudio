import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowsEndpoint: ApiEndpoint = {
  "id": "get-workflows",
  "name": "List workflows",
  "description": "",
  "method": "GET",
  "path": "/workflows",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "callout_trigger",
      "label": "Callout Trigger",
      "type": "boolean",
      "required": false
    },
    {
      "name": "interval",
      "label": "Interval",
      "type": "string",
      "required": false
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false
    },
    {
      "name": "ondemand_trigger",
      "label": "Ondemand Trigger",
      "type": "boolean",
      "required": false
    },
    {
      "name": "scheduled_trigger",
      "label": "Scheduled Trigger",
      "type": "boolean",
      "required": false
    },
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "page_length",
      "label": "Page Length",
      "type": "number",
      "required": false,
      "defaultValue": 20
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
