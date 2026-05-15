import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_accountingcodeEndpoint: ApiEndpoint = {
  "id": "put-accountingcode",
  "name": "Update an accounting code",
  "description": "",
  "method": "PUT",
  "path": "/v1/accounting-codes/{ac-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ac-id",
      "label": "Ac Id",
      "type": "string",
      "required": true
    }
  ],
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
      "required": false,
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
