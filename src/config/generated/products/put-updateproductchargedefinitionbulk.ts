import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateproductchargedefinitionbulkEndpoint: ApiEndpoint = {
  "id": "put-updateproductchargedefinitionbulk",
  "name": "Update product charge definitions",
  "description": "",
  "method": "PUT",
  "path": "/v1/product-charge-definitions/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "productChargeDefinitions",
      "label": "Product Charge Definitions",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "billingPeriod",
          "label": "Billing Period",
          "type": "string",
          "required": false,
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
          "name": "chargeModel",
          "label": "Charge Model",
          "type": "string",
          "required": false,
          "enum": [
            "DiscountFixedAmount",
            "DiscountPercentage",
            "FlatFee",
            "PerUnit",
            "Tiered",
            "Volume",
            "Delivery"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "defaultQuantity",
          "label": "Default Quantity",
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
            "Per_Year"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "prices",
          "label": "Prices",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "currency",
              "label": "Currency",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "discountAmount",
              "label": "Discount Amount",
              "type": "number",
              "required": false,
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
              "name": "price",
              "label": "Price",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "tiers",
              "label": "Tiers",
              "type": "array",
              "required": false,
              "itemType": "array",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "productChargeDefinitionKey",
          "label": "Product Charge Definition Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "specificBillingPeriod",
          "label": "Specific Billing Period",
          "type": "number",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "specificListPriceBase",
          "label": "Specific List Price Base",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "taxCode",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "maxLength": 64,
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
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
          "name": "taxable",
          "label": "Taxable",
          "type": "boolean",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "term",
          "label": "Term",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "termPeriodType",
          "label": "Term Period Type",
          "type": "string",
          "required": false,
          "enum": [
            "Month",
            "Year",
            "Day",
            "Week",
            "null"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "termType",
          "label": "Term Type",
          "type": "string",
          "required": false,
          "enum": [
            "TERMED",
            "EVERGREEN",
            "null"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "uom",
          "label": "Uom",
          "type": "string",
          "required": false,
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
