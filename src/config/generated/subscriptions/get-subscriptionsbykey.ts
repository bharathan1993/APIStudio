import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscriptionsbykeyEndpoint: ApiEndpoint = {
  "id": "get-subscriptionsbykey",
  "name": "Retrieve a subscription by key",
  "description": "",
  "method": "GET",
  "path": "/v1/subscriptions/{subscription-key}",
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
    },
    {
      "name": "getInvoiceOwnerDetails",
      "label": "Get Invoice Owner Details",
      "type": "boolean",
      "required": false
    },
    {
      "name": "getSubscriptionOwnerDetails",
      "label": "Get Subscription Owner Details",
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
