import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_billingpreviewEndpoint: ApiEndpoint = {
  "id": "post-billingpreview",
  "name": "Generate a billing preview",
  "description": "",
  "method": "POST",
  "path": "/v1/operations/billing-preview",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "assumeRenewal",
      "label": "Assume Renewal",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "chargeTypeToExclude",
      "label": "Charge Type To Exclude",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "includingDraftItems",
      "label": "Including Draft Items",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "includingEvergreenSubscription",
      "label": "Including Evergreen Subscription",
      "type": "boolean",
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
