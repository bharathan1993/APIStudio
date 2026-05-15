import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_systemhealthpaymentvolumesummaryEndpoint: ApiEndpoint = {
  "id": "get-systemhealthpaymentvolumesummary",
  "name": "List payment volume summary records",
  "description": "",
  "method": "GET",
  "path": "/system-health/payments/volume-summary",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "paymentGatewayType",
      "label": "Payment Gateway Type",
      "type": "string",
      "required": false
    },
    {
      "name": "paymentMethodType",
      "label": "Payment Method Type",
      "type": "string",
      "required": false
    },
    {
      "name": "startTime",
      "label": "Start Time",
      "type": "date",
      "required": true
    },
    {
      "name": "endTime",
      "label": "End Time",
      "type": "date",
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
