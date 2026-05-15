import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updatecreditmemoinvokesyncstatusEndpoint: ApiEndpoint = {
  "id": "updatecreditmemoinvokesyncstatus",
  "name": "Sync the e-Invoice status of a credit memo",
  "description": "",
  "method": "PUT",
  "path": "/v1/credit-memos/{creditMemoKey}/e-invoice/sync-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "shouldIncludeAcknowledged",
      "label": "Should Include Acknowledged",
      "type": "boolean",
      "required": false,
      "defaultValue": false
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
