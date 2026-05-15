import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_verifypaymentmethodsEndpoint: ApiEndpoint = {
  "id": "put-verifypaymentmethods",
  "name": "Verify a payment method",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-methods/{payment-method-id}/verify",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "currencyCode",
      "label": "Currency Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "securityCode",
      "label": "Security Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "paymentGatewayName",
      "label": "Payment Gateway Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
