import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const create_adjustmentEndpoint: ApiEndpoint = {
  "id": "create-adjustment",
  "name": "Create a delivery adjustment",
  "description": "",
  "method": "POST",
  "path": "/v1/adjustments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "chargeNumbers",
      "label": "Charge Numbers",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Account Settings"
    },
    {
      "name": "deferredRevenueAccountingCode",
      "label": "Deferred Revenue Accounting Code",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "recognizedRevenueAccountingCode",
      "label": "Recognized Revenue Accounting Code",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "revenueRecognitionRuleName",
      "label": "Revenue Recognition Rule Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "exclusion",
      "label": "Exclusion",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "chargeNumbers",
          "label": "Charge Numbers",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Account Settings"
        },
        {
          "name": "deliveryDate",
          "label": "Delivery Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "enum": [
        "DeliveryCredit"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "creditMemoCustomFields",
      "label": "Credit Memo Custom Fields",
      "type": "object",
      "required": false,
      "section": "Credit & Settlement Settings"
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
