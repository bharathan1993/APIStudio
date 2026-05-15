import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_summaryjournalentryEndpoint: ApiEndpoint = {
  "id": "post-summaryjournalentry",
  "name": "Create a summary journal entry",
  "description": "",
  "method": "POST",
  "path": "/v1/journal-entries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountingPeriodName",
      "label": "Accounting Period Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "enum": [
        "No",
        "Processing",
        "Yes",
        "Error",
        "Ignore"
      ],
      "section": "Account Settings"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "journalEntryDate",
      "label": "Journal Entry Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "journalEntryItems",
      "label": "Journal Entry Items",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountingCodeName",
          "label": "Accounting Code Name",
          "type": "string",
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "accountingCodeType",
          "label": "Accounting Code Type",
          "type": "string",
          "required": false,
          "enum": [
            "AccountsReceivable",
            "On-Account Receivable",
            "Cash",
            "OtherAssets",
            "CustomerCashOnAccount",
            "DeferredRevenue",
            "SalesTaxPayable",
            "OtherLiabilities",
            "SalesRevenue",
            "SalesDiscounts",
            "OtherRevenue",
            "OtherEquity",
            "BadDebt",
            "OtherExpenses"
          ],
          "section": "Account Settings"
        },
        {
          "name": "amount",
          "label": "Amount",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "homeCurrencyAmount",
          "label": "Home Currency Amount",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "enum": [
            "Credit",
            "Debit"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabel",
      "label": "Organization Label",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "segments",
      "label": "Segments",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "segmentName",
          "label": "Segment Name",
          "type": "string",
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "segmentValue",
          "label": "Segment Value",
          "type": "string",
          "required": true,
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
