import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_taxationitemsofdebitmemoitemEndpoint: ApiEndpoint = {
  "id": "get-taxationitemsofdebitmemoitem",
  "name": "List all taxation items of a debit memo item",
  "description": "",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoId}/items/{dmitemid}/taxation-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoId",
      "label": "Debit Memo Id",
      "type": "string",
      "required": true
    },
    {
      "name": "dmitemid",
      "label": "Dmitemid",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
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
