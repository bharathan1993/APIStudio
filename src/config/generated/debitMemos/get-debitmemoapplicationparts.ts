import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemoapplicationpartsEndpoint: ApiEndpoint = {
  "id": "get-debitmemoapplicationparts",
  "name": "List all application parts of a debit memo",
  "description": "",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoId}/application-parts",
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
