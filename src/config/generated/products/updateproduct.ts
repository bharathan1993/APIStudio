import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateproductEndpoint: ApiEndpoint = {
  "id": "updateproduct",
  "name": "Update a product",
  "description": "",
  "method": "PUT",
  "path": "/commerce/products",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "string",
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
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
