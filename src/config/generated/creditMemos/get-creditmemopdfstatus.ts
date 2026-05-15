import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_creditmemopdfstatusEndpoint: ApiEndpoint = {
  "id": "get-creditmemopdfstatus",
  "name": "Retrieve the PDF file generation status of credit memos",
  "description": "",
  "method": "GET",
  "path": "/v1/credit-memos/pdf-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "creditMemoKeys",
      "label": "Credit Memo Keys",
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
