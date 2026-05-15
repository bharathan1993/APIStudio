import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscriptionsbykeyandversionEndpoint: ApiEndpoint = {
  "id": "get-subscriptionsbykeyandversion",
  "name": "Retrieve a subscription by key and version",
  "description": "",
  "method": "GET",
  "path": "/v1/subscriptions/{subscription-key}/versions/{version}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "charge-detail",
      "label": "Charge Detail",
      "type": "string",
      "required": false
    },
    {
      "name": "as-of-date",
      "label": "As Of Date",
      "type": "string",
      "required": false
    },
    {
      "name": "exclude-rate-plans-with-no-charges",
      "label": "Exclude Rate Plans With No Charges",
      "type": "boolean",
      "required": false
    },
    {
      "name": "getDetailedMetrics",
      "label": "Get Detailed Metrics",
      "type": "boolean",
      "required": false,
      "defaultValue": false
    },
    {
      "name": "asOfDay",
      "label": "As Of Day",
      "type": "string",
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
