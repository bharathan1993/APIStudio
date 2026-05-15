import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const create_fulfillmentitemEndpoint: ApiEndpoint = {
  "id": "create-fulfillmentitem",
  "name": "Create fulfillment items",
  "description": "",
  "method": "POST",
  "path": "/v1/fulfillment-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "fulfillmentItems",
      "label": "Fulfillment Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "fulfillmentNumber",
          "label": "Fulfillment Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "itemIdentifier",
          "label": "Item Identifier",
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
