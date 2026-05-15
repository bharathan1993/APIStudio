import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_creditmemoitemsEndpoint: ApiEndpoint = {
  "id": "get-creditmemoitems",
  "name": "List credit memo items",
  "description": "",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoKey}/items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
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
      "name": "appliedAmount",
      "label": "Applied Amount",
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
      "name": "refundAmount",
      "label": "Refund Amount",
      "type": "number",
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
