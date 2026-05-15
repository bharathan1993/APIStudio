import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentschedulesEndpoint: ApiEndpoint = {
  "id": "get-paymentschedules",
  "name": "List payment schedules by customer account",
  "description": "",
  "method": "GET",
  "path": "/v1/payment-schedules",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "lastProcessedItems",
      "label": "Last Processed Items",
      "type": "number",
      "required": false
    },
    {
      "name": "nextPendingItems",
      "label": "Next Pending Items",
      "type": "number",
      "required": false
    },
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "number",
      "required": false
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
