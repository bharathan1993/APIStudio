import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_regeneratebillingtransactionEndpoint: ApiEndpoint = {
  "id": "post-regeneratebillingtransaction",
  "name": "Regenerate billing transactions",
  "description": "",
  "method": "POST",
  "path": "/v1/uno-regenerate/billing-transaction",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "onlyReSend",
      "label": "Only Re Send",
      "type": "boolean",
      "required": false
    },
    {
      "name": "reMigrate",
      "label": "Re Migrate",
      "type": "boolean",
      "required": false
    }
  ],
  "bodyFields": [
    {
      "name": "id",
      "label": "Id",
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
        "Invoice",
        "CreditMemo",
        "DebitMemo",
        "InvoiceItemAdjustment"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "number",
      "label": "Number",
      "type": "string",
      "required": false,
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
