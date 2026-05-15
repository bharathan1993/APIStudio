import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_accountingcodeEndpoint: ApiEndpoint = {
  "id": "post-accountingcode",
  "name": "Create an accounting code",
  "description": "",
  "method": "POST",
  "path": "/v1/accounting-codes",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "glAccountName",
      "label": "Gl Account Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "glAccountNumber",
      "label": "Gl Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "notes",
      "label": "Notes",
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
      "section": "Additional Fields"
    },
    {
      "name": "segmentConstantValues",
      "label": "Segment Constant Values",
      "type": "object",
      "required": false,
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
