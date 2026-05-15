import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_standaloneinvoiceEndpoint: ApiEndpoint = {
  "id": "post-standaloneinvoice",
  "name": "Create a standalone invoice",
  "description": "",
  "method": "POST",
  "path": "/v1/invoices",
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
      "name": "invoiceNumber",
      "label": "Invoice Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "enum": [
        "Processing",
        "Error",
        "Ignore",
        "Yes",
        "No"
      ],
      "section": "Account Settings"
    },
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentTerm",
      "label": "Payment Term",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "billToContact",
      "label": "Bill To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "maxLength": 20,
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billToContactId",
      "label": "Bill To Contact Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": true,
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
              "name": "accountsReceivableAccountingCode",
              "label": "Accounts Receivable Accounting Code",
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
              "name": "taxItems",
              "label": "Tax Items",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "exemptAmount",
                  "label": "Exempt Amount",
                  "type": "string",
                  "required": false,
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
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": true,
                  "section": "Account Settings"
                },
                {
                  "name": "taxAmount",
                  "label": "Tax Amount",
                  "type": "string",
                  "required": true,
                  "section": "Tax Settings"
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
                  "required": true,
                  "section": "Tax Settings"
                },
                {
                  "name": "taxMode",
                  "label": "Tax Mode",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "TaxInclusive",
                    "TaxExclusive"
                  ],
                  "section": "Tax Settings"
                },
                {
                  "name": "taxRate",
                  "label": "Tax Rate",
                  "type": "string",
                  "required": true,
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
                  "required": true,
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
              "name": "unbilledReceivablesAccountingCode",
              "label": "Unbilled Receivables Accounting Code",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "unitPrice",
              "label": "Unit Price",
              "type": "number",
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
          "section": "Account Settings"
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
          "type": "number",
          "required": false,
          "defaultValue": 1,
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
          "required": true,
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
          "name": "taxItems",
          "label": "Tax Items",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "exemptAmount",
              "label": "Exempt Amount",
              "type": "string",
              "required": false,
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
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": true,
              "section": "Account Settings"
            },
            {
              "name": "taxAmount",
              "label": "Tax Amount",
              "type": "string",
              "required": true,
              "section": "Tax Settings"
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
              "required": true,
              "section": "Tax Settings"
            },
            {
              "name": "taxMode",
              "label": "Tax Mode",
              "type": "string",
              "required": true,
              "enum": [
                "TaxInclusive",
                "TaxExclusive"
              ],
              "section": "Tax Settings"
            },
            {
              "name": "taxRate",
              "label": "Tax Rate",
              "type": "string",
              "required": true,
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
              "required": true,
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
          "type": "number",
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
      "name": "shipToSameAsBillTo",
      "label": "Ship To Same As Bill To",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "soldToSameAsBillTo",
      "label": "Sold To Same As Bill To",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
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
      "name": "comments",
      "label": "Comments",
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
      "name": "customRates",
      "label": "Custom Rates",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "customFxRate",
          "label": "Custom Fx Rate",
          "type": "number",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "rateDate",
          "label": "Rate Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        }
      ],
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
      "name": "sequenceSet",
      "label": "Sequence Set",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "defaultValue": "Draft",
      "enum": [
        "Draft",
        "Posted"
      ],
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
      "name": "shipToContact",
      "label": "Ship To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "maxLength": 20,
          "section": "Additional Fields"
        }
      ],
      "section": "Contact Information"
    },
    {
      "name": "shipToContactId",
      "label": "Ship To Contact Id",
      "type": "string",
      "required": false,
      "section": "Contact Information"
    },
    {
      "name": "soldToContact",
      "label": "Sold To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "maxLength": 20,
          "section": "Additional Fields"
        }
      ],
      "section": "Contact Information"
    },
    {
      "name": "soldToContactId",
      "label": "Sold To Contact Id",
      "type": "string",
      "required": false,
      "section": "Contact Information"
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
