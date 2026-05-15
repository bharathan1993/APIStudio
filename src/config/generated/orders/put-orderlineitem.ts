import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_orderlineitemEndpoint: ApiEndpoint = {
  "id": "put-orderlineitem",
  "name": "Update an order line item",
  "description": "",
  "method": "PUT",
  "path": "/v1/order-line-items/{itemId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "itemId",
      "label": "Item Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "UOM",
      "label": "U O M",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "amountPerUnit",
      "label": "Amount Per Unit",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "inlineDiscountPerUnit",
      "label": "Inline Discount Per Unit",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "inlineDiscountType",
      "label": "Inline Discount Type",
      "type": "string",
      "required": false,
      "enum": [
        "Percentage",
        "FixedAmount",
        "None"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "isAllocationEligible",
      "label": "Is Allocation Eligible",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "itemState",
      "label": "Item State",
      "type": "string",
      "required": false,
      "enum": [
        "Executing",
        "Booked",
        "SentToBilling",
        "Complete",
        "Canceled"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "itemType",
      "label": "Item Type",
      "type": "string",
      "required": false,
      "enum": [
        "Product",
        "Fee",
        "Services"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "listPricePerUnit",
      "label": "List Price Per Unit",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "productCode",
      "label": "Product Code",
      "type": "string",
      "required": false,
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
      "name": "revenueRecognitionRule",
      "label": "Revenue Recognition Rule",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "revenueRecognitionTiming",
      "label": "Revenue Recognition Timing",
      "type": "string",
      "required": false,
      "enum": [
        "Upon Billing Document Posting Date",
        "Upon Order Activation Date"
      ],
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "revenueAmortizationMethod",
      "label": "Revenue Amortization Method",
      "type": "string",
      "required": false,
      "enum": [
        "Immediate",
        "Ratable Using Start And End Dates"
      ],
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "sequenceSetId",
      "label": "Sequence Set Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "transactionEndDate",
      "label": "Transaction End Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "transactionStartDate",
      "label": "Transaction Start Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
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
      "name": "excludeItemBillingFromRevenueAccounting",
      "label": "Exclude Item Billing From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "excludeItemBookingFromRevenueAccounting",
      "label": "Exclude Item Booking From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "itemName",
      "label": "Item Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "ownerAccountNumber",
      "label": "Owner Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
      "name": "relatedSubscriptionNumber",
      "label": "Related Subscription Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "invoiceGroupNumber",
      "label": "Invoice Group Number",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "unbilledReceivablesAccountingCode",
      "label": "Unbilled Receivables Accounting Code",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "billTargetDate",
      "label": "Bill Target Date",
      "type": "date",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billTo",
      "label": "Bill To",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billingRule",
      "label": "Billing Rule",
      "type": "string",
      "required": false,
      "defaultValue": "TriggerWithoutFulfillment",
      "enum": [
        "TriggerWithoutFulfillment",
        "TriggerAsFulfillmentOccurs"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "isUnbilled",
      "label": "Is Unbilled",
      "type": "boolean",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceTemplateId",
      "label": "Invoice Template Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "paymentTerm",
      "label": "Payment Term",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "shipTo",
      "label": "Ship To",
      "type": "string",
      "required": false,
      "section": "Contact Information"
    },
    {
      "name": "soldTo",
      "label": "Sold To",
      "type": "string",
      "required": false,
      "section": "Contact Information"
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
