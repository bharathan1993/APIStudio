import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postsubmitpaymenttocycleEndpoint: ApiEndpoint = {
  "id": "postsubmitpaymenttocycle",
  "name": "Submit a payment to retry cycle",
  "description": "",
  "method": "POST",
  "path": "/api/v1/payments/submit_failed_payment",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "payment_id",
      "label": "Payment Id",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
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
