import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentscheduleEndpoint: ApiEndpoint = {
  "id": "put-paymentschedule",
  "name": "Update a payment schedule",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-schedules/{paymentScheduleKey}",
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
      "name": "occurrences",
      "label": "Occurrences",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "string",
      "required": false,
      "enum": [
        "Monthly",
        "Weekly",
        "BiWeekly"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "periodStartDate",
      "label": "Period Start Date",
      "type": "date",
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
