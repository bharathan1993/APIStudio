import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createrevreceventsEndpoint: ApiEndpoint = {
  "id": "post-createrevrecevents",
  "name": "Regenerate revenue recognition events transactions for Delivery Schedule",
  "description": "",
  "method": "POST",
  "path": "/v1/uno-regenerate/rev-rec-events",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": false
    },
    {
      "name": "mode",
      "label": "Mode",
      "type": "string",
      "required": false,
      "defaultValue": "Incremental",
      "enum": [
        "Incremental",
        "Full"
      ]
    },
    {
      "name": "forRevenueRecollect",
      "label": "For Revenue Recollect",
      "type": "boolean",
      "required": false
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
