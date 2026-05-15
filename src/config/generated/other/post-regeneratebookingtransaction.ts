import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_regeneratebookingtransactionEndpoint: ApiEndpoint = {
  "id": "post-regeneratebookingtransaction",
  "name": "Regenerate booking transactions",
  "description": "",
  "method": "POST",
  "path": "/v1/uno-regenerate/booking-transaction",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "onlyReSend",
      "label": "Only Re Send",
      "type": "boolean",
      "required": false
    },
    {
      "name": "reMigrate",
      "label": "Re Migrate",
      "type": "boolean",
      "required": false
    }
  ],
  "bodyFields": [
    {
      "name": "itemNumber",
      "label": "Item Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "subscriptionName",
      "label": "Subscription Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "chargeNumber",
      "label": "Charge Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "orderLineItemId",
      "label": "Order Line Item Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ratePlanChargeId",
      "label": "Rate Plan Charge Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "enum": [
        "Subscription",
        "OrderLineItem",
        "DynamicUsageCharge"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "subscriptionId",
      "label": "Subscription Id",
      "type": "string",
      "required": false,
      "section": "Subscription Settings"
    },
    {
      "name": "subscriptionVersion",
      "label": "Subscription Version",
      "type": "number",
      "required": false,
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
