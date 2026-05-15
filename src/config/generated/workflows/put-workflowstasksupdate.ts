import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_workflowstasksupdateEndpoint: ApiEndpoint = {
  "id": "put-workflowstasksupdate",
  "name": "Update workflow tasks",
  "description": "",
  "method": "PUT",
  "path": "/workflows/tasks/batch_update",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "data",
      "label": "Data",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "action_type",
          "label": "Action Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "call_type",
          "label": "Call Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "concurrent_limit",
          "label": "Concurrent Limit",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "number",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "object",
          "label": "Object",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "object_id",
          "label": "Object Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "enum": [
            "Queued",
            "Processing",
            "Pending",
            "Success",
            "Stopped",
            "Error"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "tags",
          "label": "Tags",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "workflow_id",
          "label": "Workflow Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
