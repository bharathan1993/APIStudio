import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_refundsEndpoint: ApiEndpoint = {
  "id": "get-refunds",
  "name": "List refunds",
  "description": "",
  "method": "GET",
  "path": "/v1/refunds",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false
    },
    {
      "name": "createdById",
      "label": "Created By Id",
      "type": "string",
      "required": false
    },
    {
      "name": "createdDate",
      "label": "Created Date",
      "type": "date",
      "required": false
    },
    {
      "name": "methodType",
      "label": "Method Type",
      "type": "string",
      "required": false,
      "enum": [
        "ACH",
        "Cash",
        "Check",
        "CreditCard",
        "PayPal",
        "WireTransfer",
        "DebitCard",
        "CreditCardReferenceTransaction",
        "BankTransfer",
        "Other"
      ]
    },
    {
      "name": "number",
      "label": "Number",
      "type": "string",
      "required": false
    },
    {
      "name": "paymentId",
      "label": "Payment Id",
      "type": "string",
      "required": false
    },
    {
      "name": "refundDate",
      "label": "Refund Date",
      "type": "date",
      "required": false
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "enum": [
        "Processed",
        "Canceled",
        "Error",
        "Processing"
      ]
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "enum": [
        "External",
        "Electronic"
      ]
    },
    {
      "name": "updatedById",
      "label": "Updated By Id",
      "type": "string",
      "required": false
    },
    {
      "name": "updatedDate",
      "label": "Updated Date",
      "type": "date",
      "required": false
    },
    {
      "name": "sort",
      "label": "Sort",
      "type": "string",
      "required": false
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
