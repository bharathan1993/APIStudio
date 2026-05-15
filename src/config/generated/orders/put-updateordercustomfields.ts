import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateordercustomfieldsEndpoint: ApiEndpoint = {
  "id": "put-updateordercustomfields",
  "name": "Update order custom fields",
  "description": "",
  "method": "PUT",
  "path": "/v1/orders/{orderNumber}/customFields",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "subscriptions",
      "label": "Subscriptions",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "orderActions",
          "label": "Order Actions",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "orderActionId",
              "label": "Order Action Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "sequence",
              "label": "Sequence",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Subscription Settings"
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
