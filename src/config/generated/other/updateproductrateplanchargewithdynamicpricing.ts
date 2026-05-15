import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateproductrateplanchargewithdynamicpricingEndpoint: ApiEndpoint = {
  "id": "updateproductrateplanchargewithdynamicpricing",
  "name": "Update a product rate plan charge with Dynamic Pricing",
  "description": "",
  "method": "PUT",
  "path": "/commerce/charges",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "charge",
      "label": "Charge",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
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
          "name": "trigger_event",
          "label": "Trigger Event",
          "type": "string",
          "required": false,
          "enum": [
            "contract_effective",
            "service_activation",
            "customer_acceptance"
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
          "name": "list_price_base",
          "label": "List Price Base",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "bill_cycle",
          "label": "Bill Cycle",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": false,
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
              "section": "Additional Fields"
            },
            {
              "name": "period",
              "label": "Period",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "specific_period",
              "label": "Specific Period",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "period_alignment",
              "label": "Period Alignment",
              "type": "string",
              "required": false,
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
            }
          ],
          "section": "Invoice & Document Settings"
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
          "name": "rate_cards",
          "label": "Rate Cards",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "attributes",
              "label": "Attributes",
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
                  "name": "operator",
                  "label": "Operator",
                  "type": "string",
                  "required": false,
                  "enum": [
                    ">",
                    ">=",
                    "<",
                    "<=",
                    "==",
                    "between",
                    "between-inclusive"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "value",
                  "label": "Value",
                  "type": "object",
                  "required": false,
                  "fields": [],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "pricing",
              "label": "Pricing",
              "type": "object",
              "required": true,
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
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "tax_code",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "tax_mode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "price_change_option",
          "label": "Price Change Option",
          "type": "string",
          "required": false,
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
          "name": "delivery_schedule",
          "label": "Delivery Schedule",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "prepayment",
          "label": "Prepayment",
          "type": "object",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "prepaid",
          "label": "Prepaid",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "overage_options",
          "label": "Overage Options",
          "type": "object",
          "required": false,
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
        },
        {
          "name": "revenue",
          "label": "Revenue",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "netsuite",
          "label": "Netsuite",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "custom_fields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "labels",
          "label": "Labels",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "organization_labels",
          "label": "Organization Labels",
          "type": "array",
          "required": false,
          "itemType": "object",
          "section": "Additional Fields"
        },
        {
          "name": "ocm_json_by_currency",
          "label": "Ocm Json By Currency",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "attributes",
          "label": "Attributes",
          "type": "array",
          "required": false,
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
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": false,
              "enum": [
                "string",
                "integer",
                "double",
                "boolean",
                "date",
                "datetime"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "mapping",
              "label": "Mapping",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "object",
                  "label": "Object",
                  "type": "string",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "field",
                  "label": "Field",
                  "type": "string",
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
