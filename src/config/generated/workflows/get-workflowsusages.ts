import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowsusagesEndpoint: ApiEndpoint = {
  "id": "get-workflowsusages",
  "name": "Retrieve workflow task usage",
  "description": "",
  "method": "GET",
  "path": "/workflows/metrics.json",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": true
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": true
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "string",
      "required": true
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
