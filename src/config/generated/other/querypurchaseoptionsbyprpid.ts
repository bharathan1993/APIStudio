import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querypurchaseoptionsbyprpidEndpoint: ApiEndpoint = {
  "id": "querypurchaseoptionsbyprpid",
  "name": "Query purchase options by PRP ID",
  "description": "",
  "method": "POST",
  "path": "/commerce/purchase-options/list",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
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
      "name": "filters",
      "label": "Filters",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "field",
          "label": "Field",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "operator",
          "label": "Operator",
          "type": "string",
          "required": true,
          "enum": [
            "EQ",
            "NE",
            "LT",
            "GT",
            "SW",
            "IN",
            "EW",
            "LIKE"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "object",
          "required": true,
          "fields": [
            {
              "name": "string_value",
              "label": "String Value",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "number_value",
              "label": "Number Value",
              "type": "number",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "boolean_value",
              "label": "Boolean Value",
              "type": "boolean",
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
      "name": "expand",
      "label": "Expand",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "product_rate_plan_charges",
          "label": "Product Rate Plan Charges",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "product_rate_plan_charge_key",
      "label": "Product Rate Plan Charge Key",
      "type": "string",
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
          "name": "string_value",
          "label": "String Value",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "number_value",
          "label": "Number Value",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "boolean_value",
          "label": "Boolean Value",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "date_value",
          "label": "Date Value",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "datetime_value",
          "label": "Datetime Value",
          "type": "date",
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
