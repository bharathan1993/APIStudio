import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_taxationitemsofcreditmemoitemEndpoint: ApiEndpoint = {
  "id": "get-taxationitemsofcreditmemoitem",
  "name": "List all taxation items of a credit memo item",
  "description": "",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoId}/items/{cmitemid}/taxation-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoId",
      "label": "Credit Memo Id",
      "type": "string",
      "required": true
    },
    {
      "name": "cmitemid",
      "label": "Cmitemid",
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
