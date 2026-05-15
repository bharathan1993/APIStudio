import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_generatebillingdocumentsEndpoint: ApiEndpoint = {
  "id": "post-generatebillingdocuments",
  "name": "Generate billing documents by account ID",
  "description": "",
  "method": "POST",
  "path": "/v1/accounts/{key}/billing-documents/generate",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "autoPost",
      "label": "Auto Post",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "enum": [
        "true",
        "false"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "autoRenew",
      "label": "Auto Renew",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "enum": [
        "true",
        "false"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "chargeTypeToExclude",
      "label": "Charge Type To Exclude",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "includeOrderLineItems",
      "label": "Include Order Line Items",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "creditMemoReasonCode",
      "label": "Credit Memo Reason Code",
      "type": "string",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "includeSubscriptions",
      "label": "Include Subscriptions",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Subscription Settings"
    },
    {
      "name": "subscriptionIds",
      "label": "Subscription Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
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
