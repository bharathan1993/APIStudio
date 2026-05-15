import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentrunEndpoint: ApiEndpoint = {
  "id": "put-paymentrun",
  "name": "Update a payment run",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-runs/{paymentRunKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentRunKey",
      "label": "Payment Run Key",
      "type": "string",
      "required": true
    }
  ],
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
