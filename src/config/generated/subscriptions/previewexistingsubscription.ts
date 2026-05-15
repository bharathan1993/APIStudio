import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const previewexistingsubscriptionEndpoint: ApiEndpoint = {
  "id": "previewexistingsubscription",
  "name": "Preview a subscription by subscription key",
  "description": "",
  "method": "POST",
  "path": "/v1/subscriptions/{subscription-key}/preview",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "previewStartDate",
      "label": "Preview Start Date",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "previewStartDatePolicy",
          "label": "Preview Start Date Policy",
          "type": "string",
          "required": false,
          "enum": [
            "startOfTerm",
            "today",
            "specificDate"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "specificDate",
          "label": "Specific Date",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "previewThroughDate",
      "label": "Preview Through Date",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "previewThruDatePolicy",
          "label": "Preview Thru Date Policy",
          "type": "string",
          "required": false,
          "enum": [
            "nextBillingPeriods",
            "endOfTerm",
            "specificDate"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "nextBillingPeriods",
          "label": "Next Billing Periods",
          "type": "number",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "specificDate",
          "label": "Specific Date",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "quantityForUsageCharges",
      "label": "Quantity For Usage Charges",
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
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "skipTax",
      "label": "Skip Tax",
      "type": "boolean",
      "required": false,
      "section": "Tax Settings"
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
