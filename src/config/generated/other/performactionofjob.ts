import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const performactionofjobEndpoint: ApiEndpoint = {
  "id": "performactionofjob",
  "name": "Perform an action on a test environment job",
  "description": "",
  "method": "POST",
  "path": "/test-environments/{id}/jobs/{jobId}/actions",
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
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "jobAction",
      "label": "Job Action",
      "type": "string",
      "required": true,
      "enum": [
        "CANCEL"
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
