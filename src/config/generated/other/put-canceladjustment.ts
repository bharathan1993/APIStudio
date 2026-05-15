import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_canceladjustmentEndpoint: ApiEndpoint = {
  "id": "put-canceladjustment",
  "name": "Cancel a delivery adjustment",
  "description": "",
  "method": "PUT",
  "path": "/v1/adjustments/{adjustmentId}/cancel",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "adjustmentId",
      "label": "Adjustment Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "debitMemoCustomFields",
      "label": "Debit Memo Custom Fields",
      "type": "object",
      "required": false,
      "section": "Credit & Settlement Settings"
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
