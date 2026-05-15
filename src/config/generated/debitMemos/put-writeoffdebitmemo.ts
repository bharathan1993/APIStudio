import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_writeoffdebitmemoEndpoint: ApiEndpoint = {
  "id": "put-writeoffdebitmemo",
  "name": "Write off a debit memo",
  "description": "",
  "method": "PUT",
  "path": "/v1/debit-memos/{debitMemoKey}/write-off",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoKey",
      "label": "Debit Memo Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "revenueImpacting",
      "label": "Revenue Impacting",
      "type": "string",
      "required": false,
      "defaultValue": "Yes",
      "enum": [
        "Yes",
        "No"
      ],
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
          "name": "comment",
          "label": "Comment",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "amountWithoutTax",
          "label": "Amount Without Tax",
          "type": "number",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "debitMemoItemId",
          "label": "Debit Memo Item Id",
          "type": "string",
          "required": false,
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "serviceEndDate",
          "label": "Service End Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "serviceStartDate",
          "label": "Service Start Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "skuName",
          "label": "Sku Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "unitOfMeasure",
          "label": "Unit Of Measure",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "taxationItems",
          "label": "Taxation Items",
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
              "name": "taxationItemId",
              "label": "Taxation Item Id",
              "type": "string",
              "required": false,
              "section": "Tax Settings"
            }
          ],
          "section": "Tax Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Origin__NS",
      "label": "Origin N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Transaction__NS",
      "label": "Transaction N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "taxAutoCalculation",
      "label": "Tax Auto Calculation",
      "type": "boolean",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "nonRevenueWriteOffAccountingCode",
      "label": "Non Revenue Write Off Accounting Code",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "memoDate",
      "label": "Memo Date",
      "type": "date",
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
