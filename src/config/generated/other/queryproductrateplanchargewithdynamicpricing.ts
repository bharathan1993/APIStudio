import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryproductrateplanchargewithdynamicpricingEndpoint: ApiEndpoint = {
  "id": "queryproductrateplanchargewithdynamicpricing",
  "name": "Query a product rate plan charge with Dynamic Pricing",
  "description": "",
  "method": "POST",
  "path": "/commerce/charges/query",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "product_rate_plan_key",
      "label": "Product Rate Plan Key",
      "type": "string",
      "required": false,
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
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "evaluation_level",
      "label": "Evaluation Level",
      "type": "string",
      "required": false,
      "enum": [
        "LIST_PRICE",
        "EXTENDED_PRICE"
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
