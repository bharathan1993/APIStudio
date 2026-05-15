import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_cancelpaymentscheduleEndpoint: ApiEndpoint = {
  "id": "put-cancelpaymentschedule",
  "name": "Cancel a payment schedule",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-schedules/{paymentScheduleKey}/cancel",
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
  "bodyFields": [
    {
      "name": "cancelDate",
      "label": "Cancel Date",
      "type": "date",
      "required": true,
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
