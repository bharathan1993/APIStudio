import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createproductEndpoint: ApiEndpoint = {
  "id": "createproduct",
  "name": "Create a product with plans and charges",
  "description": "",
  "method": "POST",
  "path": "/commerce/products",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "product_number",
      "label": "Product Number",
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
      "name": "start_date",
      "label": "Start Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": true,
      "enum": [
        "base",
        "add_on",
        "other"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "plans",
      "label": "Plans",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "start_date",
          "label": "Start Date",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "end_date",
          "label": "End Date",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "active_currencies",
          "label": "Active Currencies",
          "type": "array",
          "required": true,
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "charges",
          "label": "Charges",
          "type": "array",
          "required": true,
          "itemType": "object",
          "itemFields": [
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": true,
              "section": "Account Settings"
            },
            {
              "name": "charge_type",
              "label": "Charge Type",
              "type": "string",
              "required": true,
              "enum": [
                "one_time",
                "recurring",
                "usage"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "charge_model",
              "label": "Charge Model",
              "type": "string",
              "required": true,
              "enum": [
                "flat_fee",
                "per_unit",
                "overage",
                "volume",
                "tiered",
                "tiered_overage",
                "discount_fixed_amount",
                "discount_percentage",
                "custom_charge_model",
                "delivery",
                "minimum_commitment_true_up",
                "calculated",
                "high_water_mark_volume_pricing",
                "high_water_mark_tiered_pricing",
                "multi_attribute_pricing",
                "prerated_pricing",
                "prerated_per_unit"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "unit_of_measure",
              "label": "Unit Of Measure",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "list_price_base",
              "label": "List Price Base",
              "type": "string",
              "required": false,
              "enum": [
                "Per_Billing_Period",
                "Per_Month",
                "Per_Week",
                "Per_Year",
                "Per_Specific_Months",
                "Per_Validity_Period"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "default_quantity",
              "label": "Default Quantity",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "min_quantity",
              "label": "Min Quantity",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "max_quantity",
              "label": "Max Quantity",
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
                  "name": "flat_amounts",
                  "label": "Flat Amounts",
                  "type": "object",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "unit_amounts",
                  "label": "Unit Amounts",
                  "type": "object",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "tiers",
                  "label": "Tiers",
                  "type": "array",
                  "required": true,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "tier",
                      "label": "Tier",
                      "type": "string",
                      "required": true,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "from",
                      "label": "From",
                      "type": "number",
                      "required": true,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "up_to",
                      "label": "Up To",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "price_format",
                      "label": "Price Format",
                      "type": "string",
                      "required": true,
                      "enum": [
                        "price_format_flat_fee",
                        "price_format_per_unit"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "unit_amounts",
                      "label": "Unit Amounts",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "flat_amounts",
                      "label": "Flat Amounts",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "min_amounts",
                      "label": "Min Amounts",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "max_amounts",
                      "label": "Max Amounts",
                      "type": "object",
                      "required": false,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "discount_amounts",
                  "label": "Discount Amounts",
                  "type": "object",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "discount_percentage",
                  "label": "Discount Percentage",
                  "type": "number",
                  "required": true,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "bill_cycle",
              "label": "Bill Cycle",
              "type": "object",
              "required": true,
              "fields": [
                {
                  "name": "type",
                  "label": "Type",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "default_from_customer",
                    "specific_day_of_month",
                    "subscription_start_day",
                    "charge_trigger_day",
                    "specific_day_of_week",
                    "term_start_day",
                    "term_end_day"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "period",
                  "label": "Period",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "bill_cycle_period_month",
                    "bill_cycle_period_quarter",
                    "bill_cycle_period_semi_annual",
                    "bill_cycle_period_annual",
                    "bill_cycle_period_eighteen_months",
                    "bill_cycle_period_two_years",
                    "bill_cycle_period_three_years",
                    "bill_cycle_period_five_years",
                    "bill_cycle_period_specific_months",
                    "bill_cycle_period_subscription_term",
                    "bill_cycle_period_week",
                    "bill_cycle_period_specific_weeks",
                    "bill_cycle_period_specific_days"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "period_alignment",
                  "label": "Period Alignment",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "align_to_charge",
                    "align_to_subscription_start",
                    "align_to_term_start",
                    "align_to_term_end"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "timing",
                  "label": "Timing",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "in_advance",
                    "in_arrears"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "day_of_month",
                  "label": "Day Of Month",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "day_of_week",
                  "label": "Day Of Week",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "sunday",
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "specific_period",
                  "label": "Specific Period",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Invoice & Document Settings"
            },
            {
              "name": "trigger_event",
              "label": "Trigger Event",
              "type": "string",
              "required": true,
              "enum": [
                "contract_effective",
                "service_activation",
                "customer_acceptance",
                "specific_date"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "end_date_condition",
              "label": "End Date Condition",
              "type": "string",
              "required": true,
              "enum": [
                "subscription_end",
                "end_date_one_time",
                "fixed_period",
                "specific_end_date"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "up_to_periods_type",
              "label": "Up To Periods Type",
              "type": "string",
              "required": false,
              "enum": [
                "billing_periods",
                "days",
                "weeks",
                "months",
                "years"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "up_to_periods",
              "label": "Up To Periods",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "overage_options",
              "label": "Overage Options",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "number_of_periods",
                  "label": "Number Of Periods",
                  "type": "number",
                  "required": false,
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "price_increase_percentage",
              "label": "Price Increase Percentage",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "price_change_option",
              "label": "Price Change Option",
              "type": "string",
              "required": false,
              "enum": [
                "no_change",
                "specific_percentage_value",
                "use_latest_product_catalog_pricing"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "use_tenant_default_for_price_change",
              "label": "Use Tenant Default For Price Change",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "discount_options",
              "label": "Discount Options",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "discount_class",
                  "label": "Discount Class",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "stacked_discount",
                  "label": "Stacked Discount",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "apply_to",
                  "label": "Apply To",
                  "type": "array",
                  "required": false,
                  "itemType": "string",
                  "itemEnum": [
                    "one_time",
                    "recurring",
                    "usage"
                  ],
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "discount_level",
                  "label": "Discount Level",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "rate_plan",
                    "subscription",
                    "account"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "apply_to_billing_period_partially",
                  "label": "Apply To Billing Period Partially",
                  "type": "boolean",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "specific_accounting_codes",
                  "label": "Specific Accounting Codes",
                  "type": "boolean",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "reflect_discount_in_net_amount",
                  "label": "Reflect Discount In Net Amount",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "rollover",
                  "label": "Rollover",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "apply_details",
                  "label": "Apply Details",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "applied_product_rate_plan_id",
                      "label": "Applied Product Rate Plan Id",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "applied_product_rate_plan_charge_id",
                      "label": "Applied Product Rate Plan Charge Id",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Credit & Settlement Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "accounting",
              "label": "Accounting",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "accounting_code",
                  "label": "Accounting Code",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "accounts_receivable_account",
                  "label": "Accounts Receivable Account",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "accounts_receivable_account_type",
                  "label": "Accounts Receivable Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "deferred_revenue_account",
                  "label": "Deferred Revenue Account",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "deferred_revenue_accounting_type",
                  "label": "Deferred Revenue Accounting Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "recognized_revenue_account",
                  "label": "Recognized Revenue Account",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "recognized_revenue_account_type",
                  "label": "Recognized Revenue Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_liability_account",
                  "label": "Adjustment Liability Account",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_liability_account_type",
                  "label": "Adjustment Liability Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_revenue_account",
                  "label": "Adjustment Revenue Account",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_revenue_account_type",
                  "label": "Adjustment Revenue Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_asset_account",
                  "label": "Contract Asset Account",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_asset_account_type",
                  "label": "Contract Asset Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_liability_account",
                  "label": "Contract Liability Account",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_liability_account_type",
                  "label": "Contract Liability Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_recognized_revenue_account",
                  "label": "Contract Recognized Revenue Account",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_recognized_revenue_account_type",
                  "label": "Contract Recognized Revenue Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "unbilled_receivables_account",
                  "label": "Unbilled Receivables Account",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "unbilled_receivables_account_type",
                  "label": "Unbilled Receivables Account Type",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                }
              ],
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        }
      ],
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
