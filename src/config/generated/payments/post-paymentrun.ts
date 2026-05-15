import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentrunEndpoint: ApiEndpoint = {
  "id": "post-paymentrun",
  "name": "Create a payment run",
  "description": "",
  "method": "POST",
  "path": "/v1/payment-runs",
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
      "name": "batch",
      "label": "Batch",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "autoApplyCreditMemo",
      "label": "Auto Apply Credit Memo",
      "type": "boolean",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "autoApplyUnappliedPayment",
      "label": "Auto Apply Unapplied Payment",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "collectPayment",
      "label": "Collect Payment",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "consolidatedPayment",
      "label": "Consolidated Payment",
      "type": "boolean",
      "required": false,
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
      "name": "processPaymentWithClosedPM",
      "label": "Process Payment With Closed P M",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "useCustomPaymentMethods",
      "label": "Use Custom Payment Methods",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billingRunId",
      "label": "Billing Run Id",
      "type": "string",
      "required": false,
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
      "name": "data",
      "label": "Data",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
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
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "comment",
          "label": "Comment",
          "type": "string",
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
          "name": "dataItems",
          "label": "Data Items",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "documentItemId",
              "label": "Document Item Id",
              "type": "string",
              "required": false,
              "section": "Invoice & Document Settings"
            },
            {
              "name": "taxItemId",
              "label": "Tax Item Id",
              "type": "string",
              "required": false,
              "section": "Tax Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "documentId",
          "label": "Document Id",
          "type": "string",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "documentNumber",
          "label": "Document Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "documentType",
          "label": "Document Type",
          "type": "string",
          "required": false,
          "enum": [
            "Invoice",
            "DebitMemo"
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
          "name": "standalone",
          "label": "Standalone",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "runDate",
      "label": "Run Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
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
