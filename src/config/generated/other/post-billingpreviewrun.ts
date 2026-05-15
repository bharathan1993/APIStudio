import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_billingpreviewrunEndpoint: ApiEndpoint = {
  "id": "post-billingpreviewrun",
  "name": "Create a billing preview run",
  "description": "",
  "method": "POST",
  "path": "/v1/billing-preview-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
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
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "storageOption",
      "label": "Storage Option",
      "type": "string",
      "required": false,
      "enum": [
        "Csv",
        "Database"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "storeDifference",
      "label": "Store Difference",
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
      "name": "filters",
      "label": "Filters",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "filterType",
          "label": "Filter Type",
          "type": "string",
          "required": true,
          "enum": [
            "Account"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "accountId",
          "label": "Account Id",
          "type": "string",
          "required": true,
          "pattern": "^[0-9a-fA-F]{32}$",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "batches",
      "label": "Batches",
      "type": "textarea",
      "required": false,
      "maxLength": 1000,
      "section": "Account Settings"
    },
    {
      "name": "includingEvergreenSubscription",
      "label": "Including Evergreen Subscription",
      "type": "boolean",
      "required": false,
      "section": "Subscription Settings"
    },
    {
      "name": "comparedBillingPreviewRunId",
      "label": "Compared Billing Preview Run Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
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
