import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getbulkjobsummaryEndpoint: ApiEndpoint = {
  "id": "getbulkjobsummary",
  "name": "Retrieve the summary of a bulk job",
  "description": "",
  "method": "GET",
  "path": "/bulk-data/bulk-jobs/{id}/summary",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "maxLength": 64,
      "minLength": 64
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
