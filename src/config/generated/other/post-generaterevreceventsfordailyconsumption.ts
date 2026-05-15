import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_generaterevreceventsfordailyconsumptionEndpoint: ApiEndpoint = {
  "id": "post-generaterevreceventsfordailyconsumption",
  "name": "Regenerate revenue recognition events transactions for Daily Consumption",
  "description": "",
  "method": "POST",
  "path": "/v1/uno-regenerate/rev-rec-events/daily-consumption",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "forRevenueRecollect",
      "label": "For Revenue Recollect",
      "type": "boolean",
      "required": false
    }
  ],
  "bodyFields": [
    {
      "name": "chargeSegmentNumber",
      "label": "Charge Segment Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "fundId",
      "label": "Fund Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "originalChargeId",
      "label": "Original Charge Id",
      "type": "string",
      "required": true,
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
