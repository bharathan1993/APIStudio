import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentscheduleEndpoint: ApiEndpoint = {
  "id": "post-paymentschedule",
  "name": "Create a payment schedule",
  "description": "",
  "method": "POST",
  "path": "/v1/payment-schedules",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "paymentScheduleNumber",
      "label": "Payment Schedule Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
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
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "billingDocument",
          "label": "Billing Document",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "number",
              "label": "Number",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": true,
              "enum": [
                "Invoice",
                "DebitMemo"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
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
          "required": false,
          "section": "Additional Fields"
        }
      ],
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
      "name": "runHour",
      "label": "Run Hour",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "standalone",
      "label": "Standalone",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "totalAmount",
      "label": "Total Amount",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "billingDocument",
      "label": "Billing Document",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "number",
          "label": "Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "defaultValue": "Invoice",
          "enum": [
            "Invoice",
            "DebitMemo"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billingDocuments",
      "label": "Billing Documents",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "number",
          "label": "Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "enum": [
            "Invoice",
            "DebitMemo"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
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
      "name": "prepayment",
      "label": "Prepayment",
      "type": "boolean",
      "required": false,
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
