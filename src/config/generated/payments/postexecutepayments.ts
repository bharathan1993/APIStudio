import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postexecutepaymentsEndpoint: ApiEndpoint = {
  "id": "postexecutepayments",
  "name": "Execute payments",
  "description": "",
  "method": "POST",
  "path": "/api/v1/payments/execute_payments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "account_ids",
      "label": "Account Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Account Settings"
    },
    {
      "name": "debit_memo_ids",
      "label": "Debit Memo Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "invoice_ids",
      "label": "Invoice Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
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
