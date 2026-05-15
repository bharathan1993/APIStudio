import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_putproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "object-putproductrateplancharge",
  "name": "CRUD: Update a product rate plan charge",
  "description": "",
  "method": "PUT",
  "path": "/v1/object/product-rate-plan-charge/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "rejectUnknownFields",
      "label": "Reject Unknown Fields",
      "type": "boolean",
      "required": false,
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "AccountingCode",
      "label": "Accounting Code",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "DeferredRevenueAccount",
      "label": "Deferred Revenue Account",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "ExcludeItemBillingFromRevenueAccounting",
      "label": "Exclude Item Billing From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "ExcludeItemBookingFromRevenueAccounting",
      "label": "Exclude Item Booking From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "Name",
      "label": "Name",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "NumberOfPeriod",
      "label": "Number Of Period",
      "type": "number",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "ProductRatePlanChargeNumber",
      "label": "Product Rate Plan Charge Number",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "RecognizedRevenueAccount",
      "label": "Recognized Revenue Account",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "RevenueRecognitionRuleName",
      "label": "Revenue Recognition Rule Name",
      "type": "string",
      "required": false,
      "enum": [
        "Recognize upon invoicing",
        "Recognize daily over time"
      ],
      "section": "Account Settings"
    },
    {
      "name": "UseDiscountSpecificAccountingCode",
      "label": "Use Discount Specific Accounting Code",
      "type": "boolean",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "DeferredRevAccount__NS",
      "label": "Deferred Rev Account N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "RecognizedRevAccount__NS",
      "label": "Recognized Rev Account N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "ApplyDiscountTo",
      "label": "Apply Discount To",
      "type": "string",
      "required": false,
      "enum": [
        "ONETIME (1)",
        "RECURRING (2)",
        "USAGE (4)",
        "ONETIMERECURRING (3)",
        "ONETIMEUSAGE (5)",
        "RECURRINGUSAGE (6)",
        "ONETIMERECURRINGUSAGE (7)"
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "CreditOption",
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
      "name": "OverageUnusedUnitsCreditOption",
      "label": "Overage Unused Units Credit Option",
      "type": "string",
      "required": false,
      "enum": [
        "NoCredit",
        "CreditBySpecificRate",
        "null"
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "RolloverApply",
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
      "name": "BillCycleDay",
      "label": "Bill Cycle Day",
      "type": "number",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillCycleType",
      "label": "Bill Cycle Type",
      "type": "string",
      "required": true,
      "enum": [
        "DefaultFromCustomer",
        "SpecificDayofMonth",
        "SubscriptionStartDay",
        "ChargeTriggerDay",
        "SpecificDayofWeek",
        "TermStartDay",
        "TermEndDay"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillingPeriod",
      "label": "Billing Period",
      "type": "string",
      "required": true,
      "enum": [
        "Month",
        "Quarter",
        "Annual",
        "Semi-Annual",
        "Specific Months",
        "Subscription Term",
        "Week",
        "Specific Weeks",
        "Specific Days"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillingPeriodAlignment",
      "label": "Billing Period Alignment",
      "type": "string",
      "required": false,
      "enum": [
        "AlignToCharge",
        "AlignToSubscriptionStart",
        "AlignToTermStart",
        "AlignToTermEnd"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillingTiming",
      "label": "Billing Timing",
      "type": "string",
      "required": false,
      "enum": [
        "In Advance",
        "In Arrears"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "IsUnbilled",
      "label": "Is Unbilled",
      "type": "boolean",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "SpecificBillingPeriod",
      "label": "Specific Billing Period",
      "type": "number",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "WeeklyBillCycleDay",
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
    },
    {
      "name": "ApplyToBillingPeriodPartially",
      "label": "Apply To Billing Period Partially",
      "type": "boolean",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "RevRecTemplateType__NS",
      "label": "Rev Rec Template Type N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "ChargeFunction",
      "label": "Charge Function",
      "type": "string",
      "required": false,
      "enum": [
        "Standard",
        "Prepayment",
        "CommitmentTrueUp",
        "Drawdown",
        "CreditCommitment",
        "DrawdownAndCreditCommitment"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "CommitmentType",
      "label": "Commitment Type",
      "type": "string",
      "required": false,
      "enum": [
        "UNIT",
        "CURRENCY"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "ChargeModel",
      "label": "Charge Model",
      "type": "string",
      "required": true,
      "enum": [
        "Discount-Fixed Amount",
        "Discount-Percentage",
        "Flat Fee Pricing",
        "Per Unit Pricing",
        "Overage Pricing",
        "Tiered Pricing",
        "Tiered with Overage Pricing",
        "Volume Pricing",
        "Delivery Pricing",
        "MultiAttributePricing",
        "PreratedPerUnit",
        "PreratedPricing`",
        "HighWatermarkVolumePricing",
        "HighWatermarkTieredPricing"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "ChargeModelConfiguration",
      "label": "Charge Model Configuration",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "ConfigurationItem",
          "label": "Configuration Item",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "Key",
              "label": "Key",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "Value",
              "label": "Value",
              "type": "string",
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
      "name": "DefaultQuantity",
      "label": "Default Quantity",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "DeliverySchedule",
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
          "name": "wendesday",
          "label": "Wendesday",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Description",
      "label": "Description",
      "type": "string",
      "required": false,
      "maxLength": 500,
      "section": "Additional Fields"
    },
    {
      "name": "DiscountLevel",
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
      "name": "DrawdownRate",
      "label": "Drawdown Rate",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "DrawdownUom",
      "label": "Drawdown Uom",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "EndDateCondition",
      "label": "End Date Condition",
      "type": "string",
      "required": false,
      "defaultValue": "SubscriptionEnd",
      "enum": [
        "SubscriptionEnd",
        "FixedPeriod"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "IncludedUnits",
      "label": "Included Units",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "IsAllocationEligible",
      "label": "Is Allocation Eligible",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "IsPrepaid",
      "label": "Is Prepaid",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "IsRollover",
      "label": "Is Rollover",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "IsStackedDiscount",
      "label": "Is Stacked Discount",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "LegacyRevenueReporting",
      "label": "Legacy Revenue Reporting",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ListPriceBase",
      "label": "List Price Base",
      "type": "string",
      "required": false,
      "enum": [
        "Per Billing Period",
        "Per Month",
        "Per Week",
        "Per Year",
        "Per Specific Months"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "MaxQuantity",
      "label": "Max Quantity",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "MinQuantity",
      "label": "Min Quantity",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "OverageCalculationOption",
      "label": "Overage Calculation Option",
      "type": "string",
      "required": false,
      "enum": [
        "EndOfSmoothingPeriod",
        "PerBillingPeriod",
        "null"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "PrepaidQuantity",
      "label": "Prepaid Quantity",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "PrepaidUom",
      "label": "Prepaid Uom",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "PriceChangeOption",
      "label": "Price Change Option",
      "type": "string",
      "required": false,
      "defaultValue": "NoChange",
      "enum": [
        "NoChange",
        "SpecificPercentageValue",
        "UseLatestProductCatalogPricing",
        "null"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "PriceIncreaseOption",
      "label": "Price Increase Option",
      "type": "string",
      "required": false,
      "enum": [
        "FromTenantPercentageValue",
        "SpecificPercentageValue"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "PriceIncreasePercentage",
      "label": "Price Increase Percentage",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ProductCategory",
      "label": "Product Category",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ProductClass",
      "label": "Product Class",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ProductFamily",
      "label": "Product Family",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ProductLine",
      "label": "Product Line",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ProrationOption",
      "label": "Proration Option",
      "type": "string",
      "required": false,
      "enum": [
        "NoProration",
        "TimeBasedProration",
        "DefaultFromTenantSetting",
        "ChargeFullPeriod"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RevenueRecognitionTiming",
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
      "name": "RevenueAmortizationMethod",
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
      "name": "ProductRatePlanChargeTierData",
      "label": "Product Rate Plan Charge Tier Data",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "ProductRatePlanChargeTier",
          "label": "Product Rate Plan Charge Tier",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "Currency",
              "label": "Currency",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "DiscountAmount",
              "label": "Discount Amount",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "DiscountPercentage",
              "label": "Discount Percentage",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "EndingUnit",
              "label": "Ending Unit",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "IsOveragePrice",
              "label": "Is Overage Price",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "Price",
              "label": "Price",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "PriceFormat",
              "label": "Price Format",
              "type": "string",
              "required": false,
              "enum": [
                "Flat Fee",
                "Per Unit"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "StartingUnit",
              "label": "Starting Unit",
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
      "name": "ProductRatePlanId",
      "label": "Product Rate Plan Id",
      "type": "string",
      "required": true,
      "maxLength": 32,
      "section": "Additional Fields"
    },
    {
      "name": "RatingGroup",
      "label": "Rating Group",
      "type": "string",
      "required": false,
      "defaultValue": "ByBillingPeriod",
      "enum": [
        "ByBillingPeriod",
        "ByUsageStartDate",
        "ByUsageRecord",
        "ByUsageUpload",
        "ByGroupId",
        "null"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RevRecCode",
      "label": "Rev Rec Code",
      "type": "string",
      "required": false,
      "maxLength": 70,
      "section": "Additional Fields"
    },
    {
      "name": "RevRecTriggerCondition",
      "label": "Rev Rec Trigger Condition",
      "type": "string",
      "required": false,
      "enum": [
        "ContractEffectiveDate",
        "ServiceActivationDate",
        "CustomerAcceptanceDate",
        "null"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RolloverPeriods",
      "label": "Rollover Periods",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "SmoothingModel",
      "label": "Smoothing Model",
      "type": "string",
      "required": false,
      "enum": [
        "RollingWindow",
        "Rollover",
        "null"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "SpecificListPriceBase",
      "label": "Specific List Price Base",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "TriggerEvent",
      "label": "Trigger Event",
      "type": "string",
      "required": true,
      "enum": [
        "ContractEffective",
        "ServiceActivation",
        "CustomerAcceptance"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "UOM",
      "label": "U O M",
      "type": "string",
      "required": false,
      "maxLength": 25,
      "section": "Additional Fields"
    },
    {
      "name": "UpToPeriods",
      "label": "Up To Periods",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "UpToPeriodsType",
      "label": "Up To Periods Type",
      "type": "string",
      "required": false,
      "defaultValue": "Billing Periods",
      "enum": [
        "Billing Periods",
        "Days",
        "Weeks",
        "Months",
        "Years",
        "null"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "UsageRecordRatingOption",
      "label": "Usage Record Rating Option",
      "type": "string",
      "required": false,
      "defaultValue": "EndOfBillingPeriod",
      "enum": [
        "EndOfBillingPeriod",
        "OnDemand",
        "null"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "UseTenantDefaultForPriceChange",
      "label": "Use Tenant Default For Price Change",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ValidityPeriodType",
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
      "name": "RolloverPeriodLength",
      "label": "Rollover Period Length",
      "type": "number",
      "required": false,
      "defaultValue": null,
      "section": "Additional Fields"
    },
    {
      "name": "Formula",
      "label": "Formula",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "Class__NS",
      "label": "Class N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Department__NS",
      "label": "Department N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IncludeChildren__NS",
      "label": "Include Children N S",
      "type": "string",
      "required": false,
      "enum": [
        "Yes",
        "No"
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
      "name": "ItemType__NS",
      "label": "Item Type N S",
      "type": "string",
      "required": false,
      "enum": [
        "Inventory",
        "Non Inventory",
        "Service"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Location__NS",
      "label": "Location N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "RevRecEnd__NS",
      "label": "Rev Rec End N S",
      "type": "string",
      "required": false,
      "enum": [
        "Charge Period Start",
        "Rev Rec Trigger Date",
        "Use NetSuite Rev Rec Template"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RevRecStart__NS",
      "label": "Rev Rec Start N S",
      "type": "string",
      "required": false,
      "enum": [
        "Charge Period Start",
        "Rev Rec Trigger Date",
        "Use NetSuite Rev Rec Template"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Subsidiary__NS",
      "label": "Subsidiary N S",
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
      "name": "TaxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "maxLength": 64,
      "section": "Tax Settings"
    },
    {
      "name": "TaxMode",
      "label": "Tax Mode",
      "type": "string",
      "required": false,
      "enum": [
        "TaxExclusive",
        "TaxInclusive",
        "null"
      ],
      "section": "Tax Settings"
    },
    {
      "name": "Taxable",
      "label": "Taxable",
      "type": "boolean",
      "required": false,
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
