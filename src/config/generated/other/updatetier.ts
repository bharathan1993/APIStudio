import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updatetierEndpoint: ApiEndpoint = {
  "id": "updatetier",
  "name": "Update a product rate plan charge tier",
  "description": "",
  "method": "PUT",
  "path": "/commerce/tiers",
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
      "name": "price",
      "label": "Price",
      "type": "number",
      "required": true,
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
