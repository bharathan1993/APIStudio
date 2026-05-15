import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_ordersbyinvoiceownerEndpoint: ApiEndpoint = {
  "id": "get-ordersbyinvoiceowner",
  "name": "List orders of an invoice owner",
  "description": "",
  "method": "GET",
  "path": "/v1/orders/invoiceOwner/{accountNumber}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": true
    }
  ],
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
      "name": "dateFilterOption",
      "label": "Date Filter Option",
      "type": "string",
      "required": false
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "enum": [
        "all",
        "cancelled",
        "completed",
        "draft",
        "executing",
        "failed",
        "pending",
        "scheduled"
      ]
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
