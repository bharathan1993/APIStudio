import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_ordertriggerdatesEndpoint: ApiEndpoint = {
  "id": "put-ordertriggerdates",
  "name": "Update order action trigger dates",
  "description": "",
  "method": "PUT",
  "path": "/v1/orders/{orderNumber}/triggerDates",
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
              "name": "charges",
              "label": "Charges",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "chargeNumber",
                  "label": "Charge Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "specificTriggerDate",
                  "label": "Specific Trigger Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "sequence",
              "label": "Sequence",
              "type": "number",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "triggerDates",
              "label": "Trigger Dates",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "ServiceActivation",
                    "CustomerAcceptance"
                  ],
                  "section": "Account Settings"
                },
                {
                  "name": "triggerDate",
                  "label": "Trigger Date",
                  "type": "date",
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
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": true,
          "maxLength": 100,
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
