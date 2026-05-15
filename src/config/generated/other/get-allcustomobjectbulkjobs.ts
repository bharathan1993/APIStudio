import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allcustomobjectbulkjobsEndpoint: ApiEndpoint = {
  "id": "get-allcustomobjectbulkjobs",
  "name": "List all custom object bulk jobs",
  "description": "",
  "method": "GET",
  "path": "/objects/jobs",
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
      "defaultValue": 25
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
      "required": false
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "enum": [
        "pending",
        "accepted",
        "in_progress",
        "completed",
        "failed",
        "cancelled"
      ]
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
