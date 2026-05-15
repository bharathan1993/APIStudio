import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentscheduleEndpoint: ApiEndpoint = {
  "id": "get-paymentschedule",
  "name": "Retrieve a payment schedule",
  "description": "",
  "method": "GET",
  "path": "/v1/payment-schedules/{paymentScheduleKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentScheduleKey",
      "label": "Payment Schedule Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "nextPendingItems",
      "label": "Next Pending Items",
      "type": "number",
      "required": false
    },
    {
      "name": "lastProcessedItems",
      "label": "Last Processed Items",
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
