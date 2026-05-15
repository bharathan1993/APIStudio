import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemopdfstatusEndpoint: ApiEndpoint = {
  "id": "get-debitmemopdfstatus",
  "name": "Retrieve the PDF file generation status of debit memos",
  "description": "",
  "method": "GET",
  "path": "/v1/debit-memos/pdf-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "debitMemoKeys",
      "label": "Debit Memo Keys",
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
