import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowstasksEndpoint: ApiEndpoint = {
  "id": "get-workflowstasks",
  "name": "List workflow tasks",
  "description": "",
  "method": "GET",
  "path": "/workflows/tasks",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "id",
      "label": "Id",
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
      "name": "instance",
      "label": "Instance",
      "type": "boolean",
      "required": false
    },
    {
      "name": "action_type",
      "label": "Action Type",
      "type": "string",
      "required": false
    },
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": false
    },
    {
      "name": "object_id",
      "label": "Object Id",
      "type": "string",
      "required": false
    },
    {
      "name": "call_type",
      "label": "Call Type",
      "type": "string",
      "required": false
    },
    {
      "name": "workflow_id",
      "label": "Workflow Id",
      "type": "string",
      "required": false
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "array",
      "required": false,
      "itemType": "string"
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
