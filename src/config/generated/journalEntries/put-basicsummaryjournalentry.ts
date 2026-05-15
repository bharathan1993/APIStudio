import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_basicsummaryjournalentryEndpoint: ApiEndpoint = {
  "id": "put-basicsummaryjournalentry",
  "name": "Update a summary journal entry",
  "description": "",
  "method": "PUT",
  "path": "/v1/journal-entries/{je-number}/basic-information",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "je-number",
      "label": "Je Number",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "journalEntryItems",
      "label": "Journal Entry Items",
      "type": "array",
      "required": false,
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
