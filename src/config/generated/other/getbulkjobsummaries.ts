import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getbulkjobsummariesEndpoint: ApiEndpoint = {
  "id": "getbulkjobsummaries",
  "name": "List job summaries for bulk jobs",
  "description": "",
  "method": "GET",
  "path": "/bulk-data/bulk-jobs/summaries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "required": false
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
        "Created",
        "Submitted",
        "In Progress",
        "Aborting",
        "Completed",
        "Failed",
        "Aborted",
        "Cancelled",
        "Downloading"
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
