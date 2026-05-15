import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemoitemsEndpoint: ApiEndpoint = {
  "id": "get-debitmemoitems",
  "name": "List debit memo items",
  "description": "",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoKey}/items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoKey",
      "label": "Debit Memo Key",
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
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false
    },
    {
      "name": "beAppliedAmount",
      "label": "Be Applied Amount",
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
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": false
    },
    {
      "name": "serviceEndDate",
      "label": "Service End Date",
      "type": "date",
      "required": false
    },
    {
      "name": "serviceStartDate",
      "label": "Service Start Date",
      "type": "date",
      "required": false
    },
    {
      "name": "sku",
      "label": "Sku",
      "type": "string",
      "required": false
    },
    {
      "name": "skuName",
      "label": "Sku Name",
      "type": "string",
      "required": false
    },
    {
      "name": "sourceItemId",
      "label": "Source Item Id",
      "type": "string",
      "required": false
    },
    {
      "name": "subscriptionId",
      "label": "Subscription Id",
      "type": "string",
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
