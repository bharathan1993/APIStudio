import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatecreditmemosEndpoint: ApiEndpoint = {
  "id": "put-updatecreditmemos",
  "name": "Update credit memos",
  "description": "",
  "method": "PUT",
  "path": "/v1/credit-memos/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "memos",
      "label": "Memos",
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
          "name": "autoApplyUponPosting",
          "label": "Auto Apply Upon Posting",
          "type": "boolean",
          "required": false,
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "comment",
          "label": "Comment",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "effectiveDate",
          "label": "Effective Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "excludeFromAutoApplyRules",
          "label": "Exclude From Auto Apply Rules",
          "type": "boolean",
          "required": false,
          "section": "Credit & Settlement Settings"
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
              "name": "comment",
              "label": "Comment",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "delete",
              "label": "Delete",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "excludeItemBillingFromRevenueAccounting",
              "label": "Exclude Item Billing From Revenue Accounting",
              "type": "boolean",
              "required": false,
              "defaultValue": false,
              "section": "Account Settings"
            },
            {
              "name": "financeInformation",
              "label": "Finance Information",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "deferredRevenueAccountingCode",
                  "label": "Deferred Revenue Accounting Code",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "onAccountAccountingCode",
                  "label": "On Account Accounting Code",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "recognizedRevenueAccountingCode",
                  "label": "Recognized Revenue Accounting Code",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "revenueRecognitionRuleName",
                  "label": "Revenue Recognition Rule Name",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "maxLength": 32,
              "minLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeId",
              "label": "Product Rate Plan Charge Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
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
              "name": "taxItems",
              "label": "Tax Items",
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
                  "name": "financeInformation",
                  "label": "Finance Information",
                  "type": "object",
                  "required": false,
                  "fields": [
                    {
                      "name": "onAccountAccountingCode",
                      "label": "On Account Accounting Code",
                      "type": "string",
                      "required": false,
                      "maxLength": 100,
                      "section": "Account Settings"
                    },
                    {
                      "name": "salesTaxPayableAccountingCode",
                      "label": "Sales Tax Payable Accounting Code",
                      "type": "string",
                      "required": false,
                      "maxLength": 100,
                      "section": "Account Settings"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "jurisdiction",
                  "label": "Jurisdiction",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "locationCode",
                  "label": "Location Code",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "taxCode",
                  "label": "Tax Code",
                  "type": "string",
                  "required": false,
                  "section": "Tax Settings"
                },
                {
                  "name": "taxCodeDescription",
                  "label": "Tax Code Description",
                  "type": "string",
                  "required": false,
                  "section": "Tax Settings"
                },
                {
                  "name": "taxDate",
                  "label": "Tax Date",
                  "type": "date",
                  "required": false,
                  "section": "Tax Settings"
                },
                {
                  "name": "taxExemptAmount",
                  "label": "Tax Exempt Amount",
                  "type": "number",
                  "required": false,
                  "section": "Tax Settings"
                },
                {
                  "name": "taxName",
                  "label": "Tax Name",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "taxRate",
                  "label": "Tax Rate",
                  "type": "number",
                  "required": false,
                  "section": "Tax Settings"
                },
                {
                  "name": "taxRateDescription",
                  "label": "Tax Rate Description",
                  "type": "string",
                  "required": false,
                  "section": "Tax Settings"
                },
                {
                  "name": "taxRateType",
                  "label": "Tax Rate Type",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "Percentage",
                    "FlatFee"
                  ],
                  "section": "Tax Settings"
                }
              ],
              "section": "Tax Settings"
            },
            {
              "name": "unitOfMeasure",
              "label": "Unit Of Measure",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
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
          "name": "transferredToAccounting",
          "label": "Transferred To Accounting",
          "type": "string",
          "required": false,
          "enum": [
            "Processing",
            "Yes",
            "No",
            "Error",
            "Ignore"
          ],
          "section": "Account Settings"
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
        }
      ],
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
