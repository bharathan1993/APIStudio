import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putaccountpaymentmethodcascadingEndpoint: ApiEndpoint = {
  "id": "putaccountpaymentmethodcascading",
  "name": "Configure cascading payment methods for an account",
  "description": "",
  "method": "PUT",
  "path": "/v1/accounts/{account-key}/payment-methods/cascading",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "consent",
      "label": "Consent",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": true,
          "section": "Payment Settings"
        },
        {
          "name": "order",
          "label": "Order",
          "type": "number",
          "required": true,
          "section": "Additional Fields"
        }
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
