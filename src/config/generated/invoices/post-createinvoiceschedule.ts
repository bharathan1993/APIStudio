import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createinvoicescheduleEndpoint: ApiEndpoint = {
  "id": "post-createinvoiceschedule",
  "name": "Create an invoice schedule",
  "description": "",
  "method": "POST",
  "path": "/v1/invoice-schedules",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "additionalSubscriptionsToBill",
      "label": "Additional Subscriptions To Bill",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceSeparately",
      "label": "Invoice Separately",
      "type": "boolean",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "orders",
      "label": "Orders",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "scheduleItems",
      "label": "Schedule Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "percentage",
          "label": "Percentage",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "runDate",
          "label": "Run Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "targetDateForAdditionalSubscriptions",
          "label": "Target Date For Additional Subscriptions",
          "type": "date",
          "required": false,
          "section": "Subscription Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "specificSubscriptions",
      "label": "Specific Subscriptions",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "chargeNumbers",
          "label": "Charge Numbers",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "orderKey",
          "label": "Order Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionKey",
          "label": "Subscription Key",
          "type": "string",
          "required": false,
          "section": "Subscription Settings"
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
