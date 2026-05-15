import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_creditmemosEndpoint: ApiEndpoint = {
  "id": "get-creditmemos",
  "name": "List credit memos",
  "description": "",
  "method": "GET",
  "path": "/v1/credit-memos",
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
      "name": "accountNumber",
      "label": "Account Number",
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
      "name": "appliedAmount",
      "label": "Applied Amount",
      "type": "number",
      "required": false
    },
    {
      "name": "autoApplyUponPosting",
      "label": "Auto Apply Upon Posting",
      "type": "boolean",
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
      "name": "creditMemoDate",
      "label": "Credit Memo Date",
      "type": "date",
      "required": false
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false
    },
    {
      "name": "excludeFromAutoApplyRules",
      "label": "Exclude From Auto Apply Rules",
      "type": "boolean",
      "required": false
    },
    {
      "name": "number",
      "label": "Number",
      "type": "string",
      "required": false
    },
    {
      "name": "referredInvoiceId",
      "label": "Referred Invoice Id",
      "type": "string",
      "required": false
    },
    {
      "name": "refundAmount",
      "label": "Refund Amount",
      "type": "number",
      "required": false
    },
    {
      "name": "sourceId",
      "label": "Source Id",
      "type": "string",
      "required": false
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "enum": [
        "Draft",
        "Posted",
        "Canceled",
        "Error",
        "PendingForTax",
        "Generating",
        "CancelInProgress"
      ]
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false
    },
    {
      "name": "taxAmount",
      "label": "Tax Amount",
      "type": "number",
      "required": false
    },
    {
      "name": "totalTaxExemptAmount",
      "label": "Total Tax Exempt Amount",
      "type": "number",
      "required": false
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "enum": [
        "Processing",
        "Yes",
        "No",
        "Error",
        "Ignore"
      ]
    },
    {
      "name": "unappliedAmount",
      "label": "Unapplied Amount",
      "type": "number",
      "required": false
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
