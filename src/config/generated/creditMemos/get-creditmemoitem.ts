import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_creditmemoitemEndpoint: ApiEndpoint = {
  "id": "get-creditmemoitem",
  "name": "Retrieve a credit memo item",
  "description": "",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoKey}/items/{cmitemid}",
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
    },
    {
      "name": "cmitemid",
      "label": "Cmitemid",
      "type": "string",
      "required": true
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
