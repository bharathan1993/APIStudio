import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_resumesubscriptionEndpoint: ApiEndpoint = {
  "id": "put-resumesubscription",
  "name": "Resume a subscription",
  "description": "",
  "method": "PUT",
  "path": "/v1/subscriptions/{subscription-key}/resume",
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
      "name": "applicationOrder",
      "label": "Application Order",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "bookingDate",
      "label": "Booking Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "contractEffectiveDate",
      "label": "Contract Effective Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "extendsTerm",
      "label": "Extends Term",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "orderDate",
      "label": "Order Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "resumePeriods",
      "label": "Resume Periods",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "resumePeriodsType",
      "label": "Resume Periods Type",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "resumePolicy",
      "label": "Resume Policy",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "resumeSpecificDate",
      "label": "Resume Specific Date",
      "type": "date",
      "required": false,
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
      "name": "applyCredit",
      "label": "Apply Credit",
      "type": "boolean",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "creditMemoReasonCode",
      "label": "Credit Memo Reason Code",
      "type": "string",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "collect",
      "label": "Collect",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Subscription Settings"
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "runBilling",
      "label": "Run Billing",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
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
