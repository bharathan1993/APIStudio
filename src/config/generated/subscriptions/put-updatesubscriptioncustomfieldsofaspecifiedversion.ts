import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatesubscriptioncustomfieldsofaspecifiedversionEndpoint: ApiEndpoint = {
  "id": "put-updatesubscriptioncustomfieldsofaspecifiedversion",
  "name": "Update subscription custom fields of a subscription version",
  "description": "",
  "method": "PUT",
  "path": "/v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": true
    },
    {
      "name": "version",
      "label": "Version",
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
      "name": "ratePlans",
      "label": "Rate Plans",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "charges",
          "label": "Charges",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "chargeId",
              "label": "Charge Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "chargeNumber",
              "label": "Charge Number",
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
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "ratePlanId",
          "label": "Rate Plan Id",
          "type": "string",
          "required": true,
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
