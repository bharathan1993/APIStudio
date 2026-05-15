import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateinvoiceEndpoint: ApiEndpoint = {
  "id": "put-updateinvoice",
  "name": "Update an invoice",
  "description": "",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "comments",
      "label": "Comments",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "date",
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
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceItems",
      "label": "Invoice Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountingCode",
          "label": "Accounting Code",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "adjustmentLiabilityAccountingCode",
          "label": "Adjustment Liability Accounting Code",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "adjustmentRevenueAccountingCode",
          "label": "Adjustment Revenue Accounting Code",
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
          "name": "bookingReference",
          "label": "Booking Reference",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "chargeDate",
          "label": "Charge Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "chargeName",
          "label": "Charge Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "contractAssetAccountingCode",
          "label": "Contract Asset Accounting Code",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "contractLiabilityAccountingCode",
          "label": "Contract Liability Accounting Code",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "contractRecognizedRevenueAccountingCode",
          "label": "Contract Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
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
          "name": "delete",
          "label": "Delete",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "discountItems",
          "label": "Discount Items",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "accountingCode",
              "label": "Accounting Code",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "adjustmentLiabilityAccountingCode",
              "label": "Adjustment Liability Accounting Code",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "adjustmentRevenueAccountingCode",
              "label": "Adjustment Revenue Accounting Code",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "amount",
              "label": "Amount",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "bookingReference",
              "label": "Booking Reference",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "chargeDate",
              "label": "Charge Date",
              "type": "date",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "chargeName",
              "label": "Charge Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "contractAssetAccountingCode",
              "label": "Contract Asset Accounting Code",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "contractLiabilityAccountingCode",
              "label": "Contract Liability Accounting Code",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "contractRecognizedRevenueAccountingCode",
              "label": "Contract Recognized Revenue Accounting Code",
              "type": "string",
              "required": false,
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
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "itemType",
              "label": "Item Type",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "purchaseOrderNumber",
              "label": "Purchase Order Number",
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
              "name": "revRecCode",
              "label": "Rev Rec Code",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "revRecTriggerCondition",
              "label": "Rev Rec Trigger Condition",
              "type": "string",
              "required": false,
              "enum": [
                "ContractEffectiveDate",
                "ServiceActivationDate",
                "CustomerAcceptanceDate"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "revenueRecognitionRuleName",
              "label": "Revenue Recognition Rule Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "sku",
              "label": "Sku",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "unbilledReceivablesAccountingCode",
              "label": "Unbilled Receivables Accounting Code",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "unitPrice",
              "label": "Unit Price",
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
              "name": "SyncDate__NS",
              "label": "Sync Date N S",
              "type": "string",
              "required": false,
              "maxLength": 255,
              "section": "Additional Fields"
            }
          ],
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
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "itemType",
          "label": "Item Type",
          "type": "string",
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
          "name": "purchaseOrderNumber",
          "label": "Purchase Order Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "recognizedRevenueAccountingCode",
          "label": "Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "revRecCode",
          "label": "Rev Rec Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "revRecTriggerCondition",
          "label": "Rev Rec Trigger Condition",
          "type": "string",
          "required": false,
          "enum": [
            "ContractEffectiveDate",
            "ServiceActivationDate",
            "CustomerAcceptanceDate"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "revenueRecognitionRuleName",
          "label": "Revenue Recognition Rule Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
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
          "name": "sku",
          "label": "Sku",
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
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "enum": [
            "TaxInclusive",
            "TaxExclusive"
          ],
          "section": "Tax Settings"
        },
        {
          "name": "unbilledReceivablesAccountingCode",
          "label": "Unbilled Receivables Accounting Code",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "unitPrice",
          "label": "Unit Price",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "uom",
          "label": "Uom",
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
          "name": "SyncDate__NS",
          "label": "Sync Date N S",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "enum": [
        "Processing",
        "Yes",
        "Error",
        "Ignore"
      ],
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
