import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_additemstocustompaymentscheduleEndpoint: ApiEndpoint = {
  "id": "post-additemstocustompaymentschedule",
  "name": "Add payment schedule items to a custom payment schedule",
  "description": "",
  "method": "POST",
  "path": "/v1/payment-schedules/{paymentScheduleKey}/items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentScheduleKey",
      "label": "Payment Schedule Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "items",
      "label": "Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
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
          "name": "runHour",
          "label": "Run Hour",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "scheduledDate",
          "label": "Scheduled Date",
          "type": "date",
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
