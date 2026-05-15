import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createtestenvironmentjobEndpoint: ApiEndpoint = {
  "id": "createtestenvironmentjob",
  "name": "Create a test environment job",
  "description": "",
  "method": "POST",
  "path": "/test-environments/{id}/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "jobType",
      "label": "Job Type",
      "type": "string",
      "required": true,
      "enum": [
        "REFRESH"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "scheduledRefreshTime",
      "label": "Scheduled Refresh Time",
      "type": "date",
      "required": false,
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
