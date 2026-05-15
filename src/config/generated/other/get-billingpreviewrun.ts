import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_billingpreviewrunEndpoint: ApiEndpoint = {
  "id": "get-billingpreviewrun",
  "name": "Retrieve a billing preview run",
  "description": "",
  "method": "GET",
  "path": "/v1/billing-preview-runs/{billingPreviewRunId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "billingPreviewRunId",
      "label": "Billing Preview Run Id",
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
