import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_postbillrunEndpoint: ApiEndpoint = {
  "id": "put-postbillrun",
  "name": "Post a bill run",
  "description": "",
  "method": "PUT",
  "path": "/v1/bill-runs/{billRunId}/post",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "billRunId",
      "label": "Bill Run Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": true,
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
