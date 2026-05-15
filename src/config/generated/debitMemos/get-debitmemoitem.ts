import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemoitemEndpoint: ApiEndpoint = {
  "id": "get-debitmemoitem",
  "name": "Retrieve a debit memo item",
  "description": "",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoKey}/items/{dmitemid}",
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
    },
    {
      "name": "dmitemid",
      "label": "Dmitemid",
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
