import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deletesummarystatementEndpoint: ApiEndpoint = {
  "id": "deletesummarystatement",
  "name": "Delete a summary statement",
  "description": "",
  "method": "DELETE",
  "path": "/v1/summary-statements/{summaryStatementKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "summaryStatementKey",
      "label": "Summary Statement Key",
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
