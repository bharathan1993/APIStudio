import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_previeworderEndpoint: ApiEndpoint = {
  "id": "post-previeworder",
  "name": "Preview an order",
  "description": "",
  "method": "POST",
  "path": "/v1/orders/preview",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "summarizeInvoiceItem",
      "label": "Summarize Invoice Item",
      "type": "boolean",
      "required": false,
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": false,
      "defaultValue": "NewSales",
      "enum": [
        "NewSales",
        "Return"
      ],
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
      "name": "orderDate",
      "label": "Order Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "orderLineItems",
      "label": "Order Line Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "UOM",
          "label": "U O M",
          "type": "string",
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
          "name": "amountPerUnit",
          "label": "Amount Per Unit",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
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
          "name": "currency",
          "label": "Currency",
          "type": "string",
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
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "excludeItemBookingFromRevenueAccounting",
          "label": "Exclude Item Booking From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Account Settings"
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
          "name": "isUnbilled",
          "label": "Is Unbilled",
          "type": "boolean",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "itemCategory",
          "label": "Item Category",
          "type": "string",
          "required": false,
          "defaultValue": "Sales",
          "enum": [
            "Sales",
            "Return"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "itemName",
          "label": "Item Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "itemNumber",
          "label": "Item Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
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
            "Cancelled"
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
          "name": "originalOrderLineItemNumber",
          "label": "Original Order Line Item Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "originalOrderNumber",
          "label": "Original Order Number",
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
          "name": "productCode",
          "label": "Product Code",
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
          "name": "relatedSubscriptionNumber",
          "label": "Related Subscription Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
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
          "name": "invoiceGroupNumber",
          "label": "Invoice Group Number",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "sequenceSetId",
          "label": "Sequence Set Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "paymentTerm",
          "label": "Payment Term",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "invoiceTemplateId",
          "label": "Invoice Template Id",
          "type": "string",
          "required": false,
          "section": "Invoice & Document Settings"
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
          "name": "unbilledReceivablesAccountingCode",
          "label": "Unbilled Receivables Accounting Code",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "previewOptions",
      "label": "Preview Options",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "previewNumberOfPeriods",
          "label": "Preview Number Of Periods",
          "type": "number",
          "required": false,
          "minLength": 1,
          "section": "Account Settings"
        },
        {
          "name": "previewThruType",
          "label": "Preview Thru Type",
          "type": "string",
          "required": false,
          "enum": [
            "SpecificDate",
            "TermEnd",
            "NumberOfPeriods"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "previewTypes",
          "label": "Preview Types",
          "type": "array",
          "required": false,
          "itemType": "string",
          "itemEnum": [
            "ChargeMetrics",
            "BillingDocs",
            "OrderDeltaMetrics",
            "OrderMetrics",
            "RampMetrics",
            "RampDeltaMetrics"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "skipTax",
          "label": "Skip Tax",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Tax Settings"
        },
        {
          "name": "specificPreviewThruDate",
          "label": "Specific Preview Thru Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "validateScheduledOrders",
          "label": "Validate Scheduled Orders",
          "type": "boolean",
          "required": false,
          "defaultValue": true,
          "section": "Additional Fields"
        },
        {
          "name": "chargeTypeToExclude",
          "label": "Charge Type To Exclude",
          "type": "array",
          "required": false,
          "itemType": "string",
          "itemEnum": [
            "OneTime",
            "Recurring",
            "Usage"
          ],
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
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "existingAccountId",
      "label": "Existing Account Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "existingAccountNumber",
      "label": "Existing Account Number",
      "type": "string",
      "required": false,
      "maxLength": 70,
      "section": "Account Settings"
    },
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "previewAccountInfo",
      "label": "Preview Account Info",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "billCycleDay",
          "label": "Bill Cycle Day",
          "type": "number",
          "required": true,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "maxLength": 3,
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
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Tax Settings"
            }
          ],
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
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Tax Settings"
            }
          ],
          "section": "Contact Information"
        },
        {
          "name": "taxInfo",
          "label": "Tax Info",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "VATId",
              "label": "V A T Id",
              "type": "string",
              "required": false,
              "maxLength": 25,
              "section": "Tax Settings"
            },
            {
              "name": "companyCode",
              "label": "Company Code",
              "type": "string",
              "required": false,
              "maxLength": 50,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateId",
              "label": "Exempt Certificate Id",
              "type": "string",
              "required": false,
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateType",
              "label": "Exempt Certificate Type",
              "type": "string",
              "required": false,
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptDescription",
              "label": "Exempt Description",
              "type": "string",
              "required": false,
              "maxLength": 500,
              "section": "Additional Fields"
            },
            {
              "name": "exemptEffectiveDate",
              "label": "Exempt Effective Date",
              "type": "date",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "exemptExpirationDate",
              "label": "Exempt Expiration Date",
              "type": "date",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "exemptIssuingJurisdiction",
              "label": "Exempt Issuing Jurisdiction",
              "type": "string",
              "required": false,
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptStatus",
              "label": "Exempt Status",
              "type": "string",
              "required": false,
              "defaultValue": "No",
              "enum": [
                "No",
                "Yes",
                "PendingVerification"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Tax Settings"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "subscriptions",
      "label": "Subscriptions",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "textarea",
          "required": false,
          "maxLength": 1000,
          "section": "Additional Fields"
        },
        {
          "name": "orderActions",
          "label": "Order Actions",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "addProduct",
              "label": "Add Product",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "chargeOverrides",
                  "label": "Charge Overrides",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "accountReceivableAccountingCode",
                      "label": "Account Receivable Accounting Code",
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
                      "name": "billing",
                      "label": "Billing",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "billCycleDay",
                          "label": "Bill Cycle Day",
                          "type": "number",
                          "required": false,
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billCycleType",
                          "label": "Bill Cycle Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "DefaultFromCustomer",
                            "SpecificDayofMonth",
                            "SubscriptionStartDay",
                            "ChargeTriggerDay",
                            "SpecificDayofWeek"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billingPeriod",
                          "label": "Billing Period",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Month",
                            "Quarter",
                            "Semi_Annual",
                            "Annual",
                            "Eighteen_Months",
                            "Two_Years",
                            "Three_Years",
                            "Five_Years",
                            "Specific_Months",
                            "Subscription_Term",
                            "Week",
                            "Specific_Weeks",
                            "Specific_Days"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billingPeriodAlignment",
                          "label": "Billing Period Alignment",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "AlignToCharge",
                            "AlignToSubscriptionStart",
                            "AlignToTermStart"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billingTiming",
                          "label": "Billing Timing",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "IN_ADVANCE",
                            "IN_ARREARS"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "specificBillingPeriod",
                          "label": "Specific Billing Period",
                          "type": "number",
                          "required": false,
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "weeklyBillCycleDay",
                          "label": "Weekly Bill Cycle Day",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                          ],
                          "section": "Invoice & Document Settings"
                        }
                      ],
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "chargeFunction",
                      "label": "Charge Function",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "CommitmentTrueUp",
                        "CreditCommitment"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "commitmentType",
                      "label": "Commitment Type",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "CURRENCY"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "creditOption",
                      "label": "Credit Option",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "TimeBased",
                        "ConsumptionBased",
                        "FullCreditBack"
                      ],
                      "section": "Credit & Settlement Settings"
                    },
                    {
                      "name": "chargeModel",
                      "label": "Charge Model",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "chargeNumber",
                      "label": "Charge Number",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "chargeType",
                      "label": "Charge Type",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
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
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "deferredRevenueAccountingCode",
                      "label": "Deferred Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "drawdownRate",
                      "label": "Drawdown Rate",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "endDate",
                      "label": "End Date",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "endDateCondition",
                          "label": "End Date Condition",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Subscription_End",
                            "Fixed_Period",
                            "Specific_End_Date"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDatePolicy",
                          "label": "End Date Policy",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "AlignToApplyToCharge",
                            "SpecificEndDate",
                            "FixedPeriod"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "specificEndDate",
                          "label": "Specific End Date",
                          "type": "date",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upToPeriods",
                          "label": "Up To Periods",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upToPeriodsType",
                          "label": "Up To Periods Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Billing_Periods",
                            "Days",
                            "Weeks",
                            "Months",
                            "Years"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "estimatedStartDate",
                      "label": "Estimated Start Date",
                      "type": "date",
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
                      "name": "excludeItemBookingFromRevenueAccounting",
                      "label": "Exclude Item Booking From Revenue Accounting",
                      "type": "boolean",
                      "required": false,
                      "defaultValue": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "isAllocationEligible",
                      "label": "Is Allocation Eligible",
                      "type": "boolean",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isRollover",
                      "label": "Is Rollover",
                      "type": "boolean",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isUnbilled",
                      "label": "Is Unbilled",
                      "type": "boolean",
                      "required": false,
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "name",
                      "label": "Name",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "negotiatedPriceTable",
                      "label": "Negotiated Price Table",
                      "type": "array",
                      "required": false,
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "items",
                          "label": "Items",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pobPolicy",
                      "label": "Pob Policy",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "prepaidQuantity",
                      "label": "Prepaid Quantity",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricing",
                      "label": "Pricing",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "chargeModelData",
                          "label": "Charge Model Data",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "chargeModelConfiguration",
                              "label": "Charge Model Configuration",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "customFieldPerUnitRate",
                                  "label": "Custom Field Per Unit Rate",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "customFieldTotalAmount",
                                  "label": "Custom Field Total Amount",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "formula",
                                  "label": "Formula",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
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
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "discount",
                          "label": "Discount",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "applyDiscountTo",
                              "label": "Apply Discount To",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "ONETIME",
                                "RECURRING",
                                "USAGE",
                                "ONETIMERECURRING",
                                "ONETIMEUSAGE",
                                "RECURRINGUSAGE",
                                "ONETIMERECURRINGUSAGE"
                              ],
                              "section": "Credit & Settlement Settings"
                            },
                            {
                              "name": "applyToBillingPeriodPartially",
                              "label": "Apply To Billing Period Partially",
                              "type": "boolean",
                              "required": false,
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "discountAmount",
                              "label": "Discount Amount",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountApplyDetails",
                              "label": "Discount Apply Details",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "productRatePlanChargeId",
                                  "label": "Product Rate Plan Charge Id",
                                  "type": "string",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "productRatePlanId",
                                  "label": "Product Rate Plan Id",
                                  "type": "string",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Credit & Settlement Settings"
                            },
                            {
                              "name": "discountClass",
                              "label": "Discount Class",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountLevel",
                              "label": "Discount Level",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "rateplan",
                                "subscription",
                                "account"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountPercentage",
                              "label": "Discount Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalDiscountAmount",
                              "label": "Original Discount Amount",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalDiscountPercentage",
                              "label": "Original Discount Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListDiscountAmount",
                              "label": "Original List Discount Amount",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListDiscountPercentage",
                              "label": "Original List Discount Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimeFlatFee",
                          "label": "One Time Flat Fee",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": true,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimePerUnit",
                          "label": "One Time Per Unit",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
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
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimeTiered",
                          "label": "One Time Tiered",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimeVolume",
                          "label": "One Time Volume",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringCalculated",
                          "label": "Recurring Calculated",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "clearingExistingMinimumAmount",
                              "label": "Clearing Existing Minimum Amount",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "clearingExistingMaximumAmount",
                              "label": "Clearing Existing Maximum Amount",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "eligibleAccountConditions",
                              "label": "Eligible Account Conditions",
                              "type": "object",
                              "required": false,
                              "section": "Account Settings"
                            },
                            {
                              "name": "eligibleChargeConditions",
                              "label": "Eligible Charge Conditions",
                              "type": "object",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "minimumAmount",
                              "label": "Minimum Amount",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "maximumAmount",
                              "label": "Maximum Amount",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "percentage",
                              "label": "Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringDeliveryBased",
                          "label": "Recurring Delivery Based",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "deliverySchedule",
                              "label": "Delivery Schedule",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "frequency",
                                  "label": "Frequency",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Weekly"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "friday",
                                  "label": "Friday",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "monday",
                                  "label": "Monday",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "saturday",
                                  "label": "Saturday",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "sunday",
                                  "label": "Sunday",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "thursday",
                                  "label": "Thursday",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tuesday",
                                  "label": "Tuesday",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "wednesday",
                                  "label": "Wednesday",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringFlatFee",
                          "label": "Recurring Flat Fee",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringPerUnit",
                          "label": "Recurring Per Unit",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
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
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringTiered",
                          "label": "Recurring Tiered",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
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
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringVolume",
                          "label": "Recurring Volume",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
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
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricingAttributes",
                      "label": "Pricing Attributes",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productCategory",
                      "label": "Product Category",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productClass",
                      "label": "Product Class",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productFamily",
                      "label": "Product Family",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productLine",
                      "label": "Product Line",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeId",
                      "label": "Product Rate Plan Charge Id",
                      "type": "string",
                      "required": true,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeNumber",
                      "label": "Product Rate Plan Charge Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "prorationOption",
                      "label": "Proration Option",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "NoProration",
                        "TimeBasedProration",
                        "DefaultFromTenantSetting",
                        "ChargeFullPeriod",
                        "CustomizeProrationOptionOverrides"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "ratingPropertiesOverride",
                      "label": "Rating Properties Override",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "isProratePartialMonth",
                          "label": "Is Prorate Partial Month",
                          "type": "boolean",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prorationUnit",
                          "label": "Proration Unit",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "ProrateByDay",
                            "ProrateByMonthFirst"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "daysInMonth",
                          "label": "Days In Month",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "UseActualDays",
                            "Assume30Days",
                            "Assume30DaysStrict"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
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
                      "maxLength": 70,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "revRecTriggerCondition",
                      "label": "Rev Rec Trigger Condition",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "Contract Effective Date",
                        "Service Activation Date",
                        "Customer Acceptance Date"
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
                      "name": "rolloverApply",
                      "label": "Rollover Apply",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "ApplyFirst",
                        "ApplyLast"
                      ],
                      "section": "Credit & Settlement Settings"
                    },
                    {
                      "name": "rolloverPeriodLength",
                      "label": "Rollover Period Length",
                      "type": "number",
                      "required": false,
                      "defaultValue": null,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "rolloverPeriods",
                      "label": "Rollover Periods",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "startDate",
                      "label": "Start Date",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "specificTriggerDate",
                          "label": "Specific Trigger Date",
                          "type": "date",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "triggerEvent",
                          "label": "Trigger Event",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "ContractEffective",
                            "ServiceActivation",
                            "CustomerAcceptance",
                            "SpecificDate"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "unBilledReceivablesAccountingCode",
                      "label": "Un Billed Receivables Accounting Code",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "upsellOriginChargeNumber",
                      "label": "Upsell Origin Charge Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "validityPeriodType",
                      "label": "Validity Period Type",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "SUBSCRIPTION_TERM",
                        "ANNUAL",
                        "SEMI_ANNUAL",
                        "QUARTER",
                        "MONTH"
                      ],
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
                      "name": "taxable",
                      "label": "Taxable",
                      "type": "boolean",
                      "required": false,
                      "section": "Tax Settings"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingFeatures",
                  "label": "Clearing Existing Features",
                  "type": "boolean",
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
                  "name": "isAddingSubsetCharges",
                  "label": "Is Adding Subset Charges",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "isFromExternalCatalog",
                  "label": "Is From External Catalog",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanId",
                  "label": "Product Rate Plan Id",
                  "type": "string",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanName",
                  "label": "Rate Plan Name",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "subscriptionProductFeatures",
                  "label": "Subscription Product Features",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "featureId",
                      "label": "Feature Id",
                      "type": "string",
                      "required": true,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Subscription Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "maxLength": 50,
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "maxLength": 50,
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "cancelSubscription",
              "label": "Cancel Subscription",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "cancellationEffectiveDate",
                  "label": "Cancellation Effective Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "cancellationPolicy",
                  "label": "Cancellation Policy",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "EndOfCurrentTerm",
                    "EndOfLastInvoicePeriod",
                    "SpecificDate"
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Subscription Settings"
            },
            {
              "name": "changePlan",
              "label": "Change Plan",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "effectivePolicy",
                  "label": "Effective Policy",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "EffectiveImmediately",
                    "EffectiveEndOfBillingPeriod",
                    "SpecificDate"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "externalCatalogPlanId",
                  "label": "External Catalog Plan Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "newProductRatePlan",
                  "label": "New Product Rate Plan",
                  "type": "object",
                  "required": true,
                  "fields": [
                    {
                      "name": "chargeOverrides",
                      "label": "Charge Overrides",
                      "type": "array",
                      "required": false,
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "accountReceivableAccountingCode",
                          "label": "Account Receivable Accounting Code",
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
                          "name": "billing",
                          "label": "Billing",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "billCycleDay",
                              "label": "Bill Cycle Day",
                              "type": "number",
                              "required": false,
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billCycleType",
                              "label": "Bill Cycle Type",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "DefaultFromCustomer",
                                "SpecificDayofMonth",
                                "SubscriptionStartDay",
                                "ChargeTriggerDay",
                                "SpecificDayofWeek"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriod",
                              "label": "Billing Period",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Month",
                                "Quarter",
                                "Semi_Annual",
                                "Annual",
                                "Eighteen_Months",
                                "Two_Years",
                                "Three_Years",
                                "Five_Years",
                                "Specific_Months",
                                "Subscription_Term",
                                "Week",
                                "Specific_Weeks",
                                "Specific_Days"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriodAlignment",
                              "label": "Billing Period Alignment",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "AlignToCharge",
                                "AlignToSubscriptionStart",
                                "AlignToTermStart"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingTiming",
                              "label": "Billing Timing",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "IN_ADVANCE",
                                "IN_ARREARS"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "specificBillingPeriod",
                              "label": "Specific Billing Period",
                              "type": "number",
                              "required": false,
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "weeklyBillCycleDay",
                              "label": "Weekly Bill Cycle Day",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                              ],
                              "section": "Invoice & Document Settings"
                            }
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "chargeFunction",
                          "label": "Charge Function",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "CommitmentTrueUp",
                            "CreditCommitment"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "commitmentType",
                          "label": "Commitment Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "CURRENCY"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "creditOption",
                          "label": "Credit Option",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "TimeBased",
                            "ConsumptionBased",
                            "FullCreditBack"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "chargeModel",
                          "label": "Charge Model",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "chargeNumber",
                          "label": "Charge Number",
                          "type": "string",
                          "required": false,
                          "maxLength": 50,
                          "section": "Account Settings"
                        },
                        {
                          "name": "chargeType",
                          "label": "Charge Type",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
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
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "deferredRevenueAccountingCode",
                          "label": "Deferred Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "drawdownRate",
                          "label": "Drawdown Rate",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "endDateCondition",
                              "label": "End Date Condition",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Subscription_End",
                                "Fixed_Period",
                                "Specific_End_Date"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "endDatePolicy",
                              "label": "End Date Policy",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "AlignToApplyToCharge",
                                "SpecificEndDate",
                                "FixedPeriod"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificEndDate",
                              "label": "Specific End Date",
                              "type": "date",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriods",
                              "label": "Up To Periods",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriodsType",
                              "label": "Up To Periods Type",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Billing_Periods",
                                "Days",
                                "Weeks",
                                "Months",
                                "Years"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "estimatedStartDate",
                          "label": "Estimated Start Date",
                          "type": "date",
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
                          "name": "excludeItemBookingFromRevenueAccounting",
                          "label": "Exclude Item Booking From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "isAllocationEligible",
                          "label": "Is Allocation Eligible",
                          "type": "boolean",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isRollover",
                          "label": "Is Rollover",
                          "type": "boolean",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isUnbilled",
                          "label": "Is Unbilled",
                          "type": "boolean",
                          "required": false,
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "negotiatedPriceTable",
                          "label": "Negotiated Price Table",
                          "type": "array",
                          "required": false,
                          "itemType": "object",
                          "itemFields": [
                            {
                              "name": "items",
                              "label": "Items",
                              "type": "object",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "name",
                          "label": "Name",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "pobPolicy",
                          "label": "Pob Policy",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prepaidQuantity",
                          "label": "Prepaid Quantity",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricing",
                          "label": "Pricing",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "chargeModelData",
                              "label": "Charge Model Data",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "chargeModelConfiguration",
                                  "label": "Charge Model Configuration",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "customFieldPerUnitRate",
                                      "label": "Custom Field Per Unit Rate",
                                      "type": "string",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "customFieldTotalAmount",
                                      "label": "Custom Field Total Amount",
                                      "type": "string",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "formula",
                                      "label": "Formula",
                                      "type": "string",
                                      "required": false,
                                      "section": "Additional Fields"
                                    }
                                  ],
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
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discount",
                              "label": "Discount",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "applyDiscountTo",
                                  "label": "Apply Discount To",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "ONETIME",
                                    "RECURRING",
                                    "USAGE",
                                    "ONETIMERECURRING",
                                    "ONETIMEUSAGE",
                                    "RECURRINGUSAGE",
                                    "ONETIMERECURRINGUSAGE"
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "applyToBillingPeriodPartially",
                                  "label": "Apply To Billing Period Partially",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Invoice & Document Settings"
                                },
                                {
                                  "name": "discountAmount",
                                  "label": "Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountApplyDetails",
                                  "label": "Discount Apply Details",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "productRatePlanChargeId",
                                      "label": "Product Rate Plan Charge Id",
                                      "type": "string",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "productRatePlanId",
                                      "label": "Product Rate Plan Id",
                                      "type": "string",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "discountClass",
                                  "label": "Discount Class",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountLevel",
                                  "label": "Discount Level",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "rateplan",
                                    "subscription",
                                    "account"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountPercentage",
                                  "label": "Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountAmount",
                                  "label": "Original Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountPercentage",
                                  "label": "Original Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountAmount",
                                  "label": "Original List Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountPercentage",
                                  "label": "Original List Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeFlatFee",
                              "label": "One Time Flat Fee",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimePerUnit",
                              "label": "One Time Per Unit",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
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
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeTiered",
                              "label": "One Time Tiered",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeVolume",
                              "label": "One Time Volume",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringDeliveryBased",
                              "label": "Recurring Delivery Based",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "deliverySchedule",
                                  "label": "Delivery Schedule",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "frequency",
                                      "label": "Frequency",
                                      "type": "string",
                                      "required": false,
                                      "enum": [
                                        "Weekly"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "friday",
                                      "label": "Friday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "monday",
                                      "label": "Monday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "saturday",
                                      "label": "Saturday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "sunday",
                                      "label": "Sunday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "thursday",
                                      "label": "Thursday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tuesday",
                                      "label": "Tuesday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "wednesday",
                                      "label": "Wednesday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringFlatFee",
                              "label": "Recurring Flat Fee",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringPerUnit",
                              "label": "Recurring Per Unit",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
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
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringTiered",
                              "label": "Recurring Tiered",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
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
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringVolume",
                              "label": "Recurring Volume",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
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
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricingAttributes",
                          "label": "Pricing Attributes",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productCategory",
                          "label": "Product Category",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productClass",
                          "label": "Product Class",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productFamily",
                          "label": "Product Family",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productLine",
                          "label": "Product Line",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeId",
                          "label": "Product Rate Plan Charge Id",
                          "type": "string",
                          "required": true,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeNumber",
                          "label": "Product Rate Plan Charge Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "prorationOption",
                          "label": "Proration Option",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "NoProration",
                            "TimeBasedProration",
                            "DefaultFromTenantSetting",
                            "ChargeFullPeriod",
                            "CustomizeProrationOptionOverrides"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "ratingPropertiesOverride",
                          "label": "Rating Properties Override",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "isProratePartialMonth",
                              "label": "Is Prorate Partial Month",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "prorationUnit",
                              "label": "Proration Unit",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "ProrateByDay",
                                "ProrateByMonthFirst"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "daysInMonth",
                              "label": "Days In Month",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "UseActualDays",
                                "Assume30Days",
                                "Assume30DaysStrict"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
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
                          "maxLength": 70,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revRecTriggerCondition",
                          "label": "Rev Rec Trigger Condition",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Contract Effective Date",
                            "Service Activation Date",
                            "Customer Acceptance Date"
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
                          "name": "rolloverApply",
                          "label": "Rollover Apply",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "ApplyFirst",
                            "ApplyLast"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "rolloverPeriodLength",
                          "label": "Rollover Period Length",
                          "type": "number",
                          "required": false,
                          "defaultValue": null,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverPeriods",
                          "label": "Rollover Periods",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "startDate",
                          "label": "Start Date",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "periodsAfterChargeStart",
                              "label": "Periods After Charge Start",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificTriggerDate",
                              "label": "Specific Trigger Date",
                              "type": "date",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "startDatePolicy",
                              "label": "Start Date Policy",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "AlignToApplyToCharge",
                                "SpecificDate",
                                "EndOfLastInvoicePeriodOfApplyToCharge",
                                "FixedPeriodAfterApplyToChargeStartDate"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "startPeriodsType",
                              "label": "Start Periods Type",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Days",
                                "Weeks",
                                "Months",
                                "Years"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "triggerEvent",
                              "label": "Trigger Event",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "ContractEffective",
                                "ServiceActivation",
                                "CustomerAcceptance",
                                "SpecificDate"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
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
                          "section": "Tax Settings"
                        },
                        {
                          "name": "unBilledReceivablesAccountingCode",
                          "label": "Un Billed Receivables Accounting Code",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "uniqueToken",
                          "label": "Unique Token",
                          "type": "string",
                          "required": false,
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upsellOriginChargeNumber",
                          "label": "Upsell Origin Charge Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "validityPeriodType",
                          "label": "Validity Period Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "SUBSCRIPTION_TERM",
                            "ANNUAL",
                            "SEMI_ANNUAL",
                            "QUARTER",
                            "MONTH"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "clearingExistingFeatures",
                      "label": "Clearing Existing Features",
                      "type": "boolean",
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
                      "name": "externalCatalogPlanId",
                      "label": "External Catalog Plan Id",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "externallyManagedPlanId",
                      "label": "Externally Managed Plan Id",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "subscriptionRatePlanNumber",
                      "label": "Subscription Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "isFromExternalCatalog",
                      "label": "Is From External Catalog",
                      "type": "boolean",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanId",
                      "label": "Product Rate Plan Id",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "ratePlanName",
                      "label": "Rate Plan Name",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "subscriptionProductFeatures",
                      "label": "Subscription Product Features",
                      "type": "array",
                      "required": false,
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "featureId",
                          "label": "Feature Id",
                          "type": "string",
                          "required": true,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Subscription Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanId",
                  "label": "Product Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "resetBcd",
                  "label": "Reset Bcd",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "subType",
                  "label": "Sub Type",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "Upgrade",
                    "Downgrade",
                    "Crossgrade",
                    "PlanChanged"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "changeReason",
              "label": "Change Reason",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "createSubscription",
              "label": "Create Subscription",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "currency",
                  "label": "Currency",
                  "type": "string",
                  "required": false,
                  "maxLength": 3,
                  "section": "Additional Fields"
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
                  "name": "invoiceSeparately",
                  "label": "Invoice Separately",
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
                  "name": "newSubscriptionOwnerAccount",
                  "label": "New Subscription Owner Account",
                  "type": "object",
                  "required": false,
                  "fields": [
                    {
                      "name": "accountNumber",
                      "label": "Account Number",
                      "type": "string",
                      "required": false,
                      "maxLength": 70,
                      "section": "Account Settings"
                    },
                    {
                      "name": "additionalEmailAddresses",
                      "label": "Additional Email Addresses",
                      "type": "textarea",
                      "required": false,
                      "maxLength": 1200,
                      "section": "Communication Settings"
                    },
                    {
                      "name": "allowInvoiceEdit",
                      "label": "Allow Invoice Edit",
                      "type": "boolean",
                      "required": false,
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "autoPay",
                      "label": "Auto Pay",
                      "type": "boolean",
                      "required": false,
                      "section": "Payment Settings"
                    },
                    {
                      "name": "batch",
                      "label": "Batch",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "billCycleDay",
                      "label": "Bill Cycle Day",
                      "type": "number",
                      "required": true,
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "billToContact",
                      "label": "Bill To Contact",
                      "type": "object",
                      "required": true,
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
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contactDescription",
                          "label": "Contact Description",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Contact Information"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "maxLength": 64,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "county",
                          "label": "County",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
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
                          "maxLength": 100,
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
                          "enum": [
                            "Work",
                            "Mobile",
                            "Home",
                            "Other"
                          ],
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
                          "name": "postalCode",
                          "label": "Postal Code",
                          "type": "string",
                          "required": false,
                          "maxLength": 20,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxRegion",
                          "label": "Tax Region",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "workEmail",
                          "label": "Work Email",
                          "type": "email",
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
                        }
                      ],
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "communicationProfileId",
                      "label": "Communication Profile Id",
                      "type": "string",
                      "required": false,
                      "section": "Communication Settings"
                    },
                    {
                      "name": "creditCard",
                      "label": "Credit Card",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "cardHolderInfo",
                          "label": "Card Holder Info",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "maxLength": 255,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "maxLength": 255,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "cardHolderName",
                              "label": "Card Holder Name",
                              "type": "string",
                              "required": false,
                              "maxLength": 50,
                              "section": "Account Settings"
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
                              "maxLength": 64,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "maxLength": 80,
                              "section": "Communication Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "maxLength": 40,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "maxLength": 50,
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
                          "section": "Additional Fields"
                        },
                        {
                          "name": "cardNumber",
                          "label": "Card Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardType",
                          "label": "Card Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Visa",
                            "MasterCard",
                            "AmericanExpress",
                            "Discover",
                            "JCB",
                            "Diners",
                            "CUP",
                            "Maestro",
                            "Electron",
                            "AppleVisa",
                            "AppleMasterCard",
                            "AppleAmericanExpress",
                            "AppleDiscover",
                            "AppleJCB",
                            "Elo",
                            "Hipercard",
                            "Naranja",
                            "Nativa",
                            "TarjetaShopping",
                            "Cencosud",
                            "Argencard",
                            "Cabal"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationMonth",
                          "label": "Expiration Month",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationYear",
                          "label": "Expiration Year",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "securityCode",
                          "label": "Security Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Payment Settings"
                    },
                    {
                      "name": "creditMemoTemplateId",
                      "label": "Credit Memo Template Id",
                      "type": "string",
                      "required": false,
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "crmId",
                      "label": "Crm Id",
                      "type": "string",
                      "required": false,
                      "maxLength": 100,
                      "section": "Account Settings"
                    },
                    {
                      "name": "currency",
                      "label": "Currency",
                      "type": "string",
                      "required": true,
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
                      "name": "customerServiceRepName",
                      "label": "Customer Service Rep Name",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "debitMemoTemplateId",
                      "label": "Debit Memo Template Id",
                      "type": "string",
                      "required": false,
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "hpmCreditCardPaymentMethodId",
                      "label": "Hpm Credit Card Payment Method Id",
                      "type": "string",
                      "required": false,
                      "section": "Payment Settings"
                    },
                    {
                      "name": "invoiceDeliveryPrefsEmail",
                      "label": "Invoice Delivery Prefs Email",
                      "type": "boolean",
                      "required": false,
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "invoiceDeliveryPrefsPrint",
                      "label": "Invoice Delivery Prefs Print",
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
                      "name": "name",
                      "label": "Name",
                      "type": "string",
                      "required": true,
                      "maxLength": 255,
                      "section": "Account Settings"
                    },
                    {
                      "name": "notes",
                      "label": "Notes",
                      "type": "textarea",
                      "required": false,
                      "maxLength": 65535,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "parentId",
                      "label": "Parent Id",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "paymentGateway",
                      "label": "Payment Gateway",
                      "type": "string",
                      "required": false,
                      "maxLength": 40,
                      "section": "Payment Settings"
                    },
                    {
                      "name": "paymentMethod",
                      "label": "Payment Method",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "type",
                          "label": "Type",
                          "type": "string",
                          "required": true,
                          "enum": [
                            "CreditCard",
                            "CreditCardReferenceTransaction",
                            "ACH",
                            "SEPA",
                            "Betalingsservice",
                            "Autogiro",
                            "Bacs",
                            "Becs",
                            "Becsnz",
                            "PAD",
                            "PayPalCP",
                            "PayPalEC",
                            "PayPalNativeEC",
                            "PayPalAdaptive",
                            "AdyenApplePay",
                            "AdyenGooglePay",
                            "GooglePay",
                            "AmazonPay"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "cardHolderInfo",
                          "label": "Card Holder Info",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "cardHolderName",
                              "label": "Card Holder Name",
                              "type": "string",
                              "required": true,
                              "section": "Account Settings"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
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
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "section": "Communication Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "cardMaskNumber",
                          "label": "Card Mask Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardNumber",
                          "label": "Card Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardType",
                          "label": "Card Type",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "checkDuplicated",
                          "label": "Check Duplicated",
                          "type": "boolean",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationMonth",
                          "label": "Expiration Month",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationYear",
                          "label": "Expiration Year",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "identityNumber",
                          "label": "Identity Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "mitConsentAgreementRef",
                          "label": "Mit Consent Agreement Ref",
                          "type": "string",
                          "required": false,
                          "maxLength": 128,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitConsentAgreementSrc",
                          "label": "Mit Consent Agreement Src",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "External"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitNetworkTransactionId",
                          "label": "Mit Network Transaction Id",
                          "type": "string",
                          "required": false,
                          "maxLength": 128,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitProfileAction",
                          "label": "Mit Profile Action",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Activate",
                            "Persist"
                          ],
                          "section": "Communication Settings"
                        },
                        {
                          "name": "mitProfileAgreedOn",
                          "label": "Mit Profile Agreed On",
                          "type": "date",
                          "required": false,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "mitProfileType",
                          "label": "Mit Profile Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Recurring",
                            "Unscheduled"
                          ],
                          "section": "Communication Settings"
                        },
                        {
                          "name": "screeningAmount",
                          "label": "Screening Amount",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "securityCode",
                          "label": "Security Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokens",
                          "label": "Tokens",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "gatewayType",
                              "label": "Gateway Type",
                              "type": "string",
                              "required": true,
                              "section": "Payment Settings"
                            },
                            {
                              "name": "secondTokenId",
                              "label": "Second Token Id",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "thirdTokenId",
                              "label": "Third Token Id",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tokenId",
                              "label": "Token Id",
                              "type": "string",
                              "required": true,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokenize",
                          "label": "Tokenize",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mandateInfo",
                          "label": "Mandate Info",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "mandateId",
                              "label": "Mandate Id",
                              "type": "string",
                              "required": false,
                              "maxLength": 36,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "mandateReason",
                              "label": "Mandate Reason",
                              "type": "string",
                              "required": false,
                              "maxLength": 64,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "mandateStatus",
                              "label": "Mandate Status",
                              "type": "string",
                              "required": false,
                              "maxLength": 64,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "processingOptions",
                          "label": "Processing Options",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "checkDuplicated",
                              "label": "Check Duplicated",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountKey",
                          "label": "Account Key",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "authGateway",
                          "label": "Auth Gateway",
                          "type": "string",
                          "required": false,
                          "section": "Payment Settings"
                        },
                        {
                          "name": "currencyCode",
                          "label": "Currency Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "gatewayOptions",
                          "label": "Gateway Options",
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
                          "section": "Payment Settings"
                        },
                        {
                          "name": "ipAddress",
                          "label": "Ip Address",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "makeDefault",
                          "label": "Make Default",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "skipValidation",
                          "label": "Skip Validation",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "creditCardMaskNumber",
                          "label": "Credit Card Mask Number",
                          "type": "string",
                          "required": false,
                          "maxLength": 19,
                          "section": "Account Settings"
                        },
                        {
                          "name": "secondTokenId",
                          "label": "Second Token Id",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokenId",
                          "label": "Token Id",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "addressLine1",
                          "label": "Address Line1",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "addressLine2",
                          "label": "Address Line2",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "bankABACode",
                          "label": "Bank A B A Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "bankAccountMaskNumber",
                          "label": "Bank Account Mask Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountName",
                          "label": "Bank Account Name",
                          "type": "string",
                          "required": false,
                          "maxLength": 70,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountNumber",
                          "label": "Bank Account Number",
                          "type": "string",
                          "required": false,
                          "maxLength": 30,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountType",
                          "label": "Bank Account Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "BusinessChecking",
                            "Checking",
                            "Saving"
                          ],
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankName",
                          "label": "Bank Name",
                          "type": "string",
                          "required": false,
                          "maxLength": 70,
                          "section": "Account Settings"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
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
                          "name": "phone",
                          "label": "Phone",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "zipCode",
                          "label": "Zip Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "IBAN",
                          "label": "I B A N",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountHolderInfo",
                          "label": "Account Holder Info",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "accountHolderName",
                              "label": "Account Holder Name",
                              "type": "string",
                              "required": false,
                              "maxLength": 60,
                              "section": "Account Settings"
                            },
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
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
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "section": "Communication Settings"
                            },
                            {
                              "name": "firstName",
                              "label": "First Name",
                              "type": "string",
                              "required": false,
                              "section": "Account Settings"
                            },
                            {
                              "name": "lastName",
                              "label": "Last Name",
                              "type": "string",
                              "required": false,
                              "section": "Account Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Account Settings"
                        },
                        {
                          "name": "accountMaskNumber",
                          "label": "Account Mask Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "businessIdentificationCode",
                          "label": "Business Identification Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountNumber",
                          "label": "Account Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankCode",
                          "label": "Bank Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "branchCode",
                          "label": "Branch Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "BAID",
                          "label": "B A I D",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "email",
                          "label": "Email",
                          "type": "email",
                          "required": false,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "preapprovalKey",
                          "label": "Preapproval Key",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "applePaymentData",
                          "label": "Apple Payment Data",
                          "type": "string",
                          "required": false,
                          "section": "Payment Settings"
                        },
                        {
                          "name": "googlePaymentToken",
                          "label": "Google Payment Token",
                          "type": "string",
                          "required": false,
                          "section": "Payment Settings"
                        },
                        {
                          "name": "amazonPayToken",
                          "label": "Amazon Pay Token",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        }
                      ],
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
                      "name": "purchaseOrderNumber",
                      "label": "Purchase Order Number",
                      "type": "string",
                      "required": false,
                      "maxLength": 100,
                      "section": "Account Settings"
                    },
                    {
                      "name": "salesRep",
                      "label": "Sales Rep",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Additional Fields"
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
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contactDescription",
                          "label": "Contact Description",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Contact Information"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "maxLength": 64,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "county",
                          "label": "County",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
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
                          "maxLength": 100,
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
                          "enum": [
                            "Work",
                            "Mobile",
                            "Home",
                            "Other"
                          ],
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
                          "name": "postalCode",
                          "label": "Postal Code",
                          "type": "string",
                          "required": false,
                          "maxLength": 20,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxRegion",
                          "label": "Tax Region",
                          "type": "string",
                          "required": false,
                          "maxLength": 100,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "workEmail",
                          "label": "Work Email",
                          "type": "email",
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
                        }
                      ],
                      "section": "Contact Information"
                    },
                    {
                      "name": "taxInfo",
                      "label": "Tax Info",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "VATId",
                          "label": "V A T Id",
                          "type": "string",
                          "required": false,
                          "maxLength": 25,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "companyCode",
                          "label": "Company Code",
                          "type": "string",
                          "required": false,
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptCertificateId",
                          "label": "Exempt Certificate Id",
                          "type": "string",
                          "required": false,
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptCertificateType",
                          "label": "Exempt Certificate Type",
                          "type": "string",
                          "required": false,
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptDescription",
                          "label": "Exempt Description",
                          "type": "string",
                          "required": false,
                          "maxLength": 500,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptEffectiveDate",
                          "label": "Exempt Effective Date",
                          "type": "date",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptExpirationDate",
                          "label": "Exempt Expiration Date",
                          "type": "date",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptIssuingJurisdiction",
                          "label": "Exempt Issuing Jurisdiction",
                          "type": "string",
                          "required": false,
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptStatus",
                          "label": "Exempt Status",
                          "type": "string",
                          "required": false,
                          "defaultValue": "No",
                          "enum": [
                            "No",
                            "Yes",
                            "PendingVerification"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Tax Settings"
                    }
                  ],
                  "section": "Account Settings"
                },
                {
                  "name": "notes",
                  "label": "Notes",
                  "type": "string",
                  "required": false,
                  "maxLength": 500,
                  "section": "Additional Fields"
                },
                {
                  "name": "paymentTerm",
                  "label": "Payment Term",
                  "type": "string",
                  "required": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "section": "Contact Information"
                },
                {
                  "name": "subscribeToRatePlans",
                  "label": "Subscribe To Rate Plans",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "chargeOverrides",
                      "label": "Charge Overrides",
                      "type": "array",
                      "required": false,
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "accountReceivableAccountingCode",
                          "label": "Account Receivable Accounting Code",
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
                          "name": "billing",
                          "label": "Billing",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "billCycleDay",
                              "label": "Bill Cycle Day",
                              "type": "number",
                              "required": false,
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billCycleType",
                              "label": "Bill Cycle Type",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "DefaultFromCustomer",
                                "SpecificDayofMonth",
                                "SubscriptionStartDay",
                                "ChargeTriggerDay",
                                "SpecificDayofWeek"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriod",
                              "label": "Billing Period",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Month",
                                "Quarter",
                                "Semi_Annual",
                                "Annual",
                                "Eighteen_Months",
                                "Two_Years",
                                "Three_Years",
                                "Five_Years",
                                "Specific_Months",
                                "Subscription_Term",
                                "Week",
                                "Specific_Weeks",
                                "Specific_Days"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriodAlignment",
                              "label": "Billing Period Alignment",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "AlignToCharge",
                                "AlignToSubscriptionStart",
                                "AlignToTermStart"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingTiming",
                              "label": "Billing Timing",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "IN_ADVANCE",
                                "IN_ARREARS"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "specificBillingPeriod",
                              "label": "Specific Billing Period",
                              "type": "number",
                              "required": false,
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "weeklyBillCycleDay",
                              "label": "Weekly Bill Cycle Day",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                              ],
                              "section": "Invoice & Document Settings"
                            }
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "chargeFunction",
                          "label": "Charge Function",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "CommitmentTrueUp",
                            "CreditCommitment"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "commitmentType",
                          "label": "Commitment Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "CURRENCY"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "creditOption",
                          "label": "Credit Option",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "TimeBased",
                            "ConsumptionBased",
                            "FullCreditBack"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "chargeModel",
                          "label": "Charge Model",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "chargeNumber",
                          "label": "Charge Number",
                          "type": "string",
                          "required": false,
                          "maxLength": 50,
                          "section": "Account Settings"
                        },
                        {
                          "name": "chargeType",
                          "label": "Charge Type",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
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
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "deferredRevenueAccountingCode",
                          "label": "Deferred Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "drawdownRate",
                          "label": "Drawdown Rate",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "endDateCondition",
                              "label": "End Date Condition",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Subscription_End",
                                "Fixed_Period",
                                "Specific_End_Date"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "endDatePolicy",
                              "label": "End Date Policy",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "AlignToApplyToCharge",
                                "SpecificEndDate",
                                "FixedPeriod"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificEndDate",
                              "label": "Specific End Date",
                              "type": "date",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriods",
                              "label": "Up To Periods",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriodsType",
                              "label": "Up To Periods Type",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "Billing_Periods",
                                "Days",
                                "Weeks",
                                "Months",
                                "Years"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "estimatedStartDate",
                          "label": "Estimated Start Date",
                          "type": "date",
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
                          "name": "excludeItemBookingFromRevenueAccounting",
                          "label": "Exclude Item Booking From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "isAllocationEligible",
                          "label": "Is Allocation Eligible",
                          "type": "boolean",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isRollover",
                          "label": "Is Rollover",
                          "type": "boolean",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isUnbilled",
                          "label": "Is Unbilled",
                          "type": "boolean",
                          "required": false,
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "name",
                          "label": "Name",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "negotiatedPriceTable",
                          "label": "Negotiated Price Table",
                          "type": "array",
                          "required": false,
                          "itemType": "object",
                          "itemFields": [
                            {
                              "name": "items",
                              "label": "Items",
                              "type": "object",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pobPolicy",
                          "label": "Pob Policy",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prepaidQuantity",
                          "label": "Prepaid Quantity",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricing",
                          "label": "Pricing",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "chargeModelData",
                              "label": "Charge Model Data",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "chargeModelConfiguration",
                                  "label": "Charge Model Configuration",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "customFieldPerUnitRate",
                                      "label": "Custom Field Per Unit Rate",
                                      "type": "string",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "customFieldTotalAmount",
                                      "label": "Custom Field Total Amount",
                                      "type": "string",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "formula",
                                      "label": "Formula",
                                      "type": "string",
                                      "required": false,
                                      "section": "Additional Fields"
                                    }
                                  ],
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
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discount",
                              "label": "Discount",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "applyDiscountTo",
                                  "label": "Apply Discount To",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "ONETIME",
                                    "RECURRING",
                                    "USAGE",
                                    "ONETIMERECURRING",
                                    "ONETIMEUSAGE",
                                    "RECURRINGUSAGE",
                                    "ONETIMERECURRINGUSAGE"
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "applyToBillingPeriodPartially",
                                  "label": "Apply To Billing Period Partially",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Invoice & Document Settings"
                                },
                                {
                                  "name": "discountAmount",
                                  "label": "Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountApplyDetails",
                                  "label": "Discount Apply Details",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "productRatePlanChargeId",
                                      "label": "Product Rate Plan Charge Id",
                                      "type": "string",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "productRatePlanId",
                                      "label": "Product Rate Plan Id",
                                      "type": "string",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "discountClass",
                                  "label": "Discount Class",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountLevel",
                                  "label": "Discount Level",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "rateplan",
                                    "subscription",
                                    "account"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountPercentage",
                                  "label": "Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountAmount",
                                  "label": "Original Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountPercentage",
                                  "label": "Original Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountAmount",
                                  "label": "Original List Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountPercentage",
                                  "label": "Original List Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeFlatFee",
                              "label": "One Time Flat Fee",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimePerUnit",
                              "label": "One Time Per Unit",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
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
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeTiered",
                              "label": "One Time Tiered",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeVolume",
                              "label": "One Time Volume",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringCalculated",
                              "label": "Recurring Calculated",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "clearingExistingMinimumAmount",
                                  "label": "Clearing Existing Minimum Amount",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "clearingExistingMaximumAmount",
                                  "label": "Clearing Existing Maximum Amount",
                                  "type": "boolean",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "eligibleAccountConditions",
                                  "label": "Eligible Account Conditions",
                                  "type": "object",
                                  "required": false,
                                  "section": "Account Settings"
                                },
                                {
                                  "name": "eligibleChargeConditions",
                                  "label": "Eligible Charge Conditions",
                                  "type": "object",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "minimumAmount",
                                  "label": "Minimum Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "maximumAmount",
                                  "label": "Maximum Amount",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "percentage",
                                  "label": "Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringDeliveryBased",
                              "label": "Recurring Delivery Based",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "deliverySchedule",
                                  "label": "Delivery Schedule",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "frequency",
                                      "label": "Frequency",
                                      "type": "string",
                                      "required": false,
                                      "enum": [
                                        "Weekly"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "friday",
                                      "label": "Friday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "monday",
                                      "label": "Monday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "saturday",
                                      "label": "Saturday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "sunday",
                                      "label": "Sunday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "thursday",
                                      "label": "Thursday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tuesday",
                                      "label": "Tuesday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "wednesday",
                                      "label": "Wednesday",
                                      "type": "boolean",
                                      "required": false,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringFlatFee",
                              "label": "Recurring Flat Fee",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringPerUnit",
                              "label": "Recurring Per Unit",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
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
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringTiered",
                              "label": "Recurring Tiered",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
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
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringVolume",
                              "label": "Recurring Volume",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
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
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricingAttributes",
                          "label": "Pricing Attributes",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productCategory",
                          "label": "Product Category",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productClass",
                          "label": "Product Class",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productFamily",
                          "label": "Product Family",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productLine",
                          "label": "Product Line",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeId",
                          "label": "Product Rate Plan Charge Id",
                          "type": "string",
                          "required": true,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeNumber",
                          "label": "Product Rate Plan Charge Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "prorationOption",
                          "label": "Proration Option",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "NoProration",
                            "TimeBasedProration",
                            "DefaultFromTenantSetting",
                            "ChargeFullPeriod",
                            "CustomizeProrationOptionOverrides"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "ratingPropertiesOverride",
                          "label": "Rating Properties Override",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "isProratePartialMonth",
                              "label": "Is Prorate Partial Month",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "prorationUnit",
                              "label": "Proration Unit",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "ProrateByDay",
                                "ProrateByMonthFirst"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "daysInMonth",
                              "label": "Days In Month",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "UseActualDays",
                                "Assume30Days",
                                "Assume30DaysStrict"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
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
                          "maxLength": 70,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revRecTriggerCondition",
                          "label": "Rev Rec Trigger Condition",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Contract Effective Date",
                            "Service Activation Date",
                            "Customer Acceptance Date"
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
                          "name": "rolloverApply",
                          "label": "Rollover Apply",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "ApplyFirst",
                            "ApplyLast"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "rolloverPeriodLength",
                          "label": "Rollover Period Length",
                          "type": "number",
                          "required": false,
                          "defaultValue": null,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverPeriods",
                          "label": "Rollover Periods",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "startDate",
                          "label": "Start Date",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "specificTriggerDate",
                              "label": "Specific Trigger Date",
                              "type": "date",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "triggerEvent",
                              "label": "Trigger Event",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "ContractEffective",
                                "ServiceActivation",
                                "CustomerAcceptance",
                                "SpecificDate"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "unBilledReceivablesAccountingCode",
                          "label": "Un Billed Receivables Accounting Code",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "uniqueToken",
                          "label": "Unique Token",
                          "type": "string",
                          "required": false,
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upsellOriginChargeNumber",
                          "label": "Upsell Origin Charge Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "validityPeriodType",
                          "label": "Validity Period Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "SUBSCRIPTION_TERM",
                            "ANNUAL",
                            "SEMI_ANNUAL",
                            "QUARTER",
                            "MONTH"
                          ],
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
                          "name": "taxable",
                          "label": "Taxable",
                          "type": "boolean",
                          "required": false,
                          "section": "Tax Settings"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "clearingExistingFeatures",
                      "label": "Clearing Existing Features",
                      "type": "boolean",
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
                      "name": "isAddingSubsetCharges",
                      "label": "Is Adding Subset Charges",
                      "type": "boolean",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isFromExternalCatalog",
                      "label": "Is From External Catalog",
                      "type": "boolean",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanId",
                      "label": "Product Rate Plan Id",
                      "type": "string",
                      "required": true,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "ratePlanName",
                      "label": "Rate Plan Name",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "subscriptionProductFeatures",
                      "label": "Subscription Product Features",
                      "type": "array",
                      "required": false,
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "featureId",
                          "label": "Feature Id",
                          "type": "string",
                          "required": true,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Subscription Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "subscriptionRatePlanNumber",
                      "label": "Subscription Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "maxLength": 50,
                      "section": "Account Settings"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionNumber",
                  "label": "Subscription Number",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "subscriptionOwnerAccountNumber",
                  "label": "Subscription Owner Account Number",
                  "type": "string",
                  "required": false,
                  "maxLength": 70,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceOwnerAccountNumber",
                  "label": "Invoice Owner Account Number",
                  "type": "string",
                  "required": false,
                  "maxLength": 70,
                  "section": "Account Settings"
                },
                {
                  "name": "terms",
                  "label": "Terms",
                  "type": "object",
                  "required": false,
                  "fields": [
                    {
                      "name": "autoRenew",
                      "label": "Auto Renew",
                      "type": "boolean",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "initialTerm",
                      "label": "Initial Term",
                      "type": "object",
                      "required": true,
                      "fields": [
                        {
                          "name": "period",
                          "label": "Period",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "periodType",
                          "label": "Period Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Month",
                            "Year",
                            "Day",
                            "Week"
                          ],
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
                          "name": "endDate",
                          "label": "End Date",
                          "type": "date",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "termType",
                          "label": "Term Type",
                          "type": "string",
                          "required": true,
                          "enum": [
                            "TERMED",
                            "EVERGREEN"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "renewalSetting",
                      "label": "Renewal Setting",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "RENEW_WITH_SPECIFIC_TERM",
                        "RENEW_TO_EVERGREEN"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "renewalTerms",
                      "label": "Renewal Terms",
                      "type": "array",
                      "required": false,
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "period",
                          "label": "Period",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "periodType",
                          "label": "Period Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Month",
                            "Year",
                            "Day",
                            "Week"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Subscription Settings"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "ownerTransfer",
              "label": "Owner Transfer",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "destinationAccountNumber",
                  "label": "Destination Account Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "destinationInvoiceAccountNumber",
                  "label": "Destination Invoice Account Number",
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
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "paymentProfile",
                  "label": "Payment Profile",
                  "type": "object",
                  "required": false,
                  "fields": [
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
                    }
                  ],
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
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
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
              "section": "Additional Fields"
            },
            {
              "name": "removeProduct",
              "label": "Remove Product",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "externalCatalogPlanId",
                  "label": "External Catalog Plan Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
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
                  "name": "chargeUpdates",
                  "label": "Charge Updates",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "chargeNumber",
                      "label": "Charge Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "productRatePlanChargeId",
                      "label": "Product Rate Plan Charge Id",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "renewSubscription",
              "label": "Renew Subscription",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Contact Information"
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
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
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
              "section": "Subscription Settings"
            },
            {
              "name": "resume",
              "label": "Resume",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "extendsTerm",
                  "label": "Extends Term",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePeriods",
                  "label": "Resume Periods",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePeriodsType",
                  "label": "Resume Periods Type",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "Day",
                    "Week",
                    "Month",
                    "Year"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePolicy",
                  "label": "Resume Policy",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "Today",
                    "FixedPeriodsFromSuspendDate",
                    "FixedPeriodsFromToday",
                    "SpecificDate",
                    "SuspendDate"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "resumeSpecificDate",
                  "label": "Resume Specific Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "suspend",
              "label": "Suspend",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "suspendPeriods",
                  "label": "Suspend Periods",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "suspendPeriodsType",
                  "label": "Suspend Periods Type",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "Day",
                    "Week",
                    "Month",
                    "Year"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "suspendPolicy",
                  "label": "Suspend Policy",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "Today",
                    "EndOfLastInvoicePeriod",
                    "FixedPeriodsFromToday",
                    "SpecificDate"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "suspendSpecificDate",
                  "label": "Suspend Specific Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "termsAndConditions",
              "label": "Terms And Conditions",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "autoRenew",
                  "label": "Auto Renew",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "communicationProfileId",
                  "label": "Communication Profile Id",
                  "type": "string",
                  "required": false,
                  "section": "Communication Settings"
                },
                {
                  "name": "clearingExistingCommunicationProfile",
                  "label": "Clearing Existing Communication Profile",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Communication Settings"
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
                  "name": "invoiceSeparately",
                  "label": "Invoice Separately",
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
                  "name": "lastTerm",
                  "label": "Last Term",
                  "type": "object",
                  "required": false,
                  "fields": [
                    {
                      "name": "period",
                      "label": "Period",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "periodType",
                      "label": "Period Type",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "Month",
                        "Year",
                        "Day",
                        "Week"
                      ],
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
                      "name": "endDate",
                      "label": "End Date",
                      "type": "date",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "termType",
                      "label": "Term Type",
                      "type": "string",
                      "required": true,
                      "enum": [
                        "TERMED",
                        "EVERGREEN"
                      ],
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "paymentProfile",
                  "label": "Payment Profile",
                  "type": "object",
                  "required": false,
                  "fields": [
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
                    }
                  ],
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
                  "name": "renewalSetting",
                  "label": "Renewal Setting",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "RENEW_WITH_SPECIFIC_TERM",
                    "RENEW_TO_EVERGREEN"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "renewalTerms",
                  "label": "Renewal Terms",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "period",
                      "label": "Period",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "periodType",
                      "label": "Period Type",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "Month",
                        "Year",
                        "Day",
                        "Week"
                      ],
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledCancelDate",
                  "label": "Scheduled Cancel Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledSuspendDate",
                  "label": "Scheduled Suspend Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledResumeDate",
                  "label": "Scheduled Resume Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledCancelDate",
                  "label": "Clearing Scheduled Cancel Date",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledSuspendDate",
                  "label": "Clearing Scheduled Suspend Date",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledResumeDate",
                  "label": "Clearing Scheduled Resume Date",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
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
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
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
              "section": "Additional Fields"
            },
            {
              "name": "triggerDates",
              "label": "Trigger Dates",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "ContractEffective",
                    "ServiceActivation",
                    "CustomerAcceptance"
                  ],
                  "section": "Account Settings"
                },
                {
                  "name": "triggerDate",
                  "label": "Trigger Date",
                  "type": "date",
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
              "required": true,
              "enum": [
                "CreateSubscription",
                "TermsAndConditions",
                "AddProduct",
                "UpdateProduct",
                "RemoveProduct",
                "RenewSubscription",
                "CancelSubscription",
                "OwnerTransfer",
                "Suspend",
                "Resume",
                "ChangePlan"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "updateProduct",
              "label": "Update Product",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "chargeUpdates",
                  "label": "Charge Updates",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "billing",
                      "label": "Billing",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "billingPeriodAlignment",
                          "label": "Billing Period Alignment",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "AlignToCharge",
                            "AlignToSubscriptionStart",
                            "AlignToTermStart"
                          ],
                          "section": "Invoice & Document Settings"
                        }
                      ],
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "chargeNumber",
                      "label": "Charge Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "effectiveDate",
                      "label": "Effective Date",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "specificTriggerDate",
                          "label": "Specific Trigger Date",
                          "type": "date",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "triggerEvent",
                          "label": "Trigger Event",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "ContractEffective",
                            "ServiceActivation",
                            "CustomerAcceptance",
                            "SpecificDate"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "estimatedStartDate",
                      "label": "Estimated Start Date",
                      "type": "date",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "negotiatedPriceTable",
                      "label": "Negotiated Price Table",
                      "type": "array",
                      "required": false,
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "items",
                          "label": "Items",
                          "type": "object",
                          "required": false,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "prepaidQuantity",
                      "label": "Prepaid Quantity",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricingAttributes",
                      "label": "Pricing Attributes",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricing",
                      "label": "Pricing",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "chargeModelData",
                          "label": "Charge Model Data",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "chargeModelConfiguration",
                              "label": "Charge Model Configuration",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "customFieldPerUnitRate",
                                  "label": "Custom Field Per Unit Rate",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "customFieldTotalAmount",
                                  "label": "Custom Field Total Amount",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "formula",
                                  "label": "Formula",
                                  "type": "string",
                                  "required": false,
                                  "section": "Additional Fields"
                                }
                              ],
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
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "discount",
                          "label": "Discount",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "applyDiscountTo",
                              "label": "Apply Discount To",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "ONETIME",
                                "RECURRING",
                                "USAGE",
                                "ONETIMERECURRING",
                                "ONETIMEUSAGE",
                                "RECURRINGUSAGE",
                                "ONETIMERECURRINGUSAGE"
                              ],
                              "section": "Credit & Settlement Settings"
                            },
                            {
                              "name": "discountLevel",
                              "label": "Discount Level",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "rateplan",
                                "subscription",
                                "account"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountPercentage",
                              "label": "Discount Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListDiscountPercentage",
                              "label": "Original List Discount Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringCalcualated",
                          "label": "Recurring Calcualated",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "clearingExistingMinimumAmount",
                              "label": "Clearing Existing Minimum Amount",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "clearingExistingMaximumAmount",
                              "label": "Clearing Existing Maximum Amount",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "minimumAmount",
                              "label": "Minimum Amount",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "maximumAmount",
                              "label": "Maximum Amount",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "percentage",
                              "label": "Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringFlatFee",
                          "label": "Recurring Flat Fee",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringPerUnit",
                          "label": "Recurring Per Unit",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringTiered",
                          "label": "Recurring Tiered",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
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
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringVolume",
                          "label": "Recurring Volume",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
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
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        }
                      ],
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
                      "name": "productRatePlanChargeNumber",
                      "label": "Product Rate Plan Charge Number",
                      "type": "string",
                      "required": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingFeatures",
                  "label": "Clearing Existing Features",
                  "type": "boolean",
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
                  "name": "isAddingSubsetCharges",
                  "label": "Is Adding Subset Charges",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "specificUpdateDate",
                  "label": "Specific Update Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionProductFeatures",
                  "label": "Subscription Product Features",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "featureId",
                      "label": "Feature Id",
                      "type": "string",
                      "required": true,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Subscription Settings"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "quote",
          "label": "Quote",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "OpportunityCloseDate__QT",
              "label": "Opportunity Close Date Q T",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "OpportunityName__QT",
              "label": "Opportunity Name Q T",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "QuoteBusinessType__QT",
              "label": "Quote Business Type Q T",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "QuoteNumber__QT",
              "label": "Quote Number Q T",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "QuoteType__QT",
              "label": "Quote Type Q T",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "ramp",
          "label": "Ramp",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "charges",
              "label": "Charges",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "chargeNumber",
                  "label": "Charge Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
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
              "name": "intervals",
              "label": "Intervals",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "endDate",
                  "label": "End Date",
                  "type": "date",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "startDate",
                  "label": "Start Date",
                  "type": "date",
                  "required": true,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Subscription Settings"
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
