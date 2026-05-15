import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_postusageEndpoint: ApiEndpoint = {
  "id": "object-postusage",
  "name": "CRUD: Create a usage record",
  "description": "",
  "method": "POST",
  "path": "/v1/object/usage",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
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
      "name": "AccountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "AccountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "ChargeNumber",
      "label": "Charge Number",
      "type": "string",
      "required": false,
      "maxLength": 50,
      "section": "Account Settings"
    },
    {
      "name": "ProductRatePlanChargeNumber",
      "label": "Product Rate Plan Charge Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "SubscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "ChargeId",
      "label": "Charge Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "Description",
      "label": "Description",
      "type": "string",
      "required": false,
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "EndDateTime",
      "label": "End Date Time",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "Quantity",
      "label": "Quantity",
      "type": "number",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "StartDateTime",
      "label": "Start Date Time",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "UOM",
      "label": "U O M",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "UniqueKey",
      "label": "Unique Key",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "SubscriptionId",
      "label": "Subscription Id",
      "type": "string",
      "required": false,
      "maxLength": 32,
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
