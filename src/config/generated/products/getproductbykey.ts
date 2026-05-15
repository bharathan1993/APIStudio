import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getproductbykeyEndpoint: ApiEndpoint = {
  "id": "getproductbykey",
  "name": "Retrieve a product by key",
  "description": "",
  "method": "POST",
  "path": "/commerce/products/{product_key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product_key",
      "label": "Product Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "expand",
      "label": "Expand",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "productRatePlans",
          "label": "Product Rate Plans",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanCharges",
          "label": "Product Rate Plan Charges",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "businessContextFilters",
          "label": "Business Context Filters",
          "type": "boolean",
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
