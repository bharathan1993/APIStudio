import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_generateeinvoicefileforcreditmemoEndpoint: ApiEndpoint = {
  "id": "put-generateeinvoicefileforcreditmemo",
  "name": "Generate an e-invoice file for a credit memo",
  "description": "",
  "method": "PUT",
  "path": "/v1/credit-memos/{creditMemoKey}/e-invoice/generate",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
