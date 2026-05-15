import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const upsertpaymentprofilesEndpoint: ApiEndpoint = {
  "id": "upsertpaymentprofiles",
  "name": "Create or update payment profiles in bulk",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-profile",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "bulkPaymentOptionItems",
      "label": "Bulk Payment Option Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "subscriptionId",
          "label": "Subscription Id",
          "type": "string",
          "required": false,
          "section": "Subscription Settings"
        },
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "paymentGatewayId",
          "label": "Payment Gateway Id",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        }
      ],
      "section": "Payment Settings"
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
