import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentscheduleitemEndpoint: ApiEndpoint = {
  "id": "put-paymentscheduleitem",
  "name": "Update a payment schedule item",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-schedule-items/{psi-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "psi-id",
      "label": "Psi Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "runHour",
      "label": "Run Hour",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "scheduledDate",
      "label": "Scheduled Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "linkPayments",
      "label": "Link Payments",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentOption",
      "label": "Payment Option",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "detail",
          "label": "Detail",
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
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "unlinkPayments",
      "label": "Unlink Payments",
      "type": "array",
      "required": false,
      "itemType": "string",
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
