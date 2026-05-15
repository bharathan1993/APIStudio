import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_journalrunEndpoint: ApiEndpoint = {
  "id": "post-journalrun",
  "name": "Create a journal run",
  "description": "",
  "method": "POST",
  "path": "/v1/journal-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountingPeriodName",
      "label": "Accounting Period Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "journalEntryDate",
      "label": "Journal Entry Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "object",
      "required": false,
      "fields": [
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
      "name": "targetEndDate",
      "label": "Target End Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "targetStartDate",
      "label": "Target Start Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "transactionTypes",
      "label": "Transaction Types",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "enum": [
            "Invoice Item",
            "Taxation Item",
            "Invoice Item Adjustment (Invoice)",
            "Invoice Item Adjustment (Tax)",
            "Invoice Adjustment",
            "Electronic Payment",
            "External Payment",
            "Electronic Refund",
            "External Refund",
            "Electronic Credit Balance Payment",
            "External Credit Balance Payment",
            "Electronic Credit Balance Refund",
            "External Credit Balance Refund",
            "Credit Balance Adjustment (Applied from Credit Balance)",
            "Credit Balance Adjustment (Transferred to Credit Balance)",
            "Revenue Event Item",
            "Debit Memo Item (Charge)",
            "Debit Memo Item (Tax)",
            "Credit Memo Item (Charge)",
            "Credit Memo Item (Tax)",
            "Credit Memo Application Item",
            "Electronic Payment Application",
            "External Payment Application",
            "Electronic Refund Application",
            "External Refund Application",
            "Electronic Payment Application Item",
            "External Payment Application Item",
            "Electronic Refund Application Item",
            "External Refund Application Item"
          ],
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
