import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_putproductrateplanchargetierEndpoint: ApiEndpoint = {
  "id": "object-putproductrateplanchargetier",
  "name": "CRUD: Update a product rate plan charge tier",
  "description": "",
  "method": "PUT",
  "path": "/v1/object/product-rate-plan-charge-tier/{id}",
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
      "maxLength": 8,
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
      "name": "DiscountAmount",
      "label": "Discount Amount",
      "type": "number",
      "required": false,
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
