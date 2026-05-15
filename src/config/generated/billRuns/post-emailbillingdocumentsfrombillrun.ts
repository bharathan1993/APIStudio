import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_emailbillingdocumentsfrombillrunEndpoint: ApiEndpoint = {
  "id": "post-emailbillingdocumentsfrombillrun",
  "name": "Email billing documents generated from a bill run",
  "description": "",
  "method": "POST",
  "path": "/v1/bill-runs/{billRunKey}/emails",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "billRunKey",
      "label": "Bill Run Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "resend",
      "label": "Resend",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
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
